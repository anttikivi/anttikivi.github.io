// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql, Link} from "gatsby";

import Navigation from "./Navigation";

import headerStyles from "./Header.module.scss";

const Header = ({isHome}) => {
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

  const siteTitle = isHome ? (
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
        <p className={headerStyles.siteDescription}>Helsinkiläinen yrittäjä</p>
      </div>
      <Navigation />
    </header>
  );
};

Header.defaultProps = {isHome: false};

Header.propTypes = {isHome: PropTypes.bool};

export default Header;
