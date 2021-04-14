// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import cvMessages from './fi/cvMessages';
import footerMessages from './fi/footerMessages';
import headerMessages from './fi/headerMessages';
import headMessages from './fi/headMessages';
import hiddenSectionMessages from './fi/hiddenSectionMessages';
import notFoundMessages from './fi/notFoundMessages';

export const messages = {
  ...cvMessages,
  ...footerMessages,
  ...headerMessages,
  ...headMessages,
  ...hiddenSectionMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
