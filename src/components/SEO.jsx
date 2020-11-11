// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";
import {useIntl} from "react-intl";

import {createIntl} from "../utils/createIntl";
import {createLanguageUrl} from "../utils/createLanguageUrl";

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
            author
            locales
          }
        }
      }
    `
  );

  const i = createIntl(useIntl());

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : site.siteMetadata.siteUrl;

  const createUrl = createLanguageUrl(baseUrl, props.pageKey);

  return (
    <Helmet
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author
        },
        {
          name: "twitter:title",
          content: `${props.title} - ${site.siteMetadata.title}`
        },
        {
          name: "twitter:description",
          content: i("meta_description")
        }
      ].concat(props.meta)}
    >
      <html lang={`${props.lang}`} />
      <title>{props.title}</title>
      <base href={baseUrl} />

      <meta name="description" content={i("meta_description")} />

      <meta
        property="og:title"
        content={`${props.title} - ${site.siteMetadata.title}`}
      />
      <meta property="og:description" content={i("meta_description")} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={createUrl(props.lang)} />

      {site.siteMetadata.locales.map(locale => {
        return (
          <link
            rel="alternate"
            href={createUrl(locale)}
            hrefLang={locale}
            key={locale}
          />
        );
      })}
    </Helmet>
  );
};

SEO.propTypes = {
  lang: PropTypes.string.isRequired,
  pageKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string
};

export default SEO;
