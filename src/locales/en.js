// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {curriculumVitaeMessages} from "./en/curriculum-vitae";
import {footerMessages} from "./en/footer";
import {headerMessages} from "./en/header";
import {toggleButtonMessages} from "./en/toggle-button";
import {indexMessages} from "./en/index";
import {navigationMessages} from "./en/navigation";

export const messages = {
  ...curriculumVitaeMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...navigationMessages,
  ...toggleButtonMessages
};

export const lang = defineMessages(messages);
