// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import footerQuery from './footerQuery';
import headerQuery from './headerQuery';
import headQuery from './headQuery';
import localizedLinkQuery from './localizedLinkQuery';
import navigationQuery from './navigationQuery';

const { site: linkSite, ...pages } = localizedLinkQuery;

export default {
  ...footerQuery,
  ...headerQuery,
  ...headQuery,
  ...navigationQuery,
  ...pages,
  site: {
    siteMetadata: {
      ...linkSite.siteMetadata,
      ...headerQuery.site.siteMetadata,
      ...headQuery.site.siteMetadata,
      socialMedia: {
        instagram: 'https://instagram.com/anttikiwi',
        linkedin: 'https://linkedin.com/in/anttikivi',
        twitter: 'https://twitter.com/anttikiwi',
      },
    },
  },
};
