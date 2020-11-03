// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import {Link} from "gatsby";

import {allFiles} from "../__generated__/all-pages";

import pageSlugs from "../data/page-slugs.json";

const createLink = currentLocale => {
  const paths = allFiles;
  const slugs = pageSlugs;

  return linkProps => {
    const pageKey = linkProps.to.substring(1);
    let to = linkProps.to;

    if (pageKey in slugs && currentLocale in slugs[pageKey]) {
      to = `/${slugs[pageKey][currentLocale]}`;
    }

    const localeVersion =
      pageKey === "" ? `/${currentLocale}` : `/${currentLocale}${to}`;

    if (currentLocale !== "fi" && paths.includes(localeVersion)) {
      to = localeVersion;
    }

    return <Link {...linkProps} to={to} />;
  };
};

export default createLink;
