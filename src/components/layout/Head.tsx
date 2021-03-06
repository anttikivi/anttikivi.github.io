// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createInternationalization from '../../util/createInternationalization';
import createLocaleURL from '../../util/createLocaleURL';

const propTypes = {
  article: PropTypes.bool,
  author: PropTypes.shape({ twitter: PropTypes.string }),
  description: PropTypes.string,
  errorPage: PropTypes.bool,
  home: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  article: false,
  author: null,
  description: '',
  errorPage: false,
  home: false,
  image: null,
};

function Head({ article, author, description, errorPage, home, image, locale, pageID, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
        allContentfulCurriculumVitaePage(
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

  const { siteMetadata } = data.site;

  const intl = createInternationalization(useIntl());
  const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteMetadata.siteURL;

  const titleTemplate = home
    ? `${siteMetadata.title} - ${intl('headSlogan')}`
    : `%s - ${siteMetadata.title}`;
  const pageTitle = home
    ? `${siteMetadata.title} - ${intl('headSlogan')}`
    : `${title} - ${siteMetadata.title}`;
  const pageDescription = description === '' ? intl('headDescription') : description;

  // Use an anonymous function to resolve the lang attribute to make sure the value is valid.
  const lang: string = (() => {
    if (locale === 'en-GB') {
      return 'en';
    }

    return 'fi';
  })();

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={lang} />
      <title>{title}</title>

      <meta name="description" content={pageDescription} />

      <meta property="fb:app_id" content={siteMetadata.facebookAppID} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta
        property="og:type"
        content={(() => {
          if (article) {
            return 'article';
          }

          if (author) {
            return 'profile';
          }

          return 'website';
        })()}
      />
      <meta property="og:image" content={image ? image.file.url : `${baseURL}/thumbnail.png`} />
      <meta
        property="og:image:secure_url"
        content={image ? image.file.url : `${baseURL}/thumbnail.png`}
      />
      <meta property="og:image:type" content={image ? image.file.contentType : 'image/png'} />
      <meta property="og:image:alt" content={image ? image.description : intl('headOGImageText')} />
      <meta property="og:site_name" content={siteMetadata.title} />
      {(() => {
        if (errorPage) {
          const pagePath =
            locale === siteMetadata.defaultLocale
              ? '404'
              : `${siteMetadata.localePaths[locale.replace('-', '_')]}/404`;
          return <meta property="og:url" content={`${baseURL}/${pagePath}`} />;
        }

        return (
          <meta
            property="og:url"
            content={createLocaleURL(baseURL, pageID, locale, data).replace('//', '/')}
          />
        );
      })()}
      <meta property="og:locale" content={locale === 'fi' ? 'fi_FI' : locale.replace('-', '_')} />

      {siteMetadata.locales
        .filter((listLocale) => listLocale !== locale)
        .map((listLocale) => (
          <meta
            key={listLocale}
            property="og:locale:alternate"
            content={listLocale === 'fi' ? 'fi_FI' : listLocale.replace('-', '_')}
          />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterAuthor} />
      <meta
        name="twitter:creator"
        content={author && author.twitter ? `@${author.twitter}` : siteMetadata.twitterAuthor}
      />

      <link rel="stylesheet" href="https://use.typekit.net/fis6wxg.css" />

      {(() => {
        if (errorPage) {
          return siteMetadata.locales.map((listLocale) => (
            <link
              rel="alternate"
              href={`${baseURL}/${
                listLocale === siteMetadata.defaultLocale
                  ? '404'
                  : `${siteMetadata.localePaths[listLocale.replace('-', '_')]}/404`
              }`}
              hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
              key={listLocale}
            />
          ));
        }

        return siteMetadata.locales.map((listLocale) => (
          <link
            rel="alternate"
            href={createLocaleURL(baseURL, pageID, listLocale, data).replace('//', '/')}
            hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
            key={listLocale}
          />
        ));
      })()}
    </Helmet>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

export default Head;
