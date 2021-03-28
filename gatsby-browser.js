// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';

import 'normalize.css';

import App from './src/components/App';

import checkHash from './src/util/anchor-link/checkHash';
import scroller from './src/util/anchor-link/scroller';

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

export const onRouteUpdate = ({ location }, { offset = 0, duration = 1000 }) => {
  const isBrowser = typeof window !== 'undefined';

  const windowHash = isBrowser ? window.anttikiviScrollHash : undefined;

  if (isBrowser) {
    window.anttikiviScrollOffset = offset;
    window.anttikiviScrollDuration = duration;
  }

  if (windowHash) {
    scroller(windowHash, offset);
  } else {
    checkHash(location, offset);
  }

  if (isBrowser && windowHash) {
    window.anttikiviScrollHash = undefined;
  }
};

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

// eslint-disable-next-line react/jsx-filename-extension
export const wrapRootElement = ({ element }) => <App>{element}</App>;
