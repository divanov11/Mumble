import axios from 'axios';

const apiEndpointURL = process.env.REACT_APP_API_ENDPOINT || 'https://mumbleapi.herokuapp.com';

export const getApiUrl = (path) => `${apiEndpointURL}/${path}`;

const pullData = (request) => request.then(({ data }) => data);

export const get = (endpoint, options) => pullData(axios.get(endpoint, options));
