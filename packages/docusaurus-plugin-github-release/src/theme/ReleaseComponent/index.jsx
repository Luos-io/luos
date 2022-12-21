import { useVersions } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import React, { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { major, minor } from 'semver';

export default function ReleaseComponent() {
  const { preferredVersion } = useDocsPreferredVersion();
  const allVersions = useVersions();
  const location = useLocation();
  const [releases, setReleases] = useState([]);

  useEffect(async () => {
    let isSubscribed = true;
    const loadReleases = async (versionLabel) =>
      await import(`@github/release-${major(versionLabel)}.${minor(versionLabel)}.x.json`)
        .then(({ default: loadedReleases }) => {
          if (isSubscribed && loadedReleases) {
            setReleases(loadedReleases);
          }
        })
        .catch((err) => {
          console.warn(
            `Error while loading: '@github/release-${major(versionLabel)}.${minor(
              versionLabel,
            )}.x.json' file`,
            err,
          );
        });

    if (preferredVersion?.label) {
      await loadReleases(preferredVersion.label);
    } else {
      const foundCurrentVersion = allVersions.find(
        (version) => version.name !== 'current' && location.pathname.indexOf(version.path) !== -1,
      );
      if (foundCurrentVersion) {
        await loadReleases(foundCurrentVersion.label);
      }
    }

    return () => (isSubscribed = false);
  }, [preferredVersion]);

  return releases.map((release, i) => (
    <ReactMarkdown key={`release-${i}`} children={release.body} remarkPlugins={[remarkGfm]} />
  ));
}
