// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';

import LocalizedLink from '../link/LocalizedLink';

const Nav = styled.nav`
  margin: 0 auto 2em;
`;

const Toggle = styled.div`
  clear: both;
  display: block;
  margin: 1rem auto;
  width: 40px;
  height: 32px;
  cursor: pointer;
  user-select: none;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    display: none;
  }
`;

const ToggleBar = styled.div<{ toggled: boolean }>`
  display: block;
  width: 33px;
  height: 4px;
  margin: 0 auto 5px;
  border-radius: 3px;
  transform-origin: 4px 0;
  z-index: 1;
  background: var(--color-text);

  ${(props) =>
    props.toggled &&
    css`
      opacity: 1;
      transform: translate(4px) translate(4px, -1px) rotate(45deg) translate(-2px, -1px);
    `};

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-child(2) {
    transform-origin: 0% 100%;

    ${(props) =>
      props.toggled &&
      css`
        opacity: 0;
        transform: translate(4px) rotate(0deg) scale(0.2, 0.2);
      `};
  }

  &:last-child {
    ${(props) =>
      props.toggled &&
      css`
        transform: translate(4px) rotate(-45deg) translate(0, -1px);
      `};
  }
`;

const Ul = styled.ul<{ toggled: boolean }>`
  overflow: hidden;
  display: block;
  max-height: 0;
  margin: 0;
  padding-left: 0;
  list-style: none;
  text-align: center;

  ${(props) =>
    props.toggled &&
    css`
      overflow: visible;
      max-height: none;
    `};

  @media screen and (${(props) => props.theme.devices.tablet}) {
    overflow: visible;
    display: flex;
    justify-content: center;
    max-height: none;
  }
`;

const Li = styled.li`
  margin: 2rem 1em;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 1em;
  }
`;

const Link = styled(LocalizedLink)`
  position: relative;
  margin: 1rem auto 0;
  border-radius: ${(props) => props.theme.borders.commonRadius};
  padding: 0.7rem 1rem;
  background: transparent;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-text);

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: 0;
    left: 0;
    visibility: hidden;
    background-color: var(--color-link);
    transition: all 0.3s ease-in-out;
  }

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-link);

    &::before {
      visibility: visible;
      width: 100%;
    }
  }
`;

const propTypes = { locale: PropTypes.string.isRequired };

function Navigation({ locale }) {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMenu(filter: { contentful_id: { eq: "12OH6cgaTcp4TUDvpqslYc" } }) {
          edges {
            node {
              node_locale
              links {
                ... on ContentfulIndexPage {
                  contentful_id
                  title
                  internal {
                    type
                  }
                }
                ... on ContentfulCurriculumVitaePage {
                  contentful_id
                  title
                  internal {
                    type
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const [toggled, setToggled] = useState(false);

  return (
    <Nav>
      <Toggle
        aria-controls="primary-menu"
        aria-expanded={toggled}
        onClick={() => setToggled(!toggled)}
      >
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
      </Toggle>
      <Ul id="primary-menu" toggled={toggled}>
        {data.allContentfulMenu.edges
          .filter(({ node }) => node.node_locale === locale)[0]
          .node.links.map((link) => {
            switch (link.internal.type) {
              case 'ContentfulCurriculumVitaePage': {
                return (
                  <Li key={link.contentful_id}>
                    <Link to={link.contentful_id} locale={locale}>
                      {link.title}
                    </Link>
                  </Li>
                );
              }
              case 'ContentfulIndexPage': {
                return (
                  <Li key={link.contentful_id}>
                    <Link to={link.contentful_id} locale={locale}>
                      {link.title}
                    </Link>
                  </Li>
                );
              }
              default: {
                return null;
              }
            }
          })}
      </Ul>
    </Nav>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
