// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql, Link} from "gatsby";
import {useIntl} from "react-intl";

import Navigation from "./Navigation";

import {createIntl} from "../utils/createIntl";

import headerStyles from "./Header.module.scss";

const Header = props => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const i = createIntl(useIntl());

  const siteTitle = props.home ? (
    <h1 className={headerStyles.siteTitle}>
      <Link to="/">{site.siteMetadata.title}</Link>
    </h1>
  ) : (
    <p className={headerStyles.siteTitle}>
      <Link to="/">{site.siteMetadata.title}</Link>
    </p>
  );

  return (
    <header className={headerStyles.siteHeader}>
      <div className={headerStyles.siteBranding}>
        {siteTitle}
        <p className={headerStyles.siteDescription}>{i("headerByline")}</p>
      </div>
      <Navigation />
    </header>
  );
};

Header.defaultProps = {home: false};

Header.propTypes = {home: PropTypes.bool};

export default Header;
