// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

export default {
  site: {
    siteMetadata: {
      defaultLocale: 'fi',
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
  cvPages: {
    edges: [
      {
        node: {
          contentful_id: '29kQlzt1s2bR8OirrtTbCo',
          node_locale: 'fi',
          slug: 'ansioluettelo',
        },
      },
      {
        node: {
          contentful_id: '29kQlzt1s2bR8OirrtTbCo',
          node_locale: 'en-GB',
          slug: 'cv',
        },
      },
    ],
  },
};
