// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import '../../../../__mocks__/matchMedia';

import LayoutIndex from '../LayoutIndex';

import layoutQuery from '../../../../test/data/layoutQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Index layout component', () => {
  beforeAll(() => useStaticQuery.mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <LayoutIndex locale="fi" pageID="6JksITICuGCEYUIVHlWl5U" title="Etusivu">
        <p>Test content</p>
      </LayoutIndex>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Antti Kivi');
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Antti Kivi');
  });
});
