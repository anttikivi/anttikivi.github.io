// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import App from '../src/components/App';
import Theme from '../src/components/Theme';

export default function renderWithProviders(component, locale) {
  // eslint-disable-next-line global-require, no-undef, import/no-dynamic-require
  const messages = require(`../src/locales/${locale}`).locale;

  return render(
    // eslint-disable-next-line react/jsx-filename-extension
    <App>
      <IntlProvider locale={locale} messages={messages}>
        <Theme>{component}</Theme>
      </IntlProvider>
      ,
    </App>,
  );
}
