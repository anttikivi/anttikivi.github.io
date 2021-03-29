// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import footerMessages from './en/footer';
import headerMessages from './en/header';
import metaMessages from './en/meta';
import notFoundMessages from './en/not-found';

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...metaMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
