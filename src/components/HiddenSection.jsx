// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React, {useState} from "react";
import PropTypes from "prop-types";

import ToggleButton from "./ToggleButton";

import sectionStyles from "./HiddenSection.module.scss";

const HiddenSection = props => {
  const [toggled, setToggled] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setToggled(!toggled);
  };

  return (
    <>
      <ToggleButton
        onClick={handleClick}
        toggled={toggled}
        showText={props.showText}
        hideText={props.hideText}
      />
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

HiddenSection.defaultProps = {
  displayHr: false,
  showText: undefined,
  hideText: undefined
};

HiddenSection.propTypes = {
  children: PropTypes.node,
  displayHr: PropTypes.bool,
  showText: PropTypes.string,
  hideText: PropTypes.string
};

export default HiddenSection;
