import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MUMBLE link', () => {
  render(<App />);
  const linkElement = screen.getByText(/MUMBLE/);
  expect(linkElement).toBeInTheDocument();
});
