// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Theme from '../components/Theme';

import createInternationalization from '../util/createInternationalization';

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    pageID: PropTypes.string.isRequired,
  }).isRequired,
};

function NotFound({ data, pageContext }) {
  const intl = createInternationalization(useIntl());
  const { simpleLocales } = data.site.siteMetadata;
  const { locale, pageID } = pageContext;

  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <LayoutError errorCode="404" locale={locale} pageID={pageID} title={intl('notFoundTitle')}>
          <Div>
            <p>{intl('notFoundContent')}</p>
          </Div>
        </LayoutError>
      </Theme>
    </Intl>
  );
}

NotFound.propTypes = propTypes;

export default NotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
  }
`;
