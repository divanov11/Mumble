const apiEndpointURL = process.env.REACT_APP_API_ENDPOINT || 'https://mumbleapi.herokuapp.com';
export const getApiUrl = (path) => `${apiEndpointURL}/${path}`;
