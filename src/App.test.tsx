import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headline = screen.getByText(/testing/i);
  expect(headline).toBeInTheDocument();
});
