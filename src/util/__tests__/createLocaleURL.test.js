// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import createLocaleURL from '../createLocaleURL';

import entryIDs from '../../../test/data/entryIDs';
import pagesQuery from '../../../test/data/pagesQuery';

describe('function for creating localized URLs of pages', () => {
  const data = {
    site: { siteMetadata: { defaultLocale: 'fi', localePaths: { fi: '', 'en_GB': 'en' } } },
    ...pagesQuery,
  };
  const baseURL = 'https://anttikivi.fi';
  const { indexPageID, cvPageID } = entryIDs;

  it('creates Finnish index URL correctly', () => {
    expect(createLocaleURL(baseURL, indexPageID, 'fi', data)).toBe('https://anttikivi.fi');
  });

  it('creates English index URL correctly', () => {
    expect(createLocaleURL(baseURL, indexPageID, 'en-GB', data)).toBe('https://anttikivi.fi/en');
  });

  it('creates Finnish curriculum vitae URL correctly', () => {
    expect(createLocaleURL(baseURL, cvPageID, 'fi', data)).toBe(
      'https://anttikivi.fi/ansioluettelo',
    );
  });

  it('creates English curriculum vitae URL correctly', () => {
    expect(createLocaleURL(baseURL, cvPageID, 'en-GB', data)).toBe('https://anttikivi.fi/en/cv');
  });
});
