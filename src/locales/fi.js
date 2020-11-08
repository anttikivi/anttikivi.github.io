// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {curriculumVitaeMessages} from "./fi/curriculum-vitae";
import {footerMessages} from "./fi/footer";
import {headerMessages} from "./fi/header";
import {toggleButtonMessages} from "./fi/toggle-button";
import {indexMessages} from "./fi/index";
import {navigationMessages} from "./fi/navigation";

export const messages = {
  ...curriculumVitaeMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...navigationMessages,
  ...toggleButtonMessages
};

export const lang = defineMessages(messages);
