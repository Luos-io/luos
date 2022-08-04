/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useColorMode } from '@docusaurus/theme-common';
import IdealImage from '@theme/IdealImage';

import 'react-image-lightbox/style.css';

const Image = ({
  src,
  darkSrc,
  width = '100%',
  height,
  alt = 'luos_img',
  withLightBox = false,
  loading,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState();
  const { colorMode } = useColorMode();
  const source = colorMode === 'dark' ? (darkSrc === undefined ? src : darkSrc) : src;
  return (
    <div>
      <IdealImage
        img={source}
        onClick={() => setIsOpen(true)}
        width={width}
        height={height}
        loading={loading}
        alt={alt}
        className={className}
        style={{
          ...style,
          cursor: withLightBox === true ? 'pointer' : 'default',
        }}
      />
      {withLightBox && isOpen && (
        <Lightbox mainSrc={darkSrc ? darkSrc : source} onCloseRequest={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Image;
