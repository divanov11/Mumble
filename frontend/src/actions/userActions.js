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
import {
  getRecommendedUsers,
  getUserByUsername,
  getUserPosts,
  getUsersByKeyword,
} from '../services/usersService';

export const listUsers = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const users = await getUsersByKeyword(keyword);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: users,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const listRecommenedUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_RECOMMENDED_REQUEST });

    const users = await getRecommendedUsers();
    dispatch({
      type: USER_LIST_RECOMMENDED_SUCCESS,
      payload: users.slice(0, 5),
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_RECOMMENDED_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const listUserDetails = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });

    const user = await getUserByUsername(username);
    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: user.profile,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const listUserPosts = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_POSTS_LIST_REQUEST });

    const posts = await getUserPosts(username);
    dispatch({
      type: USER_POSTS_LIST_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: USER_POSTS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
