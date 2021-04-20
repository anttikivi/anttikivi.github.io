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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    pageID: PropTypes.string.isRequired,
  }).isRequired,
};

function Index({ data, pageContext }) {
  const { contentfulIndexPage: page } = data;
  const { simpleLocales } = data.site.siteMetadata;
  const { locale, pageID } = pageContext;

  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
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
      </Theme>
    </Intl>
  );
}

Index.propTypes = propTypes;

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
