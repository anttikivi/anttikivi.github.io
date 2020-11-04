// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import mainStyles from "./Main.module.scss";

import styles from "./Common.module.scss";

const Main = props => {
  const pageTitle = (() => {
    if (props.home) {
      return (
        <h1 className={`${styles.alignCenter} ${mainStyles.frontPageTitle}`}>
          {props.title}
        </h1>
      );
    } else if (props.notFound) {
      return (
        <h1 className={`${styles.alignCenter} ${mainStyles.notFoundPageTitle}`}>
          {props.title}
        </h1>
      );
    }

    return (
      <h1 className={`${styles.alignCenter} ${mainStyles.pageTitle}`}>
        {props.title}
      </h1>
    );
  })();

  return (
    <main id="primary" className={mainStyles.siteMain}>
      <article>
        <header>{pageTitle}</header>
        {props.children}
      </article>
    </main>
  );
};

Main.defaultProps = {
  home: false,
  notFound: false
};

Main.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string.isRequired,
  home: PropTypes.bool,
  notFound: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Main;
