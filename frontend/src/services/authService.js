import { post, getApiUrl } from './config';

const login = (credentials) =>
  post({
    url: getApiUrl(`api/users/login/`),
    payload: credentials,
  });
const register = (inputs) =>
  post({
    url: getApiUrl(`api/users/register/`),
    payload: inputs,
  });

const refreshToken = (refresh) =>
  post({
    url: getApiUrl('api/users/refresh_token/'),
    payload: {
      refresh,
    },
  });

const deleteAccount = () =>
  post({
    url: getApiUrl('api/users/delete-profile/'),
  });

const loginService = {
  login,
  register,
  refreshToken,
  deleteAccount,
};

export default loginService;
