import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Avengers Movies section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Avengers Movies/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Movie Sources section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Movie Sources/i);
  expect(linkElement).toBeInTheDocument();
});
