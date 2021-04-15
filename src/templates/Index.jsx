// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Intl from '../components/Intl';
import LayoutIndex from '../components/layout/LayoutIndex';
import Theme from '../components/Theme';

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  .centered {
    text-align: center;
  }

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(GatsbyImage)`
  > * {
    border-radius: 50%;
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
    <LayoutIndex
      description={page.description.description}
      image={page.image}
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <ImageDiv>
        <Image alt={page.introImage.description} image={getImage(page.introImage)} />
      </ImageDiv>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: page.introBody.childMarkdownRemark.html }} />
      </Section>
    </LayoutIndex>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function Index(props) {
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

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;

export const pageQuery = graphql`
  query IndexQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulIndexPage(node_locale: { eq: $locale }) {
      introTitle
      title
      description {
        description
      }
      introBody {
        childMarkdownRemark {
          html
        }
      }
      introImage {
        description
        gatsbyImageData(quality: 100, width: 250)
      }
    }
  }
`;
