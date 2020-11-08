// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {curriculumVitaeMessages} from "./en/curriculum-vitae";
import {footerMessages} from "./en/footer";
import {headerMessages} from "./en/header";
import {hiddenSectionMessages} from "./en/hidden-section";
import {indexMessages} from "./en/index";
import {navigationMessages} from "./en/navigation";

export const messages = {
  ...curriculumVitaeMessages,
  ...footerMessages,
  ...headerMessages,
  ...hiddenSectionMessages,
  ...indexMessages,
  ...navigationMessages
};

export const lang = defineMessages(messages);
