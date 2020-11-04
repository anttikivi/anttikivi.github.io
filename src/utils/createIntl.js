// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

export const createIntl = intlUseEffect => (k, obj) =>
  intlUseEffect.formatMessage({id: k}, obj); // eslint-disable-line implicit-arrow-linebreak
