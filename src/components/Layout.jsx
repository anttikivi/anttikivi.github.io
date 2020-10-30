// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import layoutStyles from "./Layout.module.scss";

const Layout = ({children, isHome, isNotFound, title}) => (
  <div className={layoutStyles.site}>
    <Header isHome={isHome} />
    <Main isHome={isHome} isNotFound={isNotFound} title={title}>
      {children}
    </Main>
    <Footer />
  </div>
);

Layout.defaultProps = {
  isHome: false,
  isNotFound: false
};

Layout.propTypes = {
  children: PropTypes.node,
  isHome: PropTypes.bool,
  isNotFound: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Layout;
