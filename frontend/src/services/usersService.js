import axios from 'axios';
import { getApiUrl } from './config';

export const getRecommendedUsers = () => axios.get(getApiUrl(`api/users/recommended`));
export const getUsersByKeyword = (keyword) => axios.get(getApiUrl(`api/users${keyword}`));
export const getUserByUsername = (username) => axios.get(getApiUrl(`api/users/${username}`));
export const getUserPosts = (username) => axios.get(getApiUrl(`api/users/${username}/posts`));
export const getUsers = () => axios.get(getApiUrl(`api/users`));
