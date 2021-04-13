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
} from '../constants/postConstants';
import { PostsService } from '../services';
import axios from 'axios';
import { getApiUrl } from '../services/config';

export const searchPosts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_SEARCH_LIST_REQUEST });

    const posts = await PostsService.getPostsByKeyword(keyword);

    dispatch({
      type: POST_SEARCH_LIST_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: POST_SEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const getPostsForDashboard = () => async (dispatch) => {
  try {
    dispatch({ type: POST_DASHBOARD_REQUEST });

    const posts = await PostsService.getPosts();

    dispatch({
      type: POST_DASHBOARD_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: POST_DASHBOARD_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const createPost = (postData) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });

    const {
      auth: { access },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.post(getApiUrl(`api/posts/create/`), postData, config);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
