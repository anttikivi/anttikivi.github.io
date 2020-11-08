// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React, {useState} from "react";
import PropTypes from "prop-types";
import {useIntl} from "react-intl";

import {createIntl} from "../utils/createIntl";

import sectionStyles from "./HiddenSection.module.scss";

const HiddenSection = props => {
  const [toggled, setToggled] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setToggled(!toggled);
  };

  const i = createIntl(useIntl());

  return (
    <>
      <button
        className={sectionStyles.toggleButton}
        onClick={handleClick}
        aria-expanded={toggled.toString()}
      >
        {toggled
          ? i("hidden_section_button_hide")
          : i("hidden_section_button_show")}
      </button>
      {(() => {
        if (toggled) {
          if (props.displayHr) {
            return (
              <>
                <div>{props.children}</div>
                <hr className={sectionStyles.sectionHr} />
              </>
            );
          }

          return <div>{props.children}</div>;
        }

        return <></>;
      })()}
    </>
  );
};

HiddenSection.defaultProps = {displayHr: false};

HiddenSection.propTypes = {
  children: PropTypes.node,
  displayHr: PropTypes.bool
};

export default HiddenSection;
