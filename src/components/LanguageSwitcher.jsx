// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import createLanguageLink from "./createLanguageLink";

import languageSwitcherStyles from "./Footer.module.scss";

const LanguageSwitcher = props => {
  const LanguageLink = createLanguageLink(props.pageKey);

  return (
    <>
    {(() => {
      if (props.lang === "fi") {
        return <></>
      } else {
        return (
          <>
          <LanguageLink to="fi">Suomeksi</LanguageLink>
          <br className={languageSwitcherStyles.lineBreak} />
          </>
        )
      }
    })()}
    {(() => {
      if (props.lang === "en") {
        return <></>
      } else {
        return (
          <>
          <LanguageLink to="en">In English</LanguageLink>
          </>
        )
      }
    })()}
    </>
  );
};

LanguageSwitcher.propTypes = {
  lang: PropTypes.string.isRequired,
  pageKey: PropTypes.string.isRequired
};

export default LanguageSwitcher;
