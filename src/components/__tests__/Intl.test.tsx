// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Intl from '../Intl';

import intlQuery from '../../../test/data/intlQuery';

describe('Intl component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(intlQuery));

  it('renders correctly', () => {
    const { container, getByText } = render(<Intl locale="fi">Content</Intl>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
