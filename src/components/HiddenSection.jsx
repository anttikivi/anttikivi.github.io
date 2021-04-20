// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Button from './Button';

import createInternationalization from '../util/createInternationalization';

const propTypes = {
  children: PropTypes.node.isRequired,
  hideLabel: PropTypes.string,
  showLabel: PropTypes.string,
};

const defaultProps = {
  hideLabel: 'hiddenSectionHide',
  showLabel: 'hiddenSectionShow',
};

function HiddenSection({ children, hideLabel, showLabel }) {
  const intl = createInternationalization(useIntl());

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <Button onClick={() => setHidden(!hidden)} smaller>
        {hidden ? intl(showLabel) : intl(hideLabel)}
      </Button>
      <div hidden={hidden}>
        {children}
        <hr />
      </div>
    </>
  );
}

HiddenSection.propTypes = propTypes;
HiddenSection.defaultProps = defaultProps;

export default HiddenSection;
