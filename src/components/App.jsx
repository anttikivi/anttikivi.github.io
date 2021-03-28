// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';

import ThemeContextProvider from './ThemeContextProvider';

export default (props) => <ThemeContextProvider>{props.children}</ThemeContextProvider>;
