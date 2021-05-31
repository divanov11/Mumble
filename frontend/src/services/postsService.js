import { get, post, remove, getApiUrl } from './config';

const getPostsByKeyword = (keyword) => get({ url: getApiUrl(`api/mumbles/${keyword}`) });
const getPosts = (page = 1) =>
  get({
    url: getApiUrl(`api/mumbles/?page=${page}`),
  });
const getPostsComments = (postId) =>
  get({
    url: getApiUrl(`api/mumbles/${postId}/comments/`),
  });
const createPost = (postContent) =>
  post({
    url: getApiUrl(`api/mumbles/create/`),
    payload: postContent,
  });
const modifyVote = (voteData) =>
  post({
    url: getApiUrl(`api/mumbles/vote/`),
    payload: voteData,
  });
const createComment = (postData) =>
  post({
    url: getApiUrl(`api/mumbles/create/`),
    payload: postData,
  });
const remumble = (postData) =>
  post({
    url: getApiUrl(`api/mumbles/remumble/`),
    payload: postData,
  });
const deletePost = (postId) =>
  remove({
    url: getApiUrl(`api/mumbles/delete/${postId}/`),
  });

const postsService = {
  getPostsByKeyword,
  getPosts,
  getPostsComments,
  createPost,
  createComment,
  deletePost,
  modifyVote,
  remumble,
};

export default postsService;
