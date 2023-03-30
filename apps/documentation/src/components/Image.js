import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import ThemedImage from '@theme/ThemedImage';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import 'react-image-lightbox/style.css';

export const Image = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState();

  const baseSourcePath =
    siteConfig.customFields.isProd === true && location.pathname.indexOf('/docs') !== -1
      ? '/docs'
      : '';
  const sources = {
    light: `${baseSourcePath}${props.sources.light}`,
    dark: `${baseSourcePath}${props.sources.dark ? props.sources.dark : props.sources.light}`,
  };
  const height = props.height === undefined ? '100%' : props.height;
  const width = props.width === undefined ? null : props.width;
  return (
    <div style={{ display: 'flex' }}>
      <ThemedImage
        className="imgPreview"
        sources={sources}
        onClick={() => setIsOpen(true)}
        height={height}
        width={width}
        alt={props.alt ? props.alt : 'luos_img'}
      />
      {isOpen && <Lightbox mainSrc={sources.dark} onCloseRequest={() => setIsOpen(false)} />}
    </div>
  );
};

export default Image;
