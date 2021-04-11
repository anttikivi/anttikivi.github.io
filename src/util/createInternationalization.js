// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

export default function createInternationalization(intlUseEffect) {
  return (k, obj) => intlUseEffect.formatMessage({ id: k }, obj);
}
