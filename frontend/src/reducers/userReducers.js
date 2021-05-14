import { POST_VOTE_SUCCESS } from '../constants/postConstants';
import { replaceItem } from './index';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
  USER_LIST_FAIL,
  USER_LIST_RECOMMENDED_REQUEST,
  USER_LIST_RECOMMENDED_SUCCESS,
  USER_LIST_RECOMMENDED_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_RESET,
  USER_DETAIL_FAIL,
  USER_POSTS_LIST_REQUEST,
  USER_POSTS_LIST_SUCCESS,
  USER_POSTS_LIST_FAIL,
  UPDATE_USER_PHOTO_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_PHOTO_FAIL,
  UPDATE_USER_FAIL,
  USER_ARTICLES_LIST_FAIL,
  USER_ARTICLES_LIST_SUCCESS,
  USER_ARTICLES_LIST_REQUEST,
} from '../constants/userConstants';

export const userListReducer = (
  state = { data: { results: [], next: null, previous: null, count: 0 } },
  action,
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload, results: [...state.data.results, ...action.payload.results] },
      };

    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_LIST_RESET:
      return { data: { results: [], next: null, previous: null, count: 0 } };

    default:
      return state;
  }
};

export const userListRecommendedReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_RECOMMENDED_REQUEST:
      return { ...state, loading: true };

    case USER_LIST_RECOMMENDED_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case USER_LIST_RECOMMENDED_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userArticleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case USER_ARTICLES_LIST_REQUEST:
      return { ...state, loading: true };

    case USER_ARTICLES_LIST_SUCCESS:
      return { ...state, loading: false, articles: action.payload };

    case USER_ARTICLES_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileDetailReducer = (
  state = { user: { skills: [] }, loading: true },
  action,
) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { ...state, user: { skills: [] }, loading: true };

    case USER_DETAIL_RESET:
      return { loading: false, user: null };

    case USER_DETAIL_SUCCESS:
    case UPDATE_USER_PHOTO_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAIL_FAIL:
    case UPDATE_USER_PHOTO_FAIL:
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userPostsListReducer = (state = { posts: [], loading: true }, action) => {
  switch (action.type) {
    case USER_POSTS_LIST_REQUEST:
      return { loading: true, posts: [] };

    case USER_POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };

    case USER_POSTS_LIST_FAIL:
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
