// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import './matchMedia.mock';

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import NotFoundPage from '../NotFoundPage';

import layoutQuery from '../../../test/data/layoutQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Error layout component', () => {
  const pageContext = { locale: 'fi', pageID: '404' };

  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(<NotFoundPage pageContext={pageContext} />, 'fi');

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('404');
  });
});
