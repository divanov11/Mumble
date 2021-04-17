import { get, getApiUrl } from './config';

const getPostsByKeyword = (keyword) => get(getApiUrl(`api/posts${keyword}`));
const getPosts = (config) => get(getApiUrl(`api/posts`), config);

const postsService = {
  getPostsByKeyword,
  getPosts,
};

export default postsService;
