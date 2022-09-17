import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import 'react-image-lightbox/style.css';

const Image = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState();
  const { isDarkTheme } = useColorMode();
  const getSource = () => {
    const { customFields } = siteConfig;
    let source = props.src;

    if (isDarkTheme && props.darkSrc !== undefined) {
      source = props.darkSrc;
    }
    if (customFields.isProd === true && source.indexOf('/documentation') === -1) {
      return `/documentation${source}`;
    }

    return source;
  };

  const height = props.height === undefined ? '100%' : props.height;
  const width = props.width === undefined ? null : props.width;

  return (
    <div style={{ display: 'inline', marginRight: '15px' }}>
      <Image
        className="imgPreview"
        src={getSource()}
        onClick={() => setIsOpen(true)}
        height={height}
        width={width}
        alt={props.alt ? props.alt : 'luos_img'}
      />
      {isOpen && (
        <Lightbox
          mainSrc={props.darkSrc ? props.darkSrc : getSource()}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Image;
