// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {headerMessages} from "./fi/header";
import {indexMessages} from "./fi/index";

export const messages = {
  ...headerMessages,
  ...indexMessages
};

export const lang = defineMessages(messages);
