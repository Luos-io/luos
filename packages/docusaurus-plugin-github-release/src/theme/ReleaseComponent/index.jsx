import React, { useEffect, useState } from 'react';
import { useVersions } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { major, minor } from 'semver';

export default function ReleaseComponent() {
  const { preferredVersion } = useDocsPreferredVersion();
  const allVersions = useVersions();
  const location = useLocation();
  const [releases, setReleases] = useState([]);

  console.log('ReleaseComponent, routectx', plugin, data);

  useEffect(() => {
    if (preferredVersion?.label) {
      import(
        `@github/release-${major(preferredVersion.label)}.${minor(preferredVersion.label)}.x.json`
      ).then(({ default: releases }) => setReleases(releases));
    } else {
      const foundCurrentVersion = allVersions.find(
        (version) => version.name !== 'current' && location.pathname.indexOf(version.path) !== -1,
      );
      console.log('ReleaseComponent, foundCurrentVersion', foundCurrentVersion);
      if (foundCurrentVersion) {
        import(
          `@github/release-${major(foundCurrentVersion.label)}.${minor(
            foundCurrentVersion.label,
          )}.x.json`
        ).then(({ default: releases }) => setReleases(releases));
      }
    }
  }, [preferredVersion]);

  console.log('ReleaseComponent, releases', releases);

  return releases.map((release, i) => (
    <div className="release" key={`release-${i}`}>
      Changelog for version : <span>{release.tag_name}</span>
    </div>
  ));
}
