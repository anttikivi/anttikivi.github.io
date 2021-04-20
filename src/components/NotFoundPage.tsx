// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import LayoutError from './layout/LayoutError';

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
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    pageID: PropTypes.string.isRequired,
  }).isRequired,
};

function NotFoundPage({ pageContext }) {
  const intl = createInternationalization(useIntl());
  const { locale, pageID } = pageContext;

  return (
    <LayoutError errorCode="404" locale={locale} pageID={pageID} title={intl('notFoundTitle')}>
      <Div>
        <p>{intl('notFoundContent')}</p>
      </Div>
    </LayoutError>
  );
}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
