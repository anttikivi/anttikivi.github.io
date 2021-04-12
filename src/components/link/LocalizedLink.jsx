// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

import createPagePath from '../../util/createPagePath';

const createPathFromSlug = function createPathFromSlugForLocale(slug, locale, data) {
  const { defaultLocale, localePaths } = data.site.siteMetadata;

  const authorNodes = data.allContentfulAuthor.edges.filter(({ node }) => node.slug === slug);

  if (authorNodes.length > 0) {
    const nodeID = authorNodes[0].node.contentful_id;
    const nodes = data.allContentfulAuthor.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const authorPath = data.authorPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
      .node;
    return createPagePath(node, locale, defaultLocale, localePaths, authorPath);
  }

  const blogPostNodes = data.allContentfulBlogPost.edges.filter(({ node }) => node.slug === slug);

  if (blogPostNodes.length > 0) {
    const nodeID = blogPostNodes[0].node.contentful_id;
    const nodes = data.allContentfulBlogPost.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, blogPath);
  }

  const categoryNodes = data.allContentfulCategory.edges.filter(({ node }) => node.slug === slug);

  if (categoryNodes.length > 0) {
    const nodeID = categoryNodes[0].node.contentful_id;
    const nodes = data.allContentfulCategory.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const categoryPath = data.categoryPaths.edges.filter(
      ({ node }) => node.node_locale === locale,
    )[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, categoryPath);
  }

  const pageNodes = data.allContentfulPage.edges.filter(({ node }) => node.slug === slug);

  if (pageNodes.length > 0) {
    const nodeID = pageNodes[0].node.contentful_id;
    const nodes = data.allContentfulPage.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  const pathNodes = data.allContentfulPath.edges.filter(({ node }) => node.slug === slug);

  if (pathNodes.length > 0) {
    const nodeID = pathNodes[0].node.contentful_id;
    const nodes = data.allContentfulPath.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  return null;
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null, onClick: null };

function LocalizedLink({ children, className, locale, onClick, to }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            localePaths {
              en_GB
              fi
            }
          }
        }
        allContentfulEntry {
          edges {
            node {
              contentful_id
              node_locale
              internal {
                type
              }
            }
          }
        }
        cvPages: allContentfulCurriculumVitaePage(
          filter: { contentful_id: { eq: "29kQlzt1s2bR8OirrtTbCo" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
      }
    `,
  );

  const { defaultLocale, localePaths } = data.site.siteMetadata;

  if (to === '/') {
    return (
      <Link
        children={children}
        className={className}
        onClick={onClick}
        to={locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`}
      />
    );
  } else if (to === '/blog') {
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0].node;
    const pagePath =
      locale === defaultLocale
        ? `/${blogPath.slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogPath.slug}`;
    return <Link children={children} className={className} onClick={onClick} to={pagePath} />;
  } else if (to.startsWith('/')) {
    const pageSlug = to.substring(1);
    const pagePath = createPathFromSlug(pageSlug, locale, data);

    if (pagePath) {
      return <Link children={children} className={className} onClick={onClick} to={pagePath} />;
    } else {
      return <Link children={children} className={className} onClick={onClick} />;
    }
  } else if (to === '404') {
    const pagePath =
      locale === defaultLocale ? '/404' : `/${localePaths[locale.replace('-', '_')]}/404`;
    return <Link children={children} className={className} onClick={onClick} to={pagePath} />;
  } else {
    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === to && node.node_locale === locale,
    )[0].node;

    switch (node.internal.type) {
      case 'ContentfulCurriculumVitaePage': {
        const pageNode = data.cvPages.edges.filter(
          ({ node }) => node.contentful_id === to && node.node_locale === locale,
        )[0].node;
        return (
          <Link
            children={children}
            className={className}
            onClick={onClick}
            to={createPagePath(pageNode, locale, defaultLocale, localePaths)}
          />
        );
      }
      case 'ContentfulIndexPage': {
        const indexPath =
          locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;
        return <Link children={children} className={className} onClick={onClick} to={indexPath} />;
      }
      default: {
        break;
      }
    }
  }
}

LocalizedLink.propTypes = propTypes;
LocalizedLink.defaultProps = defaultProps;

export default LocalizedLink;
