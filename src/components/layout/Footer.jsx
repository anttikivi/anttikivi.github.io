// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import LocaleSwitcher from './LocaleSwitcher';
import LocalizedLink from '../link/LocalizedLink';
import SchemedImage from '../SchemedImage';

import createInternationalization from '../../util/createInternationalization';

const FooterElement = styled.footer`
  margin: 4em ${(props) => props.theme.layout.marginMobile} 2em;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em ${(props) => props.theme.layout.marginTablet} 2em;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4em ${(props) => props.theme.layout.marginDesktop} 2em;
  }
`;

const Div = styled.div`
  margin: 2em 0;
`;

const LogoDiv = styled.div`
  margin: 2em 0 4rem;
`;

const LogoImage = styled(GatsbyImage)`
  filter: invert(17%) sepia(86%) saturate(0%) hue-rotate(181deg) brightness(103%) contrast(85%);

  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(232deg) brightness(107%) contrast(102%);
  }
`;

const SocialMediaTitle = styled.h3`
  margin: 2rem 0 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3rem 0 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4rem 0 0;
  }
`;

const SocialMediaDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMediaImage = styled(SchemedImage)`
  margin: 1rem;
`;

// const GithubImage = styled(SocialMediaImage)`
//   filter: brightness(0) saturate(100%) invert(24%) sepia(50%) saturate(252%) hue-rotate(166deg)
//     brightness(93%) contrast(88%);

//   @media screen and (prefers-color-scheme: dark) {
//     filter: brightness(0) saturate(100%) invert(100%);
//   }
// `;

const InstagramImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(232deg) brightness(107%) contrast(102%);
  }
`;

const LinkedinImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(232deg) brightness(107%) contrast(102%);
  }
`;

const TwitterImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(232deg) brightness(107%) contrast(102%);
  }
`;

// const DataProtectionP = styled.p`
//   margin: 2rem 0 0;
// `;

// const CookieSettings = styled.div`
//   margin: 2rem 0 1rem;

//   @media screen and (${(props) => props.theme.devices.tablet}) {
//     margin: 0;
//   }
// `;

// const TermsOfUseP = styled.p`
//   margin: 2rem 0 1rem;

//   @media screen and (${(props) => props.theme.devices.tablet}) {
//     margin: 0;
//   }
// `;

const propTypes = {
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
};

function Footer({ locale, pageID }) {
  const intl = createInternationalization(useIntl());

  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            socialMedia {
              instagram
              linkedin
              twitter
            }
          }
        }
        nameLogo: file(relativePath: { eq: "name-logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, placeholder: BLURRED, quality: 100)
          }
        }
        facebook: file(relativePath: { eq: "footer/facebook.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        facebookColor: file(relativePath: { eq: "footer/facebook-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        github: file(relativePath: { eq: "footer/github.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        instagram: file(relativePath: { eq: "footer/instagram.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        instagramColor: file(relativePath: { eq: "footer/instagram-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        linkedin: file(relativePath: { eq: "footer/linkedin.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        linkedinColor: file(relativePath: { eq: "footer/linkedin-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        twitter: file(relativePath: { eq: "footer/twitter.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        twitterColor: file(relativePath: { eq: "footer/twitter-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
      }
    `,
  );

  const { nameLogo } = data;
  const { socialMedia } = data.site.siteMetadata;

  return (
    <FooterElement>
      {/* <LogoDiv>
        <LogoImage alt={intl('footerLogoImageText')} image={getImage(nameLogo)} />
      </LogoDiv> */}
      <Div>
        <LocaleSwitcher locale={locale} pageID={pageID} />
      </Div>
      <SocialMediaTitle>{intl('footerSocialMediaTitle')}</SocialMediaTitle>
      <SocialMediaDiv>
        <a href={socialMedia.instagram} rel="noopener noreferrer" target="_blank">
          <InstagramImage
            alt={intl('footerInstagramImageText')}
            light={getImage(data.instagramColor)}
            dark={getImage(data.instagram)}
          />
        </a>
        {/* <a href={socialMedia.facebook} rel="noopener noreferrer" target="_blank">
          <SocialMediaImage
            alt={intl('footerFacebookImageText')}
            light={getImage(data.facebookColor)}
            dark={getImage(data.facebook)}
          />
        </a> */}
        <a href={socialMedia.twitter} rel="noopener noreferrer" target="_blank">
          <TwitterImage
            alt={intl('footerTwitterImageText')}
            light={getImage(data.twitterColor)}
            dark={getImage(data.twitter)}
          />
        </a>
        <a href={socialMedia.linkedin} rel="noopener noreferrer" target="_blank">
          <LinkedinImage
            alt={intl('footerLinkedinImageText')}
            light={getImage(data.linkedinColor)}
            dark={getImage(data.linkedin)}
          />
        </a>
        {/* <a href={socialMedia.github} rel="noopener noreferrer" target="_blank">
          <GithubImage
            alt={intl('footerGithubImageText')}
            light={getImage(data.github)}
            dark={getImage(data.github)}
          />
        </a> */}
      </SocialMediaDiv>
      {/* <Div>
        <DataProtectionP>
          <LocalizedLink to="/data-protection" locale={locale}>
            {intl('footerDataProtection')}
          </LocalizedLink>
        </DataProtectionP>
        <CookieSettings>
          <CookieNotice locale={locale} />
        </CookieSettings>
        <TermsOfUseP>
          <LocalizedLink to="/terms-of-use" locale={locale}>
            {intl('footerTermsOfUse')}
          </LocalizedLink>
        </TermsOfUseP>
      </Div>
      <Div>
        <p dangerouslySetInnerHTML={{ __html: intl('footerOcticons') }} />
      </Div> */}
      <Div>
        <p dangerouslySetInnerHTML={{ __html: intl('footerCopyright') }} />
      </Div>
      <Div>
        <p>
          {intl('footerMadeBy', {
            a: (...chunk) => (
              <a href="https://visiosto.fi" rel="noopener noreferrer" target="_blank">
                {chunk}
              </a>
            ),
          })}
        </p>
      </Div>
    </FooterElement>
  );
}

Footer.propTypes = propTypes;

export default Footer;
