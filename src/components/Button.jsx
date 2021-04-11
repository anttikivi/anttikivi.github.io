// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  border-style: none;
  border-radius: 3rem;
  border: 3px solid transparent;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 100ms ease-in;
  background-clip: padding-box;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`;

const SpanNormal = styled(Span)`
  background-color: var(--color-link);
  color: var(--color-text-button);

  &:hover {
    background-color: var(--color-link-hover);
  }
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = { onClick: null };

function Button({ children, onClick }) {
  return <SpanNormal onClick={onClick}>{children}</SpanNormal>;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
