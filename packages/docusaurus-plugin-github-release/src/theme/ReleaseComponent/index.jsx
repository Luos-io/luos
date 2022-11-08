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

  useEffect(() => {
    if (preferredVersion?.label) {
      import(
        `@github/release-${major(preferredVersion.label)}.${minor(preferredVersion.label)}.x.json`
      ).then(({ default: releases }) => setReleases(releases));
    } else {
      const foundCurrentVersion = allVersions.find(
        (version) => version.name !== 'current' && location.pathname.indexOf(version.path) !== -1,
      );
      if (foundCurrentVersion) {
        import(
          `@github/release-${major(foundCurrentVersion.label)}.${minor(
            foundCurrentVersion.label,
          )}.x.json`
        ).then(({ default: releases }) => setReleases(releases));
      }
    }
  }, [preferredVersion]);

  return releases.map((release, i) => (
    <ReactMarkdown key={`release-${i}`} children={release.body} remarkPlugins={[remarkGfm]} />
  ));
}
