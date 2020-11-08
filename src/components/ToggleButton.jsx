// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import {createIntl} from "../utils/createIntl";

import buttonStyles from "./ToggleButton.module.scss";

const ToggleButton = props => {
  const i = createIntl(useIntl());

  return (
    <button
      className={buttonStyles.toggleButton}
      onClick={props.onClick}
      aria-expanded={props.toggled.toString()}
    >
      {props.toggled ? i("toggle_button_hide") : i("toggle_button_show")}
    </button>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.any,
  toggled: PropTypes.bool
};

export default ToggleButton;
