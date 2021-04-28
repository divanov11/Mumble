import {
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_SEARCH_LIST_FAIL,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_SUCCESS,
  POST_DASHBOARD_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAIL,
  POST_VOTE_REQUEST,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
} from '../constants/postConstants';
import { PostsService } from '../services';
import { listUserPosts } from './userActions';
import postsService from '../services/postsService';

export const createActionPayload = (type, error) => ({
  type: type,
  payload:
    error.response && error.response.data.detail ? error.response.data.detail : error.message,
});

export const searchPosts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_SEARCH_LIST_REQUEST });

    const posts = await PostsService.getPostsByKeyword(keyword);

    dispatch({
      type: POST_SEARCH_LIST_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_SEARCH_LIST_FAIL, error));
  }
};

export const getPostsForDashboard = () => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DASHBOARD_REQUEST });

    const posts = await PostsService.getPosts();

    dispatch({
      type: POST_DASHBOARD_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch(createActionPayload(POST_DASHBOARD_FAIL, error));
  }
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

    const post = await postsService.deletePost(postId);

    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: post,
    });
    dispatch(getPostsForDashboard());
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
  try {
    dispatch({ type: POST_VOTE_REQUEST });

    const { data } = await postsService.modifyVote(voteData);

    dispatch({
      type: POST_VOTE_SUCCESS,
      payload: data,
    });

    dispatch(getPostsForDashboard());
    dispatch(listUserPosts(voteData.post_username));
  } catch (error) {
    dispatch(createActionPayload(POST_VOTE_FAIL, error));
  }
};
