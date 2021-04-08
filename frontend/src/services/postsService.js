import axios from 'axios';
import { getApiUrl } from './config';

export const getPostsByKeyword = (keyword) => axios.get(getApiUrl(`api/posts${keyword}`));
export const getPosts = () => axios.get(getApiUrl(`api/posts`));
