// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import LanguageSwitcher from "./LanguageSwitcher";

import footerStyles from "./Footer.module.scss";

import {DISPLAY_LANGUAGE_SWITCHER} from "../site-constants";

import {createIntl} from "../utils/createIntl";

import iconInstagram from "../images/footer/instagram_footer.png";
import iconLinkedin from "../images/footer/linkedin_footer.png";
import iconTwitter from "../images/footer/twitter_footer.png";

const Footer = props => {
  const i = createIntl(useIntl());

  return (
    <footer id="colophon" className={footerStyles.siteFooter}>
      {(() => {
        if (!props.notFound && DISPLAY_LANGUAGE_SWITCHER) {
          return (
            <div className={footerStyles.languages}>
              <LanguageSwitcher {...props} />
            </div>
          );
        }
      })()}
      <div className={footerStyles.socialMediaInfo}>
        <a
          rel="noopener noreferrer"
          className={footerStyles.socialMediaAnchor}
          href="https://instagram.com/anttikiwi"
          target="_blank"
        >
          <img
            alt={i("footer_alt_instagram_logo")}
            className={
              `${footerStyles.socialMediaIcon} ` +
              `${footerStyles.socialMediaIconInstagramAlternative}`
            }
            src={iconInstagram}
          />
        </a>
        <a
          rel="noopener noreferrer"
          className={footerStyles.socialMediaAnchor}
          href="https://linkedin.com/in/anttikivi"
          target="_blank"
        >
          <img
            alt={i("footer_alt_linkedin_logo")}
            className={
              `${footerStyles.socialMediaIcon} ` +
              `${footerStyles.socialMediaIconLinkedinAlternative}`
            }
            src={iconLinkedin}
          />
        </a>
        <a
          rel="noopener noreferrer"
          className={footerStyles.socialMediaAnchor}
          href="https://twitter.com/anttikiwi"
          target="_blank"
        >
          <img
            alt={i("footer_alt_twitter_logo")}
            className={
              `${footerStyles.socialMediaIcon} ` +
              `${footerStyles.socialMediaIconTwitterAlternative}`
            }
            src={iconTwitter}
          />
        </a>
      </div>
      <div className={footerStyles.copyrightInfo}>
        <p>&copy;&nbsp;2020&nbsp;Antti&nbsp;Kivi</p>
      </div>
      <div className={footerStyles.siteInfo}>
        <p>
          {i("footer_made_by", {
            visiosto: (...chunk) => (
              <a
                key={1}
                rel="noopener noreferrer"
                href="https://visiosto.fi"
                target="_blank"
              >
                {chunk}
              </a>
            )
          })}
        </p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  notFound: false
};

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  pageKey: PropTypes.string.isRequired,
  notFound: PropTypes.bool
};

export default Footer;
