import {
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_SEARCH_LIST_FAIL,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_SUCCESS,
  POST_DASHBOARD_FAIL,
} from '../constants/postConstants';
import { PostsService } from '../services';

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
