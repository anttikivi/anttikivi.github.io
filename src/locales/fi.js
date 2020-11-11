// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

import {defineMessages} from "react-intl";

import {curriculumVitaeMessages} from "./fi/curriculum-vitae";
import {footerMessages} from "./fi/footer";
import {headerMessages} from "./fi/header";
import {indexMessages} from "./fi/index";
import {metaMessages} from "./fi/meta";
import {navigationMessages} from "./fi/navigation";
import {toggleButtonMessages} from "./fi/toggle-button";

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
