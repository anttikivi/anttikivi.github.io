// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import createLanguageLink from "./createLanguageLink";

import languageSwitcherStyles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = props => {
  const LanguageLink = createLanguageLink(props.pageKey);

  return (
    <>
      {(() => {
        if (props.lang !== "fi") {
          return (
            <>
              <LanguageLink
                className={languageSwitcherStyles.languageLink}
                to="fi"
              >
                Suomeksi
              </LanguageLink>
              <br className={languageSwitcherStyles.lineBreak} />
            </>
          );
        }

        return <></>;
      })()}
      {(() => {
        if (props.lang !== "en") {
          return (
            <>
              <LanguageLink
                className={languageSwitcherStyles.languageLink}
                to="en"
              >
                In English
              </LanguageLink>
            </>
          );
        }

        return <></>;
      })()}
    </>
  );
};

LanguageSwitcher.propTypes = {
  lang: PropTypes.string.isRequired,
  pageKey: PropTypes.string.isRequired
};

export default LanguageSwitcher;
