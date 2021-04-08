import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RECOMMENDED_REQUEST,
  USER_LIST_RECOMMENDED_SUCCESS,
  USER_LIST_RECOMMENDED_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_POSTS_LIST_REQUEST,
  USER_POSTS_LIST_SUCCESS,
  USER_POSTS_LIST_FAIL,
} from '../constants/userConstants';

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };

    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };

    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userListRecommendedReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_RECOMMENDED_REQUEST:
      return { loading: true, users: [] };

    case USER_LIST_RECOMMENDED_SUCCESS:
      return { loading: false, users: action.payload };

    case USER_LIST_RECOMMENDED_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileDetailReducer = (state = { user: { skills: [] } }, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { loading: true, ...state };

    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userPostsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case USER_POSTS_LIST_REQUEST:
      return { loading: true, posts: [] };

    case USER_POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };

    case USER_POSTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
