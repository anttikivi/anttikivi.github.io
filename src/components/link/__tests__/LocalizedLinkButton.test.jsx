// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocalizedLinkButton from '../LocalizedLinkButton';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Localized link button component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue(localizedLinkQuery);
  });

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocalizedLinkButton to="29kQlzt1s2bR8OirrtTbCo" locale="fi">
        Linkki
      </LocalizedLinkButton>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });
});
