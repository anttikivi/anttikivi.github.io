// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocalizedLink from '../LocalizedLink';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Localized link component', () => {
  beforeAll(() => useStaticQuery.mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocalizedLink to="29kQlzt1s2bR8OirrtTbCo" locale="fi">
        Linkki
      </LocalizedLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });
});
