// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocaleSwitcher from '../LocaleSwitcher';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Locale switcher component', () => {
  beforeAll(() => useStaticQuery.mockReturnValue(localizedLinkQuery));

  it('renders Finnish index switcher correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleSwitcher locale="fi" pageID="6JksITICuGCEYUIVHlWl5U" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('In English')).toBeInTheDocument();
  });

  it('renders English index switcher correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleSwitcher locale="en-GB" pageID="6JksITICuGCEYUIVHlWl5U" />,
      'en',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Suomeksi')).toBeInTheDocument();
  });
});
