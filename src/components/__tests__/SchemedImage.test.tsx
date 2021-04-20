// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import SchemedImage from '../SchemedImage';

import ImageData from '../../ImageData';

import renderWithProviders from '../../../test/renderWithProviders';
import schemedImageQuery from '../../../test/data/schemedImageQuery';

describe('Schemed image component', () => {
  it('renders correctly', () => {
    const { container, getByAltText } = renderWithProviders(
      <SchemedImage
        alt="Test"
        light={getImage(schemedImageQuery.assetLight as ImageData)!}
        dark={getImage(schemedImageQuery.assetDark as ImageData)!}
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByAltText('Test')).toBeInTheDocument();
  });

  it('renders presentation images correctly', () => {
    const { container, getByRole } = renderWithProviders(
      <SchemedImage
        light={getImage(schemedImageQuery.assetLight as ImageData)!}
        dark={getImage(schemedImageQuery.assetDark as ImageData)!}
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
