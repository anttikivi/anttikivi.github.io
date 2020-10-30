// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {headerMessages} from "./en/header";
import {indexMessages} from "./en/index";

export const messages = {
  ...headerMessages,
  ...indexMessages
};

export const lang = defineMessages(messages);
