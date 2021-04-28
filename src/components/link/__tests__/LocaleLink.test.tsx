// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocaleLink from '../LocaleLink';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Locale link component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders Finnish correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink to="en-GB" pageID="6JksITICuGCEYUIVHlWl5U">
        Linkki
      </LocaleLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink to="fi" pageID="6JksITICuGCEYUIVHlWl5U">
        A link
      </LocaleLink>,
      'en',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });

  it('renders Finnish page correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink to="en-GB" pageID="29kQlzt1s2bR8OirrtTbCo">
        Linkki
      </LocaleLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });

  it('renders English page correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink to="fi" pageID="29kQlzt1s2bR8OirrtTbCo">
        A link
      </LocaleLink>,
      'en',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
