// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createIntl from '../../util/createIntl';
import createLocaleURL from '../../util/createLocaleURL';

const Head = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            description
            facebookAppID
            locales
            siteURL
            title
            twitterAuthor
            localePaths {
              en_GB
              fi
            }
            simpleLocales {
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

  const { siteMetadata } = data.site;

  const i = createIntl(useIntl());
  const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteMetadata.siteURL;

  const titleTemplate = `%s - ${siteMetadata.title}`;
  const title = `${props.title} - ${siteMetadata.title}`;
  const description = props.description || i('metaDescription');

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={`${siteMetadata.simpleLocales[props.locale.replace('-', '_')]}`} />
      <title>{props.title}</title>

      <meta name="description" content={description} />

      <meta property="fb:app_id" content={siteMetadata.facebookAppID} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:type"
        content={(() => {
          if (props.article) {
            return 'article';
          } else if (props.author) {
            return 'profile';
          }
          return 'website';
        })()}
      />
      <meta
        property="og:image"
        content={props.image ? props.image.file.url : `${baseURL}/thumbnail.png`}
      />
      <meta
        property="og:image:secure_url"
        content={props.image ? props.image.file.url : `${baseURL}/thumbnail.png`}
      />
      <meta
        property="og:image:type"
        content={props.image ? props.image.file.contentType : 'image/png'}
      />
      <meta
        property="og:image:alt"
        content={props.image ? props.image.description : i('metaOgImageAlt')}
      />
      <meta property="og:site_name" content={siteMetadata.title} />
      {(() => {
        if (props.errorPage) {
          const pagePath =
            props.locale === siteMetadata.defaultLocale
              ? '404'
              : `${siteMetadata.localePaths[props.locale.replace('-', '_')]}/404`;
          return <meta property="og:url" content={`${baseURL}/${pagePath}`} />;
        } else {
          return (
            <meta
              property="og:url"
              content={createLocaleURL(baseURL, props.pageId, props.locale, data)}
            />
          );
        }
      })()}
      <meta
        property="og:locale"
        content={props.locale === 'fi' ? 'fi_FI' : props.locale.replace('-', '_')}
      />

      {siteMetadata.locales
        .filter((locale) => locale !== props.locale)
        .map((locale) => (
          <meta
            key={locale}
            property="og:locale:alternate"
            content={locale === 'fi' ? 'fi_FI' : locale.replace('-', '_')}
          />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterAuthor} />
      <meta
        name="twitter:creator"
        content={
          props.author && props.author.twitter
            ? `@${props.author.twitter}`
            : siteMetadata.twitterAuthor
        }
      />

      <link rel="stylesheet" href="https://use.typekit.net/fis6wxg.css" />

      {(() => {
        if (props.errorPage) {
          return siteMetadata.locales.map((locale) => (
            <link
              rel="alternate"
              href={`${baseURL}/${
                locale === siteMetadata.defaultLocale
                  ? '404'
                  : `${siteMetadata.localePaths[locale.replace('-', '_')]}/404`
              }`}
              hrefLang={siteMetadata.simpleLocales[locale.replace('-', '_')]}
              key={locale}
            />
          ));
        } else {
          return siteMetadata.locales.map((locale) => (
            <link
              rel="alternate"
              href={createLocaleURL(baseURL, props.pageId, locale, data)}
              hrefLang={siteMetadata.simpleLocales[locale.replace('-', '_')]}
              key={locale}
            />
          ));
        }
      })()}
    </Helmet>
  );
};

export default Head;
