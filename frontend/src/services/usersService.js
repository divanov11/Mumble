import { get, getApiUrl, post, patch } from './config';

const getRecommendedUsers = () => get({ url: getApiUrl(`api/users/recommended`) });
const getUsersByKeyword = (keyword) => get({ url: getApiUrl(`api/users${keyword}`) });
const getUserByUsername = (username) => get({ url: getApiUrl(`api/users/${username}`) });
const getUserPosts = (username) => get({ url: getApiUrl(`api/users/${username}/mumbles`) });
const getUsers = () => get({ url: getApiUrl(`api/users`) });
const followUser = (username) => post({ url: getApiUrl(`api/users/${username}/follow/`) }, {});
const updateUserProfile = (userData) =>
  patch({
    url: getApiUrl(`api/users/profile_update/`),
    payload: userData,
  });

const usersService = {
  getRecommendedUsers,
  getUsersByKeyword,
  getUserByUsername,
  getUserPosts,
  getUsers,
  followUser,
  updateUserProfile,
};
export default usersService;
