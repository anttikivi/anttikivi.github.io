// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import {createIntl} from "../utils/createIntl";

import buttonStyles from "./ToggleButton.module.scss";

const ToggleButton = props => {
  const i = createIntl(useIntl());

  const showText =
    props.showText !== undefined ? props.showText : i("toggle_button_show");
  const hideText =
    props.hideText !== undefined ? props.hideText : i("toggle_button_hide");

  return (
    <button
      className={buttonStyles.toggleButton}
      onClick={props.onClick}
      aria-expanded={props.toggled.toString()}
    >
      {props.toggled ? hideText : showText}
    </button>
  );
};

ToggleButton.defaultProps = {
  showText: undefined,
  hideText: undefined
};

ToggleButton.propTypes = {
  onClick: PropTypes.any,
  toggled: PropTypes.bool,
  showText: PropTypes.string,
  hideText: PropTypes.string
};

export default ToggleButton;
