import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '.';

test('renders App', () => {
  render(<App />);
  const element = screen.getByText(/Интелико/i);
  expect(element).toBeInTheDocument();
});
