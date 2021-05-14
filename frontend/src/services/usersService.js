import { get, getApiUrl, post, patch } from './config';

const getRecommendedUsers = () => get({ url: getApiUrl(`api/users/recommended/`) });

/**
 * @param {string} keyword - includes the search (query parameters) of the URL
 * keyword (only with search term)        - `?q=john`
 * keyword (with search term and page no) - `?q=john&page=1`
 */
const getUsersByKeyword = (keyword) => get({ url: getApiUrl(`api/users/${keyword}`) });

const getUserByUsername = (username) => get({ url: getApiUrl(`api/users/${username}`) });
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
  patch({
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
