// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {footerMessages} from "./fi/footer";
import {headerMessages} from "./fi/header";
import {indexMessages} from "./fi/index";
import {navigationMessages} from "./fi/navigation";

export const messages = {
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...navigationMessages
};

export const lang = defineMessages(messages);
