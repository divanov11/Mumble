import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MUMBLE link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Top Contributors/);
  expect(linkElement).toBeInTheDocument();
});
