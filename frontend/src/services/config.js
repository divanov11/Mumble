import axios from 'axios';

import store from '../store';

const getAccessToken = () => store.getState().auth.access;

export const apiEndpointURL =
  process.env.REACT_APP_API_ENDPOINT || 'https://mumbleapi.herokuapp.com'; //'http://127.0.0.1:8000';

export const getApiUrl = (path) => `${apiEndpointURL}/${path}`;

const pullData = (request) => request.then(({ data }) => data);

export const get = ({ url }) =>
  pullData(
    axios.get(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }),
  );

export const post = ({ url, payload }) =>
  pullData(
    axios.post(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }),
  );
