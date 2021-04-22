import { get, getApiUrl, post } from './config';

const getRecommendedUsers = () => get({ url: getApiUrl(`api/users/recommended`) });
const getUsersByKeyword = (keyword) => get({ url: getApiUrl(`api/users${keyword}`) });
const getUserByUsername = (username) => get({ url: getApiUrl(`api/users/${username}`) });
const getUserPosts = (username) => get({ url: getApiUrl(`api/users/${username}/mumbles`) });
const getUsers = () => get({ url: getApiUrl(`api/users`) });
const followUser = (username) => post({ url: getApiUrl(`api/users/${username}/follow/`) }, {});

const usersService = {
  getRecommendedUsers,
  getUsersByKeyword,
  getUserByUsername,
  getUserPosts,
  getUsers,
  followUser,
};
export default usersService;
