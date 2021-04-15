// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

const babelOptions = {
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
