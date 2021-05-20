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
  LOAD_MORE_USER_REQUEST,
  LOAD_MORE_USER_SUCCESS,
  LOAD_MORE_USER_FAIL,
  USER_POST_DELETE_SUCCESS,
  LIST_FOLLOWING_REQUEST,
  LIST_FOLLOWING_SUCCESS,
  LIST_FOLLOWING_FAIL,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  FOLLOW_USER_REQUEST,
} from '../constants/userConstants';

export const userListReducer = (
  state = { data: { results: [], next: null, previous: null, count: 0 }, loading: false },
  action,
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload, results: [...action.payload.results] },
      };

    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case LOAD_MORE_USER_REQUEST:
      return { ...state, loading: true };

    case LOAD_MORE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload, results: [...state.data.results, ...action.payload.results] },
      };

    case LOAD_MORE_USER_FAIL:
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

export const followingReducer = (state = { following: [], loading: false }, action) => {
  switch (action.type) {
    case LIST_FOLLOWING_REQUEST:
      return { ...state, loading: true };

    case LIST_FOLLOWING_SUCCESS:
      return { ...state, loading: false, following: action.payload };

    case LIST_FOLLOWING_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const followReducer = (state = { loading: {}, error: null }, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: true,
        },
      };

    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: false,
        },
      };

    case FOLLOW_USER_FAIL:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.username]: false,
        },
        error: action.payload,
      };

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

    case USER_POST_DELETE_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      };

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
