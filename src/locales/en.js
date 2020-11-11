// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {curriculumVitaeMessages} from "./en/curriculum-vitae";
import {footerMessages} from "./en/footer";
import {headerMessages} from "./en/header";
import {indexMessages} from "./en/index";
import {metaMessages} from "./en/meta";
import {navigationMessages} from "./en/navigation";
import {toggleButtonMessages} from "./en/toggle-button";

export const messages = {
  ...curriculumVitaeMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...metaMessages,
  ...navigationMessages,
  ...toggleButtonMessages
};

export const lang = defineMessages(messages);
