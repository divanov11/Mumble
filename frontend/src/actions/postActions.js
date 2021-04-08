import {
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_SEARCH_LIST_FAIL,
} from '../constants/postConstants';
import { getPostsByKeyword } from '../services/postsService';

export const searchPosts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_SEARCH_LIST_REQUEST });

    const { data } = await getPostsByKeyword(keyword);

    dispatch({
      type: POST_SEARCH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_SEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
