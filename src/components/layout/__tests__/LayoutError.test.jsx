// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import './matchMedia.mock';

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import LayoutError from '../LayoutError';

import layoutQuery from '../../../../test/data/layoutQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Error layout component', () => {
  beforeAll(() => useStaticQuery.mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <LayoutError errorCode="404" locale="fi" pageID="404" title="Ei löydy">
        <p>Tätä sivua ei ole olemassa</p>
      </LayoutError>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('404');
  });
});
