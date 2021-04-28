// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import HiddenSection from '../components/HiddenSection';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Div = styled.div`
  text-align: center;
`;

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

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
  * {
    border-radius: 50%;
  }
`;

const Sections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    grid-template-columns: 1fr;
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    margin: 4em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Column = styled.div``;

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    pageID: PropTypes.string.isRequired,
  }).isRequired,
};

function CurriculumVitae({ data, pageContext }) {
  const { contentfulCurriculumVitaePage: page } = data;
  const { simpleLocales } = data.site.siteMetadata;
  const { locale, pageID } = pageContext;

  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Layout locale={locale} pageID={pageID} title={page.title}>
          <Div>
            <Section>
              <h2>{page.personName}</h2>
              <ImageDiv>
                <Image alt={page.profileImage.description} image={getImage(page.profileImage)!} />
              </ImageDiv>
              <h3>{page.summaryTitle}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: page.summaryBody.childMarkdownRemark.html }}
              />
            </Section>
          </Div>
          <Sections>
            <Column>
              <h2 dangerouslySetInnerHTML={{ __html: page.workExperienceTitle }} />
              <div
                dangerouslySetInnerHTML={{
                  __html: page.workExperienceBody.childMarkdownRemark.html,
                }}
              />
              <h3 dangerouslySetInnerHTML={{ __html: page.otherWorkExperienceTitle }} />
              <HiddenSection>
                <div
                  dangerouslySetInnerHTML={{
                    __html: page.otherWorkExperienceBody.childMarkdownRemark.html,
                  }}
                />
              </HiddenSection>
              <h2 dangerouslySetInnerHTML={{ __html: page.positionsOfTrustTitle }} />
              <div
                dangerouslySetInnerHTML={{
                  __html: page.positionsOfTrustBody.childMarkdownRemark.html,
                }}
              />
              <h3 dangerouslySetInnerHTML={{ __html: page.otherPositionsOfTrustTitle }} />
              <HiddenSection>
                <div
                  dangerouslySetInnerHTML={{
                    __html: page.otherPositionsOfTrustBody.childMarkdownRemark.html,
                  }}
                />
              </HiddenSection>
            </Column>
            <Column>
              <h2 dangerouslySetInnerHTML={{ __html: page.educationTitle }} />
              <div
                dangerouslySetInnerHTML={{ __html: page.educationBody.childMarkdownRemark.html }}
              />
              <HiddenSection hideLabel="cvGradesHide" showLabel="cvGradesShow">
                <div
                  dangerouslySetInnerHTML={{
                    __html: page.matriculationExaminationGrades.childMarkdownRemark.html,
                  }}
                />
              </HiddenSection>
              <h2 dangerouslySetInnerHTML={{ __html: page.languagesTitle }} />
              <div
                dangerouslySetInnerHTML={{ __html: page.languagesBody.childMarkdownRemark.html }}
              />
              <h2 dangerouslySetInnerHTML={{ __html: page.skillsTitle }} />
              <div dangerouslySetInnerHTML={{ __html: page.skillsBody.childMarkdownRemark.html }} />
            </Column>
          </Sections>
        </Layout>
      </Theme>
    </Intl>
  );
}

CurriculumVitae.propTypes = propTypes;

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
      educationTitle
      languagesTitle
      otherPositionsOfTrustTitle
      otherWorkExperienceTitle
      personName
      positionsOfTrustTitle
      skillsTitle
      summaryTitle
      title
      workExperienceTitle
      educationBody {
        childMarkdownRemark {
          html
        }
      }
      languagesBody {
        childMarkdownRemark {
          html
        }
      }
      matriculationExaminationGrades {
        childMarkdownRemark {
          html
        }
      }
      otherPositionsOfTrustBody {
        childMarkdownRemark {
          html
        }
      }
      otherWorkExperienceBody {
        childMarkdownRemark {
          html
        }
      }
      positionsOfTrustBody {
        childMarkdownRemark {
          html
        }
      }
      profileImage {
        description
        gatsbyImageData(quality: 100, width: 200)
      }
      skillsBody {
        childMarkdownRemark {
          html
        }
      }
      summaryBody {
        childMarkdownRemark {
          html
        }
      }
      workExperienceBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
