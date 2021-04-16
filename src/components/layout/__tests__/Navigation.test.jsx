// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Navigation from '../Navigation';

import navigationQuery from '../../../../test/data/navigationQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Navigation component', () => {
  beforeAll(() => useStaticQuery.mockReturnValue(navigationQuery));

  it('renders Finnish correctly', () => {
    const { container, getByText } = renderWithProviders(<Navigation locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Etusivu')).toBeInTheDocument();
    expect(getByText('Ansioluettelo')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = renderWithProviders(<Navigation locale="en-GB" />, 'en');

    expect(container).toMatchSnapshot();

    expect(getByText('Front Page')).toBeInTheDocument();
    expect(getByText('Curriculum Vitae')).toBeInTheDocument();
  });
});
