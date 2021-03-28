// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { ChevronRightIcon } from '@primer/octicons-react';
import { useIntl } from 'react-intl';

import LocalizedLink from '../link/LocalizedLink';
import Navigation from './Navigation';
import SchemedImage from '../SchemedImage';

import createIntl from '../../util/createIntl';

const Div = styled.header`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and ${(props) => props.theme.devices.mobileL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const TitleLink = styled(LocalizedLink)`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-primary);
  }
`;

// TODO Remove and use simpler components instead.
const siteTitleStyle = css`
  margin: 0;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 700;
  text-align: center;
`;

const SiteTitle = styled.h1`
  ${siteTitleStyle}
`;

const SiteTitleP = styled.p`
  ${siteTitleStyle}
`;

const SiteBranding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  text-align: center;

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 3rem auto;
  }
`;

const Breadcrumb = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const ChevronIcon = styled(ChevronRightIcon)`
  margin: 0 0 0.1rem;
`;

const createPath = (pathNode) => {
  if (pathNode.parentPath) {
    return concat(createPath(pathNode.parentPath)).concat([pathNode]);
  }

  return [pathNode];
};

const createBreadcrumbPath = (node, parentPath) => {
  let pagePath = [node];

  if (parentPath) {
    if (node.parentPath) {
      pagePath = createPath(parentPath).concat(createPath(node.parentPath)).concat(pagePath);
    } else {
      pagePath = createPath(parentPath).concat(pagePath);
    }
  } else if (node.parentPath) {
    pagePath = createPath(node.parentPath).concat(pagePath);
  }

  return pagePath;
};

const createBreadcrumb = (data, props) => {
  if (!props.errorPage) {
    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
    )[0].node;

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
        )[0].node;
        const authorPath = data.authorPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;

        return [authorPath, authorNode];
      }
      case 'ContentfulBlogPost': {
        const blogPostNode = data.allContentfulBlogPost.edges.filter(
          ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
        )[0].node;
        const blogPath = data.blogPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;

        return [blogPath, blogPostNode];
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
        )[0].node;
        const categoryPath = data.categoryPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;
        const parentPath = categoryPath.parentPath;

        return [parentPath, categoryPath, categoryNode];
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
        )[0].node;
        return createBreadcrumbPath(pageNode);
      }
      case 'ContentfulIndexPage': {
        return null;
      }
      case 'ContentfulPath': {
        const pathNode = data.allContentfulPath.edges.filter(
          ({ node }) => node.contentful_id === props.pageId && node.node_locale === props.locale,
        )[0].node;
        return createBreadcrumbPath(pathNode);
      }
      default:
        return null;
    }
  }
  return null;
};

const Header = (props) => {
  const i = createIntl(useIntl());

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            title
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

  const { site } = data;

  const breadcrumb = createBreadcrumb(data, props);

  return (
    <Div>
      <SiteBranding>
        <TitleLink to="/" locale={props.locale}>
          {(() => {
            if (props.home) {
              return <SiteTitle {...props}>{site.siteMetadata.title}</SiteTitle>;
            }

            return <SiteTitleP {...props}>{site.siteMetadata.title}</SiteTitleP>;
          })()}
        </TitleLink>
        <p>{i('headerByline')}</p>
      </SiteBranding>
      {/* <Navigation {...props} /> */}
      <Breadcrumb>
        {(() => {
          if (breadcrumb && breadcrumb.length > 1) {
            return breadcrumb.map((entry, index) => {
              const title = entry.name ? entry.name : entry.title;
              if (index === 0) {
                return (
                  <LocalizedLink to={entry.contentful_id} locale={props.locale}>
                    {title}
                  </LocalizedLink>
                );
              }
              return (
                <>
                  <ChevronIcon />
                  <LocalizedLink to={entry.contentful_id} locale={props.locale}>
                    {title}
                  </LocalizedLink>
                </>
              );
            });
          }
        })()}
      </Breadcrumb>
    </Div>
  );
};

export default Header;
