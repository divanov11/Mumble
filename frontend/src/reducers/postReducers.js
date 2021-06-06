import {
  POST_CREATE_SUCCESS,
  POST_DASHBOARD_FAIL,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_RESET,
  POST_DASHBOARD_SUCCESS,
  POST_DELETE_SUCCESS,
  POST_SEARCH_LIST_FAIL,
  POST_SEARCH_LIST_REQUEST,
  POST_SEARCH_LIST_SUCCESS,
  POST_VOTE_SUCCESS,
} from '../constants/postConstants';
import { replaceItem } from './index';

export const postSearchListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_SEARCH_LIST_REQUEST:
      return { ...state, loading: true, posts: [] };

    case POST_SEARCH_LIST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };

    case POST_SEARCH_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case POST_VOTE_SUCCESS:
      return {
        ...state,
        posts: replaceItem(state.posts, action.payload),
      };

    default:
      return state;
  }
};

export const postDashboardReducer = (
  state = { loading: false, posts: [], prev: null, next: null },
  action,
) => {
  switch (action.type) {
    case POST_DASHBOARD_REQUEST:
      return { ...state, loading: true };

    case POST_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload.results],
        prev: action.payload.prev,
        next: action.payload.next,
      };

    case POST_CREATE_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case POST_DELETE_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      };

    case POST_DASHBOARD_RESET:
      return { loading: false, posts: [], prev: null, next: null };

    case POST_DASHBOARD_FAIL:
      return { ...state, loading: false, error: action.payload };

    case POST_VOTE_SUCCESS:
      return {
        ...state,
        posts: replaceItem(state.posts, action.payload),
      };

    default:
      return state;
  }
};
