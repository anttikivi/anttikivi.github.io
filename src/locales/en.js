// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import footerMessages from './en/footer';
import headerMessages from './en/header';
import metaMessages from './en/meta';

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...metaMessages,
};

export const locale = defineMessages(messages);
