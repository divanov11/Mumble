import {
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_SEARCH_LIST_FAIL,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_SUCCESS,
  POST_DASHBOARD_FAIL,
  POST_CREATE_SUCCESS,
} from '../constants/postConstants';

export const postSearchListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_SEARCH_LIST_REQUEST:
      return { ...state, loading: true, posts: [] };

    case POST_SEARCH_LIST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };

    case POST_SEARCH_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postDashboardReducer = (state = { loading: false, posts: [] }, action) => {
  switch (action.type) {
    case POST_DASHBOARD_REQUEST:
      return { ...state, loading: true };

    case POST_DASHBOARD_SUCCESS:
      return { ...state, loading: false, posts: action.payload };

    case POST_CREATE_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case POST_DASHBOARD_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
