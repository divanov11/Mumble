import { get, getApiUrl } from './config';

const getRecommendedUsers = () => get(getApiUrl(`api/users/recommended`));
const getUsersByKeyword = (keyword) => get(getApiUrl(`api/users${keyword}`));
const getUserByUsername = (username) => get(getApiUrl(`api/users/${username}`));
const getUserPosts = (username) => get(getApiUrl(`api/users/${username}/posts`));
const getUsers = () => get(getApiUrl(`api/users`));

const usersService = {
  getRecommendedUsers,
  getUsersByKeyword,
  getUserByUsername,
  getUserPosts,
  getUsers,
};
export default usersService;
