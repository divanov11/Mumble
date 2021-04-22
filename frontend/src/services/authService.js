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

const loginService = {
  login,
  register,
};

export default loginService;
