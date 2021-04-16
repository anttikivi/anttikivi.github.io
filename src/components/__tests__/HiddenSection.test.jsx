// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';

import Button from '../Button';

import renderWithProviders from '../../../test/renderWithProviders';

describe('Button component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<Button>Painike</Button>, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Painike')).toBeInTheDocument();
  });
});
