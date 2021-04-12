// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

export default function stripHashedLocation(to) {
  return to.split('#')[0];
}
