import { get, post, getApiUrl } from './config';

const getPostsByKeyword = (keyword) => get({ url: getApiUrl(`api/posts${keyword}`) });
const getPosts = () =>
  get({
    url: getApiUrl(`api/posts`),
  });
const getPostsComments = (postId) =>
  get({
    url: getApiUrl(`api/posts/${postId}/comments`),
  });
const createPost = (postContent) =>
  post({
    url: getApiUrl(`api/posts/create`),
    payload: postContent,
  });
const modifyVote = (voteData) =>
  post({
    url: getApiUrl(`api/posts/vote/`),
    payload: voteData,
  });
const createComment = (postData) =>
  post({
    url: getApiUrl(`api/posts/create/`),
    payload: postData,
  });
const remumble = (postData) =>
  post({
    url: getApiUrl(`api/posts/remumble/`),
    payload: postData,
  });

const postsService = {
  getPostsByKeyword,
  getPosts,
  getPostsComments,
  createPost,
  createComment,
  modifyVote,
  remumble,
};

export default postsService;
