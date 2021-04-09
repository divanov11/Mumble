import { get, getApiUrl } from './config';

const getPostsByKeyword = (keyword) => get(getApiUrl(`api/posts${keyword}`));
const getPosts = () => get(getApiUrl(`api/posts`));

const postsService = {
  getPostsByKeyword,
  getPosts,
};

export default postsService;
