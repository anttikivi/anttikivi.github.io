// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import localizedLinkQuery from './localizedLinkQuery';
import navigationQuery from './navigationQuery';

const { site: linkSite, ...pages } = localizedLinkQuery;

export default {
  ...navigationQuery,
  ...pages,
  site: {
    siteMetadata: {
      ...linkSite.siteMetadata,
      defaultLocale: 'fi',
      title: 'Antti Kivi',
      localePaths: {
        en_GB: 'en',
        fi: '',
      },
    },
  },
  allContentfulEntry: {
    edges: [
      {
        node: {
          contentful_id: '6JksITICuGCEYUIVHlWl5U',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulIndexPage',
          },
        },
      },
      {
        node: {
          contentful_id: '6JksITICuGCEYUIVHlWl5U',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulIndexPage',
          },
        },
      },
      {
        node: {
          contentful_id: '12OH6cgaTcp4TUDvpqslYc',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulMenu',
          },
        },
      },
      {
        node: {
          contentful_id: '12OH6cgaTcp4TUDvpqslYc',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulMenu',
          },
        },
      },
      {
        node: {
          contentful_id: '29kQlzt1s2bR8OirrtTbCo',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulCurriculumVitaePage',
          },
        },
      },
      {
        node: {
          contentful_id: '29kQlzt1s2bR8OirrtTbCo',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulCurriculumVitaePage',
          },
        },
      },
    ],
  },
};
