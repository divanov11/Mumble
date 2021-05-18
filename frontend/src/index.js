import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles/index.css';

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
