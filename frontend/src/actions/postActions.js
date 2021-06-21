import {
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  POST_COMMENTS_FAIL,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DASHBOARD_FAIL,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_RESET,
  POST_DASHBOARD_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_SEARCH_LIST_FAIL,
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_VOTE_FAIL,
  POST_VOTE_REQUEST,
  POST_VOTE_SUCCESS,
} from '../constants/postConstants';
import { PostsService } from '../services';
import postsService from '../services/postsService';

export const createActionPayload = (type, error) => ({
  type: type,
  payload:
    error.response && error.response.data.detail ? error.response.data.detail : error.message,
});

export const searchPosts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_SEARCH_LIST_REQUEST });

    const { results } = await PostsService.getPostsByKeyword(keyword);
    dispatch({
      type: POST_SEARCH_LIST_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_SEARCH_LIST_FAIL, error));
  }
};

export const getPostsForDashboard = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DASHBOARD_REQUEST });

    const response = await PostsService.getPosts(page);
    dispatch({
      type: POST_DASHBOARD_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_DASHBOARD_FAIL, error));
  }
};

export const resetPostDashboard = () => async (dispatch, getState) => {
  dispatch({ type: POST_DASHBOARD_RESET });
};

export const createPost = (postData) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });

    const post = await postsService.createPost(postData);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: post,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_CREATE_FAIL, error));
  }
};

export const deletePost = (postId) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DELETE_REQUEST });

    await postsService.deletePost(postId);
    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: postId,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_DELETE_FAIL, error));
  }
};

export const createRemumble = (postId) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });

    const data = await postsService.remumble({ id: postId });

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_CREATE_FAIL, error));
  }
};

export const createComment = (setComments, postId, postData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COMMENT_CREATE_REQUEST });
    const comment = await postsService.createComment(postData);

    dispatch({
      type: COMMENT_CREATE_SUCCESS,
      payload: comment,
    });

    dispatch(getPostComments(setComments, postId));
  } catch (error) {
    dispatch(createActionPayload(COMMENT_CREATE_FAIL, error));
  }
};

export const getPostComments = (setComments, postId) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_COMMENTS_REQUEST });
    const posts = await postsService.getPostsComments(postId);

    setComments(posts);
    dispatch({
      type: POST_COMMENTS_SUCCESS,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_COMMENTS_FAIL, error));
  }
};

export const modifyVote = (voteData) => async (dispatch, getState) => {
  const remumbledPost = voteData.remumbled_post;
  try {
    dispatch({ type: POST_VOTE_REQUEST });

    const mumble = await postsService.modifyVote(voteData);
    if (remumbledPost) remumbledPost.original_mumble = mumble;

    dispatch({
      type: POST_VOTE_SUCCESS,
      payload: remumbledPost || mumble,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_VOTE_FAIL, error));
  }
};
