// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import cvMessages from './en/cvMessages';
import footerMessages from './en/footerMessages';
import headerMessages from './en/headerMessages';
import headMessages from './en/headMessages';
import hiddenSectionMessages from './en/hiddenSectionMessages';
import notFoundMessages from './en/notFoundMessages';

export const messages = {
  ...cvMessages,
  ...footerMessages,
  ...headerMessages,
  ...headMessages,
  ...hiddenSectionMessages,
  ...notFoundMessages,
};

export const locale = defineMessages(messages);
