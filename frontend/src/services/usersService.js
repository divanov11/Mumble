import { get, getApiUrl } from './config';

export const getRecommendedUsers = () => get(getApiUrl(`api/users/recommended`));
export const getUsersByKeyword = (keyword) => get(getApiUrl(`api/users${keyword}`));
export const getUserByUsername = (username) => get(getApiUrl(`api/users/${username}`));
export const getUserPosts = (username) => get(getApiUrl(`api/users/${username}/posts`));
export const getUsers = () => get(getApiUrl(`api/users`));
