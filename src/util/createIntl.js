// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

export default (intlUseEffect) => (k, obj) => intlUseEffect.formatMessage({ id: k }, obj);
