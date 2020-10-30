// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import mainStyles from "./Main.module.scss";

import styles from "./Common.module.scss";

const Main = ({children, isHome, isNotFound, title}) => {
  const pageTitle = (() => {
    if (isHome) {
      return (
        <h1 className={`${styles.alignCenter} ${mainStyles.frontPageTitle}`}>
          {title}
        </h1>
      );
    } else if (isNotFound) {
      return (
        <h1 className={`${styles.alignCenter} ${mainStyles.notFoundPageTitle}`}>
          {title}
        </h1>
      );
    }

    return (
      <h1 className={`${styles.alignCenter} ${mainStyles.pageTitle}`}>
        {title}
      </h1>
    );
  })();

  return (
    <main id="primary" className={mainStyles.siteMain}>
      <article>
        <header>{pageTitle}</header>
        {children}
      </article>
    </main>
  );
};

Main.defaultProps = {
  isHome: false,
  isNotFound: false
};

Main.propTypes = {
  children: PropTypes.node,
  isHome: PropTypes.bool,
  isNotFound: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Main;
