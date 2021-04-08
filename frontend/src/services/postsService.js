import { get, getApiUrl } from './config';

export const getPostsByKeyword = (keyword) => get(getApiUrl(`api/posts${keyword}`));
export const getPosts = () => get(getApiUrl(`api/posts`));
