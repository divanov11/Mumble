import axios from 'axios';

import store from '../store';

const getAccessToken = () => store.getState().auth.access;

export const apiEndpointURL =
  process.env.REACT_APP_API_ENDPOINT || 'https://mumbleapi.herokuapp.com';

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

export const patch = ({ url, payload }) =>
  pullData(
    axios.patch(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }),
  );

export const put = ({ url, payload }) =>
  pullData(
    axios.put(url, payload, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }),
  );

export const remove = ({ url }) =>
  pullData(
    axios.delete(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }),
  );
