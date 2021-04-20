// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import LocalizedLink from '../link/LocalizedLink';
import Navigation from './Navigation';

import createInternationalization from '../../util/createInternationalization';

const HeaderElement = styled.header`
  margin: 2em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em 0;
  }
`;

const TitleLink = styled(LocalizedLink)`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-link);
  }
`;

const HomeTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 700;
  text-align: center;
`;

const SiteTitle = styled.p`
  margin: 0;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 700;
  text-align: center;
`;

const SiteBranding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 3rem auto;
  }
`;

const propTypes = { home: PropTypes.bool, locale: PropTypes.string.isRequired };

const defaultProps = { home: false };

function Header({ home, locale }) {
  const intl = createInternationalization(useIntl());

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const { site } = data;

  return (
    <HeaderElement>
      <SiteBranding>
        <TitleLink to="/" locale={locale}>
          {(() => {
            if (home) {
              return <HomeTitle>{site.siteMetadata.title}</HomeTitle>;
            }

            return <SiteTitle role="heading">{site.siteMetadata.title}</SiteTitle>;
          })()}
        </TitleLink>
        <p>{intl('headerByline')}</p>
      </SiteBranding>
      <Navigation locale={locale} />
    </HeaderElement>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
