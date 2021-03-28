// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

// import createPagePath from './createPagePath';

const createLocaleURL = (baseURL, pageId, locale, data) => {
  const { defaultLocale, localePaths } = data.site.siteMetadata;

  const entryNode = data.allContentfulEntry.edges.filter(
    ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
  )[0].node;

  switch (entryNode.internal.type) {
    case 'ContentfulIndexPage': {
      return locale === defaultLocale
        ? baseURL
        : `${baseURL}/${localePaths[locale.replace('-', '_')]}`;
    }
    default:
      return null;
  }
};

export default createLocaleURL;
