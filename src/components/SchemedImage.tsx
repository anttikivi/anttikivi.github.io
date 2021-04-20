// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  dark: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  light: PropTypes.object.isRequired,
  objectFit: PropTypes.string,
};

const defaultProps = {
  alt: '',
  className: null,
  objectFit: null,
};

function SchemedImage({ alt, className, dark, light, objectFit }) {
  const { colorMode } = useContext(ThemeContext);

  if (colorMode === 'dark') {
    if (alt === '') {
      return (
        <GatsbyImage
          className={className}
          image={dark}
          alt=""
          role="presentation"
          objectFit={objectFit}
        />
      );
    }
    return <GatsbyImage className={className} image={dark} alt={alt} objectFit={objectFit} />;
  }

  if (alt === '') {
    return (
      <GatsbyImage
        className={className}
        image={light}
        alt=""
        role="presentation"
        objectFit={objectFit}
      />
    );
  }
  return <GatsbyImage className={className} image={light} alt={alt} objectFit={objectFit} />;
}

SchemedImage.propTypes = propTypes;
SchemedImage.defaultProps = defaultProps;

export default SchemedImage;
