// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

export function createIntl(intlUseEffect) {
  return (k, obj) => intlUseEffect.formatMessage({id: k}, obj);
}
