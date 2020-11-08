// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import HiddenSection from "./HiddenSection";

import sectionStyles from "./CurriculumVitaeSection.module.scss";

const CurriculumVitaeSection = props => (
  <>
    <h3 className={sectionStyles.sectionTitle}>{props.title}</h3>
    <HiddenSection displayHr>{props.children}</HiddenSection>
  </>
);

CurriculumVitaeSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default CurriculumVitaeSection;
