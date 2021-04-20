// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Intl from '../components/Intl';
import NotFoundPage from '../components/NotFoundPage';
import Theme from '../components/Theme';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    pageID: PropTypes.string.isRequired,
  }).isRequired,
};

function NotFound({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;

  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <NotFoundPage pageContext={pageContext} />
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
