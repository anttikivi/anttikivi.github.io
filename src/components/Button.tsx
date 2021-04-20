// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  position: relative;
  margin: 1rem 0;
  padding: 0.7rem 1rem;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      width: 0;
      visibility: hidden;
    }
  }
`;

const SpanNormal = styled(Span)`
  font-weight: 400;
  text-decoration: none;
  color: var(--color-link);

  &::before {
    background-color: var(--color-link);
  }

  &:hover {
    color: var(--color-text);
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
