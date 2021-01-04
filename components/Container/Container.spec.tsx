import React from 'react';
import { render } from 'test/utils';
import { Container } from './Container';

describe('The Container component', () => {
  it('should render', () => {
    const { asFragment } = render(<Container />);
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });
});
