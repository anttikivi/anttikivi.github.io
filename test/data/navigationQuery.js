// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import localizedLinkQuery from './localizedLinkQuery';

export default {
  ...localizedLinkQuery,
  allContentfulMenu: {
    edges: [
      {
        node: {
          node_locale: 'fi',
          links: [
            {
              contentful_id: '6JksITICuGCEYUIVHlWl5U',
              title: 'Etusivu',
              internal: {
                type: 'ContentfulIndexPage',
              },
            },
            {
              contentful_id: '29kQlzt1s2bR8OirrtTbCo',
              title: 'Ansioluettelo',
              internal: {
                type: 'ContentfulCurriculumVitaePage',
              },
            },
          ],
        },
      },
      {
        node: {
          node_locale: 'en-GB',
          links: [
            {
              contentful_id: '6JksITICuGCEYUIVHlWl5U',
              title: 'Front Page',
              internal: {
                type: 'ContentfulIndexPage',
              },
            },
            {
              contentful_id: '29kQlzt1s2bR8OirrtTbCo',
              title: 'Curriculum Vitae',
              internal: {
                type: 'ContentfulCurriculumVitaePage',
              },
            },
          ],
        },
      },
    ],
  },
};
