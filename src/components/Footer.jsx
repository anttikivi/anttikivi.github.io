// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import footerStyles from "./Footer.module.scss";

import iconInstagram from "../images/footer/instagram_footer.png";
import iconLinkedin from "../images/footer/linkedin_footer.png";
import iconTwitter from "../images/footer/twitter_footer.png";

const Footer = () => (
  <footer id="colophon" className={footerStyles.siteFooter}>
    <div className={footerStyles.socialMediaInfo}>
      <a
        rel="noopener noreferrer"
        className={footerStyles.socialMediaAnchor}
        href="https://instagram.com/anttikiwi"
        target="_blank"
      >
        <img
          alt="Instagramin logo"
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
          alt="LinkedInin logo"
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
          alt="Twitterin logo"
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
        Tämä sivusto on tehty{" "}
        <a rel="noopener noreferrer" href="https://visiosto.fi" target="_blank">
          Visioston
        </a>{" "}
        linssin läpi
      </p>
    </div>
  </footer>
);

export default Footer;
