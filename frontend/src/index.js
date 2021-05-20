import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';

import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteHandler } from './utilities';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouteHandler>
        <App />
      </RouteHandler>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
