// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";
import PropTypes from "prop-types";

import mediaTextStyles from "./MediaText.module.scss";

const MediaText = props => (
  <div
    className={`${mediaTextStyles.container} ${mediaTextStyles.mediaOnRight}`}
  >
    <figure className={mediaTextStyles.media}>
      <img src={props.image} />
    </figure>
    <div className={mediaTextStyles.content}>{props.children}</div>
  </div>
);

MediaText.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object
};

export default MediaText;
