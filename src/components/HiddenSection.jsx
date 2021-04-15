// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Button from './Button';

import createInternationalization from '../util/createInternationalization';

const propTypes = {
  children: PropTypes.node.isRequired,
  hideLabel: PropTypes.string,
  intl: PropTypes.any.isRequired,
  showLabel: PropTypes.string,
};

const defaultProps = {
  hideLabel: 'hiddenSectionHide',
  showLabel: 'hiddenSectionShow',
};

class HiddenSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isHidden: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => ({ isHidden: !state.isHidden }));
  }

  render() {
    const intl = createInternationalization(this.props.intl);
    const { children, hideLabel, showLabel } = this.props;
    const { isHidden } = this.state;

    return (
      <>
        <Button onClick={this.handleClick} smaller>
          {isHidden ? intl(showLabel) : intl(hideLabel)}
        </Button>
        <div hidden={isHidden}>
          {children}
          <hr />
        </div>
      </>
    );
  }
}

HiddenSection.propTypes = propTypes;
HiddenSection.defaultProps = defaultProps;

export default injectIntl(HiddenSection);
