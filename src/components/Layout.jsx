// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SEO from "./SEO";

import layoutStyles from "./Layout.module.scss";

const Layout = props => (
  <>
    <SEO title={props.title} />
    <div className={layoutStyles.site}>
      <Header home={props.isHome} />
      <Main home={props.home} notFound={props.notFound} title={props.title}>
        {props.children}
      </Main>
      <Footer />
    </div>
  </>
);

Layout.defaultProps = {
  home: false,
  notFound: false
};

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
  notFound: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Layout;
