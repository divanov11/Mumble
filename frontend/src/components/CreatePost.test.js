import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreatePost from './CreatePost';

test('renders MUMBLE link', () => {
  render(
    <BrowserRouter>
      <CreatePost />
    </BrowserRouter>,
  );
  const buttonElement = screen.getByText(/Mumble Now/);
  fireEvent(
    buttonElement,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  const errorWarning = screen.getByText(/Post cannot be empty!/);
  expect(errorWarning).toBeInTheDocument();
});
