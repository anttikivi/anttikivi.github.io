// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import LocalizedLink from './LocalizedLink';

const Link = styled(LocalizedLink)`
  text-decoration: none;
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function LocalizedLinkButton({ children, locale, to }) {
  return (
    <Link to={to} locale={locale}>
      <Button>{children}</Button>
    </Link>
  );
}

LocalizedLinkButton.propTypes = propTypes;

export default LocalizedLinkButton;
