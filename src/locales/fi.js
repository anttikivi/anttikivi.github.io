// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import footerMessages from './fi/footer';
import headerMessages from './fi/header';
import metaMessages from './fi/meta';
import notFoundMessages from './en/not-found';

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...metaMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
