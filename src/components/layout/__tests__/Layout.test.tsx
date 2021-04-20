// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import './matchMedia.mock';

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Layout from '../Layout';

import layoutQuery from '../../../../test/data/layoutQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Layout component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <Layout locale="fi" pageID="29kQlzt1s2bR8OirrtTbCo" title="Curriculum Vitae">
        <p>Test content</p>
      </Layout>,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
