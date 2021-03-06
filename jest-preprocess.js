// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
