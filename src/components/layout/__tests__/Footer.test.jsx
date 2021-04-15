// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Footer from '../Footer';

import footerQuery from '../../../../test/data/footerQuery';
import renderWithReactIntlAndTheme from '../../../../test/renderWithReactIntlAndTheme';

describe('Footer component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue(footerQuery);
  });

  it('renders correctly', () => {
    const { getByAltText, getByText } = renderWithReactIntlAndTheme(
      <Footer locale="fi" pageID="6JksITICuGCEYUIVHlWl5U" />,
      'fi',
    );

    expect(getByText('Tämä sivusto on tehty', { exact: false }));
    expect(getByText('Visioston', { exact: false }));
    expect(getByText('linssin läpi', { exact: false }));
    expect(getByText('In English'));
    expect(getByAltText('Instagramin logo'));
    expect(getByAltText('Linkedinin logo'));
    expect(getByAltText('Twitterin logo'));
  });
});
