// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React, {useState} from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import createLink from "./createLink";

import {createIntl} from "../utils/createIntl";

import navStyles from "./Navigation.module.scss";

const Navigation = props => {
  const [toggled, setToggled] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setToggled(!toggled);
  };

  const mainNavigationClasses = toggled
    ? `${navStyles.mainNavigation} ${navStyles.toggled}`
    : navStyles.mainNavigation;

  const toggleClasses = toggled
    ? `${navStyles.menuToggle} ${navStyles.toggled}`
    : navStyles.menuToggle;

  const i = createIntl(useIntl());
  const Link = createLink(props.lang);

  return (
    <nav id="site-navigation" className={mainNavigationClasses}>
      <div
        id="primary-menu-toggle"
        className={toggleClasses}
        aria-controls="primary-menu"
        aria-expanded={toggled.toString()}
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="menu-container">
        <ul id="primary-menu" className="menu">
          <li>
            <Link to="/">{i("navigation_home")}</Link>
          </li>
          <li>
            <Link to="/curriculum-vitae">
              {i("navigation_curriculum_vitae")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {lang: PropTypes.string.isRequired};

export default Navigation;
