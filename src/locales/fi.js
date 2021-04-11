// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import footerMessages from './fi/footerMessages';
import headerMessages from './fi/headerMessages';
import headMessages from './fi/headMessages';
import notFoundMessages from './fi/notFoundMessages';

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...headMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
