// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import Intl from "../components/Intl";
import Layout from "../components/Layout";

import cvStyles from "./curriculum-vitae.module.scss";

const CurriculumVitae = props => (
  <Layout title={i("cv_title")} lang={props.pageContext.lang}></Layout>
);

export default props => (
  <Intl locale={props.pageContext.lang}>
    <CurriculumVitae {...props} />
  </Intl>
);
