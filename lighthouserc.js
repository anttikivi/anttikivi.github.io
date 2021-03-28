// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'first-contentful-paint': 'warn',
      },
    },
  },
};
