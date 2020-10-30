// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import {Link} from "gatsby";

import {allFiles} from "../__generated__/all-pages";

const createLink = currentLocale => {
  const paths = allFiles;

  return linkProps => {
    let to = linkProps.to;
    const pageKey = linkProps.to.substring(1);
    const pageSlugs = require("../data/page-slugs.json");

    if (pageKey in pageSlugs && currentLocale in pageSlugs[pageKey]) {
      to = `/${pageSlugs[pageKey][currentLocale]}`;
    }

    const localeVersion = "/" + currentLocale + to;

    if (currentLocale !== "fi" && paths.includes(localeVersion)) {
      to = localeVersion;
    }

    return <Link {...linkProps} to={to} />;
  };
};

export default createLink;
