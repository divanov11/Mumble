import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
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
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../constants/userConstants';
import { UsersService } from '../services';
import usersService from '../services/usersService';
import { createActionPayload } from './postActions';

export const listUsers = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const users = await UsersService.getUsersByKeyword(keyword);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: users,
    });
  } catch (error) {
    dispatch(createActionPayload(USER_LIST_FAIL, error));
  }
};

export const listRecommenedUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_RECOMMENDED_REQUEST });

    const users = await UsersService.getRecommendedUsers();
    dispatch({
      type: USER_LIST_RECOMMENDED_SUCCESS,
      payload: users.slice(0, 5),
    });
  } catch (error) {
    dispatch(createActionPayload(USER_LIST_RECOMMENDED_FAIL, error));
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
    dispatch(createActionPayload(USER_DETAIL_FAIL, error));
  }
};

export const resetUserDetails = () => async (dispatch) => {
  dispatch({ type: USER_DETAIL_RESET });
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
    dispatch(createActionPayload(USER_POSTS_LIST_FAIL, error));
  }
};

export const followUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });
    await usersService.followUser(username);
    dispatch({
      type: FOLLOW_USER_SUCCESS,
    });
  } catch (error) {
    dispatch(createActionPayload(FOLLOW_USER_FAIL, error));
  }
};

export const updateUserProfile = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });
    let { user } = await usersService.updateUserProfile(userData);

    dispatch({
      type: UPDATE_USER_SUCCESS,
    });

    dispatch(listUserDetails(user.username));

    // dispatch({
    //   type: USER_DETAIL_SUCCESS,
    //   payload:user,
    // });
  } catch (error) {
    dispatch(createActionPayload(UPDATE_USER_FAIL, error));
  }
};
