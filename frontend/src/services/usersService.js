import { get, getApiUrl, post, patch } from './config';

const getRecommendedUsers = () => get({ url: getApiUrl(`api/users/recommended/`) });
const getUsersByKeyword = (keyword) => get({ url: getApiUrl(`api/users/?q=${keyword}`) });
const getUserByUsername = (username) => get({ url: getApiUrl(`api/users/${username}/`) });
const getUserPosts = (username) => get({ url: getApiUrl(`api/users/${username}/mumbles/`) });
const getUsers = () => get({ url: getApiUrl(`api/users/`) });
const followUser = (username) => post({ url: getApiUrl(`api/users/${username}/follow/`) }, {});
const getUserArticles = (username) => get({ url: getApiUrl(`api/users/${username}/articles/`) });

const updateUserProfile = (userData) =>
  patch({
    url: getApiUrl(`api/users/profile_update/`),
    payload: userData,
  });
const updateUserProfilePic = (formData) =>
  post({
    url: getApiUrl('api/users/profile_update/photo/'),
    payload: formData,
  });

const usersService = {
  getRecommendedUsers,
  getUserArticles,
  getUsersByKeyword,
  getUserByUsername,
  getUserPosts,
  getUsers,
  followUser,
  updateUserProfile,
  updateUserProfilePic,
};
export default usersService;
