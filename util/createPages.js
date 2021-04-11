// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

const path = require('path');

// const createPagePath = require('./createPagePath');

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            alternativeURL
            defaultLocale
            defaultURL
            locales
            siteURL
            localePaths {
              en_GB
              fi
            }
          }
        }
        indexPages: allContentfulIndexPage(
          filter: { contentful_id: { eq: "6JksITICuGCEYUIVHlWl5U" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
            }
          }
        }
      }
    `,
  );

  if (query.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const {
    alternativeURL,
    defaultLocale,
    defaultURL,
    locales,
    localePaths,
    siteURL,
  } = query.data.site.siteMetadata;

  // Create the index page from Contentful.

  query.data.indexPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale } = node;

    reporter.verbose(`Creating the index page for ID '${pageId}'`);

    const pagePath = locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'index.jsx'),
      context: {
        locale,
        pageId,
      },
    };

    createPage(pageOpts);
  });

  // Create the redirects for the index page.
  createRedirect({
    fromPath: alternativeURL,
    toPath: siteURL,
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: defaultURL,
    toPath: siteURL,
    isPermanent: true,
    force: true,
  });

  // Create the 404 error pages.

  locales.forEach((locale) => {
    reporter.verbose(`Creating a 404 error page for the locale '${locale}'`);

    const pagePath =
      locale === defaultLocale ? '/404' : `/${localePaths[locale.replace('-', '_')]}/404`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', '404.jsx'),
      context: {
        locale,
        pageId: '404',
      },
    };

    createPage(pageOpts);
  });

  // Create the redirects for the 404 error pages.
  createRedirect({
    fromPath: '/en/*',
    toPath: `/en/404`,
    statusCode: 404,
  });
  createRedirect({
    fromPath: '/*',
    toPath: `/404`,
    statusCode: 404,
  });
};
