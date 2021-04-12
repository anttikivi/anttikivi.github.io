// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Sections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    grid-template-columns: 1fr 1fr;
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    grid-template-columns: 1fr 1fr;
    margin: 4em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pageContext: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

const defaultProps = { children: undefined };

function Page({ data, pageContext }) {
  const { contentfulIndexPage: page } = data;
  const { locale, pageID } = pageContext;

  return (
    <Layout
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <Sections>
      </Sections>
    </Layout>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function CurriculumVitae(props) {
  const { simpleLocales } = props.data.site.siteMetadata;
  const { locale } = props.pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

CurriculumVitae.propTypes = propTypes;
CurriculumVitae.defaultProps = defaultProps;

export default CurriculumVitae;

export const pageQuery = graphql`
  query CurriculumVitaeQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulCurriculumVitaePage(node_locale: { eq: $locale }) {
      title
  }
`;
