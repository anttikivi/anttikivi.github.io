// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and ${(props) => props.theme.devices.mobileL} {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 4em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const P = styled.p`
  text-align: center;
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  return (
    <LayoutError errorCode="404" title={i('notFoundTitle')} locale={props.pageContext.locale}>
      <Section>
        <P>{i('notFoundContent')}</P>
      </Section>
    </LayoutError>
  );
};

const NotFound = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default NotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
  }
`;
