// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import Theme from '../Theme';

describe('Theme component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Theme>Content</Theme>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
