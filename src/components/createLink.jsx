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

    console.log(
      "Going to construct link in locale",
      currentLocale,
      "to",
      linkProps.to
    );
    console.log("The page key is", pageKey);

    if (pageKey in slugs && currentLocale in slugs[pageKey]) {
      to = `/${slugs[pageKey][currentLocale]}`;
    }

    const localeVersion =
      pageKey === "" ? `/${currentLocale}` : `/${currentLocale}${to}`;

    console.log("The locale version of the path is", localeVersion);
    console.log("The paths include", paths);

    if (currentLocale !== "fi" && paths.includes(localeVersion)) {
      to = localeVersion;
    }

    console.log("The link points to", to);

    return <Link {...linkProps} to={to} />;
  };
};

export default createLink;
