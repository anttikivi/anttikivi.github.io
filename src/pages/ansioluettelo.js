// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import {graphql} from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import cvStyles from "./cv.module.scss";

import styles from "../components/Common.module.scss";
import imageStyles from "../components/Image.module.scss";

import frontPageProfile from "../images/front-page-profile-2.jpg";

const EDGE_INDEX = 0;

const CurriculumVitae = ({data}) => {
  const shortColumnNode = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.title === "cv-short"
  )[EDGE_INDEX].node;
  const mainColumnNode = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.title === "cv-main"
  )[EDGE_INDEX].node;
  const sideColumnNode = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.title === "cv-side"
  )[EDGE_INDEX].node;

  return (
    <Layout title="Ansioluettelo">
      <SEO title="Ansioluettelo" />
      <div className={`${styles.contentMargin} ${cvStyles.content}`}>
        <p className={`${styles.alignCenter} ${cvStyles.nameLine}`}>
          Antti Kivi
        </p>
        <h2 className={styles.alignCenter}>Pähkinänkuoressa</h2>
        <figure className={`${styles.alignCenter} ${imageStyles.circleMask}`}>
          <img
            src={frontPageProfile}
            className={`${cvStyles.cvImage} ${styles.alignCenter}`}
          />
        </figure>
        <div dangerouslySetInnerHTML={{__html: shortColumnNode.html}} />
        <div className={cvStyles.columns}>
          <div
            dangerouslySetInnerHTML={{__html: mainColumnNode.html}}
            className={cvStyles.mainColumn}
          />
          <div
            dangerouslySetInnerHTML={{__html: sideColumnNode.html}}
            className={cvStyles.sideColumn}
          />
        </div>
      </div>
    </Layout>
  );
};

CurriculumVitae.propTypes = {data: PropTypes.object};

export default CurriculumVitae;

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {glob: "cv-*"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
