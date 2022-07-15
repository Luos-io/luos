import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
export default function DocItemMetadata() {
  const { metadata, frontMatter, assets } = useDoc();
  return (
    <PageMetadata
      title={metadata.version === 'current' ? title : `${title} for version ${metadata.verison}`}
      description={
        metadata.version === 'current'
          ? description
          : `${description} for version ${metadata.verison}`
      }
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}
