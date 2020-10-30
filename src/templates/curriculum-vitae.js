// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import Intl from "../components/Intl";

const CurriculumVitae = props => <div></div>;

export default props => (
  <Intl locale={props.pageContext.lang}>
    <CurriculumVitae {...props} />
  </Intl>
);
