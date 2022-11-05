import React, { useEffect, useState } from 'react';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import useRouteContext from '@docusaurus/';
import { major, minor } from 'semver';

export default function ReleaseComponent() {
  const { preferredVersion } = useDocsPreferredVersion();
  const { plugin, data } = useRouteContext();
  const [releases, setReleases] = useState([]);

  console.log('ReleaseComponent, routectx', plugin, data);

  useEffect(() => {
    if (preferredVersion?.label) {
      import(
        `@github/release-${major(preferredVersion.label)}.${minor(preferredVersion.label)}.x.json`
      ).then(({ default: releases }) => setReleases(releases));
    }
  }, [preferredVersion]);

  console.log('ReleaseComponent, releases', releases);

  return releases.map((release, i) => (
    <div className="release" key={`release-${i}`}>
      Changelog for version : <span>{release.tag_name}</span>
    </div>
  ));
}
