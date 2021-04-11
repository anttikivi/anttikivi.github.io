// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import footerMessages from './en/footerMessages';
import headerMessages from './en/headerMessages';
import headMessages from './en/headMessages';
import notFoundMessages from './en/notFoundMessages';

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...headMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
