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
  padding: ${(props) => props.smaller ? '0.5rem 1.5rem' : '1rem 1.5rem'};
  cursor: pointer;
  transition: all 100ms ease-in;
  background-clip: padding-box;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`;

const SpanNormal = styled(Span)`
  border: 0.3rem solid var(--color-link);
  background-color: transparent;
  font-weight: 700;
  text-decoration: underline;
  color: var(--color-text);

  &:hover {
    /* border: 0.3rem solid transparent; */
    background-color: var(--color-link);
    text-decoration: none;
    color: var(--color-text-inverted);
  }
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  smaller: PropTypes.bool,
};

const defaultProps = { onClick: null, smaller: false };

function Button({ children, onClick, smaller }) {
  return <SpanNormal onClick={onClick} smaller={smaller}>{children}</SpanNormal>;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
