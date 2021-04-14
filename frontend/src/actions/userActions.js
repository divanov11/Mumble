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
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
} from '../constants/userConstants';
import { UsersService } from '../services';
import axios from 'axios';
import { getApiUrl } from '../services/config';

export const listUsers = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const users = await UsersService.getUsersByKeyword(keyword);

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

export const listRecommenedUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_RECOMMENDED_REQUEST });

    const {
      auth: { access },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    };

    const users = await UsersService.getRecommendedUsers(config);
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

    const user = await UsersService.getUserByUsername(username);
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

    const posts = await UsersService.getUserPosts(username);
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

export const followUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });

    const {
      auth: { access },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    };

    await axios.post(getApiUrl(`api/users/${username}/follow/`), {}, config);

    dispatch({
      type: FOLLOW_USER_SUCCESS,
    });

    dispatch(listUsers());
    dispatch(listRecommenedUsers());
  } catch (error) {
    dispatch({
      type: FOLLOW_USER_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
