import {
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_SEARCH_LIST_FAIL,
} from '../constants/postConstants';

export const postSearchListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_SEARCH_LIST_REQUEST:
      return { loading: true, posts: [] };

    case POST_SEARCH_LIST_SUCCESS:
      return { loading: false, posts: action.payload };

    case POST_SEARCH_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
