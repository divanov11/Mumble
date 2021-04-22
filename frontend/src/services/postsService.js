import { get, post, getApiUrl } from './config';

const getPostsByKeyword = (keyword) => get({ url: getApiUrl(`api/mumbles${keyword}`) });
const getPosts = () =>
  get({
    url: getApiUrl(`api/mumbles`),
  });
const getPostsComments = (postId) =>
  get({
    url: getApiUrl(`api/mumbles/${postId}/comments`),
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
