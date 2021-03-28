// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import createPagePath from '../../util/createPagePath';

const createPathFromSlug = (slug, locale, data) => {
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

const LocalizedLink = (props) => {
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
      }
    `,
  );

  const { defaultLocale, localePaths } = data.site.siteMetadata;

  if (props.to === '/') {
    return (
      <Link
        {...props}
        to={
          props.locale === defaultLocale ? '/' : `/${localePaths[props.locale.replace('-', '_')]}`
        }
      />
    );
  } else if (props.to === '/blog') {
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === props.locale)[0]
      .node;
    const pagePath =
      props.locale === defaultLocale
        ? `/${blogPath.slug}`
        : `/${localePaths[props.locale.replace('-', '_')]}/${blogPath.slug}`;
    return <Link {...props} to={pagePath} />;
  } else if (props.to.startsWith('/')) {
    const pageSlug = props.to.substring(1);
    const pagePath = createPathFromSlug(pageSlug, props.locale, data);

    if (pagePath) {
      return <Link {...props} to={pagePath} />;
    } else {
      return <Link {...props} />;
    }
  } else {
    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
    )[0].node;

    switch (node.internal.type) {
      case 'ContentfulIndexPage': {
        const indexPath =
          props.locale === defaultLocale ? '/' : `/${localePaths[props.locale.replace('-', '_')]}`;
        return <Link {...props} to={indexPath} />;
      }
      default:
        break;
    }
  }
};

export default LocalizedLink;
