// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {indexMessages} from "./fi/index";

export const messages = {
  ...indexMessages
};

export const lang = defineMessages(messages);
