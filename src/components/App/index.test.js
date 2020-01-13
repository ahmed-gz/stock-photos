import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Popular Categories/i);
  expect(title).toBeInTheDocument();
});
