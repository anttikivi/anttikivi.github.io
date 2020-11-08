// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {useIntl} from "react-intl";

import createLink from "../components/createLink";

import Intl from "../components/Intl";
import Layout from "../components/Layout";
import MediaText from "../components/MediaText";

import {
  DISPLAY_INDEX_REFERENCES,
  DISPLAY_INDEX_AATU_ITKONEN,
  DISPLAY_INDEX_UNION_OF_UPPER_SECONDARY_SCHOOL_STUDENTS,
  DISPLAY_INDEX_SOFIA_JULIN,
  DISPLAY_INDEX_RESERVE_OFFICER_SCHOOL_STUDENT_BODY
} from "../site-constants";

import {createIntl} from "../utils/createIntl";

import indexStyles from "./index.module.scss";

import styles from "../components/Common.module.scss";
import imageStyles from "../components/Image.module.scss";

/* eslint-disable max-len */
import frontPageProfile from "../images/front-page-profile-2.jpg";
import referenceAatuItkonen from "../images/home/reference_aatuitkonen-1536x864.png";
import referenceLukio from "../images/home/reference_lukio-1536x864.png";
import referenceSofiaJulin from "../images/home/reference_sofiajulin-1536x864.png";
import referenceOppilaskunta from "../images/home/reference_reserve_officer_school_student_body.png";
/* eslint-enable max-len */

const IndexPage = props => {
  const i = createIntl(useIntl());
  const Link = createLink(props.pageContext.lang);

  return (
    <Layout
      title={i("index_title")}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <div className={styles.contentMargin}>
        <figure className={`${styles.alignCenter} ${imageStyles.circleMask}`}>
          <img
            src={frontPageProfile}
            className={`${indexStyles.frontPageImage} ${styles.alignCenter}`}
          />
        </figure>

        <p className={`${styles.alignCenter} ${indexStyles.ledeParagraph}`}>
          {i("index_byline")}
        </p>

        <div>
          {i("index_lede", {
            p: (...chunk) => <p className={styles.alignCenter}>{chunk}</p>,
            cv: (...chunk) => (
              <Link key={1} to="/curriculum-vitae">
                {chunk}
              </Link>
            ),
            visiosto: (...chunk) => (
              <a
                key={2}
                rel="noreferrer noopener"
                href="https://visiosto.fi"
                target="_blank"
              >
                {chunk}
              </a>
            )
          })}
        </div>

        {(() => {
          if (DISPLAY_INDEX_REFERENCES) {
            return (
              <h2 className={`${indexStyles.homeTitle} ${styles.alignCenter}`}>
                {i("index_portfolio_title")}
              </h2>
            );
          }

          return <></>;
        })()}

        {(() => {
          if (DISPLAY_INDEX_REFERENCES && DISPLAY_INDEX_AATU_ITKONEN) {
            return (
              <MediaText image={referenceAatuItkonen}>
                <h3>{i("index_aatu_itkonen_title")}</h3>
                <p>
                  {i("index_aatu_itkonen", {
                    aatu: (...chunk) => (
                      <a
                        key={1}
                        rel="noreferrer noopener"
                        href="https://aatuitkonen.fi"
                        target="_blank"
                      >
                        {chunk}
                      </a>
                    )
                  })}
                </p>
              </MediaText>
            );
          }

          return <></>;
        })()}

        {(() => {
          if (
            DISPLAY_INDEX_REFERENCES &&
            DISPLAY_INDEX_UNION_OF_UPPER_SECONDARY_SCHOOL_STUDENTS
          ) {
            return (
              <MediaText image={referenceLukio}>
                <h3>{i("index_lukio_title")}</h3>
                <p>
                  {i("index_lukio", {
                    lukio: (...chunk) => (
                      <a
                        key={1}
                        rel="noreferrer noopener"
                        href="https://lukio.fi"
                        target="_blank"
                      >
                        {chunk}
                      </a>
                    )
                  })}
                </p>
              </MediaText>
            );
          }

          return <></>;
        })()}

        {(() => {
          if (DISPLAY_INDEX_REFERENCES && DISPLAY_INDEX_SOFIA_JULIN) {
            return (
              <MediaText image={referenceSofiaJulin}>
                <h3>{i("index_sofia_julin_title")}</h3>
                <p>
                  {i("index_sofia_julin", {
                    sofia: (...chunk) => (
                      <a
                        key={1}
                        rel="noreferrer noopener"
                        href="https://sofiajulin.fi"
                        target="_blank"
                      >
                        {chunk}
                      </a>
                    )
                  })}
                </p>
              </MediaText>
            );
          }

          return <></>;
        })()}

        {(() => {
          if (
            DISPLAY_INDEX_REFERENCES &&
            DISPLAY_INDEX_RESERVE_OFFICER_SCHOOL_STUDENT_BODY
          ) {
            return (
              <MediaText image={referenceOppilaskunta}>
                <h3>{i("index_oppilaskunta_title")}</h3>
                <p>
                  {i("index_oppilaskunta", {
                    ruk: (...chunk) => (
                      <a
                        key={1}
                        rel="noreferrer noopener"
                        href="https://oppilaskunta.net"
                        target="_blank"
                      >
                        {chunk}
                      </a>
                    )
                  })}
                </p>
              </MediaText>
            );
          }

          return <></>;
        })()}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {pageContext: PropTypes.object};

const Index = props => (
  <Intl locale={props.pageContext.lang}>
    <IndexPage {...props} />
  </Intl>
);

Index.propTypes = {pageContext: PropTypes.object};

export default Index;

export const query = graphql`
  query IndexPage {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
