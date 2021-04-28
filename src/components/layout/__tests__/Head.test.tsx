// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery } from 'gatsby';

import Head from '../Head';

import headQuery from '../../../../test/data/headQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Head component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(headQuery));

  it('renders the tests correctly for Finnish index page', () => {
    const mockTitle = 'Antti Kivi - Helsinkiläinen yrittäjä';
    const mockDescription =
      'Etutöölöläinen yrittäjä ja tekijä. Haluan oppia päivittäin uutta ja mieluummin hymyilen kuin jätän hymyilemättä. Vapaalla rakastan järjestötoimintaa ja musiikkia.';

    const { container } = renderWithProviders(
      <Head
        home
        description="Etutöölöläinen yrittäjä ja tekijä. Haluan oppia päivittäin uutta ja mieluummin hymyilen kuin jätän hymyilemättä. Vapaalla rakastan järjestötoimintaa ja musiikkia."
        locale="fi"
        pageID="6JksITICuGCEYUIVHlWl5U"
        title="Etusivu"
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });

  it('renders the tests correctly for English index page', () => {
    const mockTitle = 'Antti Kivi - Entrepreneur from Finland';
    const mockDescription =
      'An entrepreneur and doer from Etu-Töölö, Helsinki. I’m all about learning something new every day and smiling as much as possible. In my free time I delight in politics and music.';

    const { container } = renderWithProviders(
      <Head
        home
        description="An entrepreneur and doer from Etu-Töölö, Helsinki. I’m all about learning something new every day and smiling as much as possible. In my free time I delight in politics and music."
        locale="en-GB"
        pageID="6JksITICuGCEYUIVHlWl5U"
        title="Front Page"
      />,
      'en',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });

  it('renders the tests correctly for Finnish CV page', () => {
    const mockTitle = 'Ansioluettelo - Antti Kivi';
    const mockDescription =
      'Etutöölöläinen yrittäjä ja tekijä. Haluan oppia päivittäin uutta ja mieluummin hymyilen kuin jätän hymyilemättä. Vapaalla rakastan järjestötoimintaa ja musiikkia.';

    const { container } = renderWithProviders(
      <Head
        description="Etutöölöläinen yrittäjä ja tekijä. Haluan oppia päivittäin uutta ja mieluummin hymyilen kuin jätän hymyilemättä. Vapaalla rakastan järjestötoimintaa ja musiikkia."
        locale="fi"
        pageID="29kQlzt1s2bR8OirrtTbCo"
        title="Ansioluettelo"
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });

  it('renders the tests correctly for English CV page', () => {
    const mockTitle = 'Curriculum Vitae - Antti Kivi';
    const mockDescription =
      'An entrepreneur and doer from Etu-Töölö, Helsinki. I’m all about learning something new every day and smiling as much as possible. In my free time I delight in politics and music.';

    const { container } = renderWithProviders(
      <Head
        description="An entrepreneur and doer from Etu-Töölö, Helsinki. I’m all about learning something new every day and smiling as much as possible. In my free time I delight in politics and music."
        locale="en-GB"
        pageID="29kQlzt1s2bR8OirrtTbCo"
        title="Curriculum Vitae"
      />,
      'en',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });
});
