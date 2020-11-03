// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import React from "react";

import {IntlProvider} from "react-intl";

const Intl = ({children, locale}) => {
  let messages = require("../locales/fi").lang;

  try {
    messages = require("../locales/" + locale).lang;
  } catch (error) {
    // Do nothing and use the default.
  }

  return (
    <IntlProvider locale={locale || "fi"} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default Intl;
