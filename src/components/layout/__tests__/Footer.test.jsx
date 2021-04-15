// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Footer from '../Footer';

import footerQuery from '../../../../test/data/footerQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Header component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue(footerQuery);
  });

  it('renders correctly', () => {
    const { container, getByAltText, getByText } = renderWithProviders(
      <Footer locale="fi" pageID="6JksITICuGCEYUIVHlWl5U" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Tämä sivusto on tehty', { exact: false }));
    expect(getByText('Visioston', { exact: false }));
    expect(getByText('linssin läpi', { exact: false }));
    expect(getByText('In English'));

    expect(getByAltText('Instagramin logo'));
    expect(getByAltText('Linkedinin logo'));
    expect(getByAltText('Twitterin logo'));
  });
});
