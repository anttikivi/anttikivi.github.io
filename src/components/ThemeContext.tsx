// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import { createContext } from 'react';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const defaultContext = { colorMode: 'light', setColorMode: (value) => {} };

export default createContext(defaultContext);
