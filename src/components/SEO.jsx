// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";
import {useIntl} from "react-intl";

import {createIntl} from "../utils/createIntl";
import {createLanguageUrl} from "../utils/createLanguageUrl";

import config from "../../config";

// TODO Add at least 'og:image'
const SEO = props => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            twitterAuthor
            locales
          }
        }
      }
    `
  );

  const i = createIntl(useIntl());

  const baseUrl =
    config.env === "development"
      ? "http://localhost:8000"
      : site.siteMetadata.siteUrl;

  const createUrl = createLanguageUrl(baseUrl, props.pageKey);

  const description = props.description || i("meta_description");

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang={`${props.lang}`} />
      <title>{props.title}</title>

      <meta name="description" content={description} />

      <meta
        property="og:title"
        content={`${props.title} - ${site.siteMetadata.title}`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={createUrl(props.lang)} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata.twitterAuthor} />
      <meta name="twitter:creator" content={site.siteMetadata.twitterAuthor} />

      {site.siteMetadata.locales.map(locale => (
        <link
          rel="alternate"
          href={createUrl(locale)}
          hrefLang={locale}
          key={locale}
        />
      ))}
    </Helmet>
  );
};

SEO.propTypes = {
  lang: PropTypes.string.isRequired,
  pageKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default SEO;
