import axios from 'axios';

const apiEndpointURL = process.env.REACT_APP_API_ENDPOINT || 'http://127.0.0.1:8000';

export const getApiUrl = (path) => `${apiEndpointURL}/${path}`;

const pullData = (request) => request.then(({ data }) => data);

export const get = (endpoint, options) => pullData(axios.get(endpoint, options));
