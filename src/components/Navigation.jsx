// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React, {useState} from "react";
import {Link} from "gatsby";

import navStyles from "./Navigation.module.scss";

const Navigation = () => {
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
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="/ansioluettelo">Ansioluettelo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
