// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

// const createPagePath = require('./createPagePath');

const htmlTreeToText = (elements) =>
  elements.map((element) =>
    element.type === 'text' ? element.value : htmlTreeToText(element.children),
  );

const createFromHTMLAST = (elements) =>
  htmlTreeToText(elements).reduce((accumulator, element) =>
    element === '\n' ? `${accumulator}` : `${accumulator} ${element}`,
  );

// const createBlogPageEntry = (node, blogNodes, locale, defaultLocale, localePaths) => {
//   const content = [
//     node.title,
//     ...blogNodes.map(
//       ({ node: postNode }) =>
//         `${postNode.title} ${postNode.author.name} ${postNode.category.name} ${postNode.body.childMarkdownRemark.excerpt}`,
//     ),
//   ];

//   const page = {
//     slug:
//       locale === defaultLocale
//         ? `/${node.slug}`
//         : `/${localePaths[locale.replace('-', '_')]}/${node.slug}`,
//     id: node.contentful_id,
//     title: node.title,
//     excerpt: `${blogNodes[0].node.title} ${blogNodes[0].node.author.name} ${blogNodes[0].node.category.name} ${blogNodes[0].node.body.childMarkdownRemark.excerpt}`,
//     content: content.join(' '),
//   };

//   return page;
// };

// const createBlogPostContent = (node) => {
//   const content = [
//     node.title,
//     node.author.name,
//     node.category.name,
//     createFromHTMLAST(node.body.childMarkdownRemark.htmlAst.children),
//   ];

//   return content.join(' ');
// };

const createIndexPageEntry = (node, locale, defaultLocale, localePaths) => {
  const content = [
    node.introTitle,
    createFromHTMLAST(node.introBody.childMarkdownRemark.htmlAst.children),
  ];

  const page = {
    slug: locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`,
    id: node.contentful_id,
    title: node.title,
    excerpt: node.introBody.childMarkdownRemark.excerpt,
    content: content.join(' '),
  };

  return page;
};

module.exports = async ({ graphql, reporter }) => {
  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
            locales
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
              introTitle
              node_locale
              title
              introBody {
                childMarkdownRemark {
                  excerpt
                  htmlAst
                }
              }
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

  const { defaultLocale, localePaths, locales } = query.data.site.siteMetadata;

  const searchData = {};

  locales.forEach((locale) => {
    searchData[locale] = { pages: [] };
  });

  // Create the index page entries.

  locales.forEach((locale) => {
    const { node: indexNode } = query.data.indexPages.edges.filter(
      ({ node: pageNode }) => pageNode.node_locale === locale,
    )[0];
    reporter.verbose(`Creating search index entry for the index page for locale: ${locale}`);
    searchData[locale].pages.push(
      createIndexPageEntry(indexNode, locale, defaultLocale, localePaths),
    );
  });

  const searchPath = path.join(__dirname, '..', 'public', 'search');

  if (!fs.existsSync(searchPath)) {
    fs.mkdirSync(searchPath);
  }

  query.data.site.siteMetadata.locales.forEach((locale) => {
    const localeFile = path.join(searchPath, `pages-${locale.toLowerCase()}.json`);
    fs.writeFileSync(localeFile, JSON.stringify(searchData[locale]));
  });
};
