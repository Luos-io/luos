const { Joi } = require('@docusaurus/utils-validation');
const { clean, major, minor, satisfies } = require('semver');

async function pluginGithubRelease(_context, options) {
  return {
    name: 'docusaurus-plugin-github-release',

    getThemePath() {
      return '../src/theme';
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@github': `@site/.docusaurus/${this.name}/default`,
          },
        },
      };
    },

    async loadContent() {
      try {
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(
          `https://data.mongodb-api.com/app/${options.appService}/endpoint/data/v1/action/find`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': options.apiKey,
            },
            body: JSON.stringify({
              dataSource: 'luos-dev',
              database: 'app',
              collection: 'github',
              filter: {
                release: { $exists: true },
                'repository.name': 'luos_engine',
              },
            }),
          },
        );
        const { documents } = await response.json();
        return documents;
      } catch (err) {
        console.warn('Cannot fetch GitHub API...', err);
        return null;
      }
    },

    async contentLoaded({ content: releases, actions: { createData }, allContent }) {
      const versionsList = allContent?.['docusaurus-plugin-content-docs']?.default?.loadedVersions;
      if (versionsList) {
        await versionsList.map(async ({ versionName, label }) => {
          const cleanedLabel = clean(label);
          const relatedReleases = releases.reduce((acc, { release }) => {
            if (
              versionName !== 'current' &&
              cleanedLabel &&
              satisfies(release.tag_name, `~${cleanedLabel}`)
            ) {
              acc.push(release);
            }

            return acc;
          }, []);

          if (relatedReleases.length > 0) {
            await createData(
              `release-${major(cleanedLabel)}.${minor(cleanedLabel)}.x.json`,
              JSON.stringify(relatedReleases),
            );
          }
        });
      }
    },
  };
}

pluginGithubRelease.validateOptions = ({ options, validate }) => {
  require('dotenv-vault-core').config({
    debug: options?.debug ?? false,
    path: options?.dotenv?.path ?? '.env',
  });

  const defaultOptions = {
    appService: options.appService || process.env.MONGODB_APP_SERVICE,
    apiKey: options.apiKey || process.env.MONGODB_API_KEY,
  };
  return validate(
    Joi.object({
      apiKey: Joi.string().required(),
      appService: Joi.string().required(),
      debug: Joi.boolean().optional(),
      dotenv: Joi.object({
        path: Joi.string().required(),
      }).optional(),
    }),
    defaultOptions,
  );
};

module.exports = pluginGithubRelease;
