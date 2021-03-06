// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';

import LocalizedLink from './LocalizedLink';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pageID: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null };

function LocaleLink({ children, className, pageID, to }) {
  return (
    <LocalizedLink className={className} to={pageID} locale={to}>
      {children}
    </LocalizedLink>
  );
}

LocaleLink.propTypes = propTypes;
LocaleLink.defaultProps = defaultProps;

export default LocaleLink;
