import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CreatePost from '../../components/CreatePost';
import store from '../../store';

test('renders MUMBLE link', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CreatePost />
      </BrowserRouter>
      ,
    </Provider>,
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
