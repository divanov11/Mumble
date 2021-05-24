import {
  FOLLOW_USER_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_PHOTO_SUCCESS,
  UPDATE_USER_SUCCESS,
  USER_ARTICLES_LIST_FAIL,
  USER_ARTICLES_LIST_REQUEST,
  USER_ARTICLES_LIST_SUCCESS,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_RESET,
  USER_DETAIL_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RECOMMENDED_FAIL,
  USER_LIST_RECOMMENDED_REQUEST,
  USER_LIST_RECOMMENDED_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
  USER_POSTS_LIST_FAIL,
  USER_POSTS_LIST_REQUEST,
  USER_POSTS_LIST_SUCCESS,
  LOAD_MORE_USER_SUCCESS,
  LOAD_MORE_USER_FAIL,
  USER_POST_DELETE_REQUEST,
  USER_POST_DELETE_SUCCESS,
  USER_POST_DELETE_FAIL,
  LIST_FOLLOWING_SUCCESS,
  LIST_FOLLOWING_FAIL,
  LIST_FOLLOWING_REQUEST,
  UPDATE_USER_PHOTO_FAIL,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
  UPDATE_USER_TAGS_FAIL,
} from '../constants/userConstants';
import { UsersService } from '../services';
import usersService from '../services/usersService';
import postsService from '../services/postsService';
import { createActionPayload } from './postActions';

export const listUsers = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const results = await UsersService.getUsersByKeyword(keyword);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch(createActionPayload(USER_LIST_FAIL, error));
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const profile = await UsersService.getProfile();
    dispatch({
      type: LOAD_PROFILE_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    dispatch(createActionPayload(LOAD_PROFILE_FAIL, error));
  }
};

export const listMoreUsers = (keyword = '') => async (dispatch) => {
  try {
    const results = await UsersService.getUsersByKeyword(keyword);
    dispatch({
      type: LOAD_MORE_USER_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch(createActionPayload(LOAD_MORE_USER_FAIL, error));
  }
};
export const resetListUsers = () => async (dispatch) => {
  dispatch({ type: USER_LIST_RESET });
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

export const listUserDetails = (username, update = null) => async (dispatch) => {
  try {
    if (!update) {
      dispatch({ type: USER_DETAIL_REQUEST });
    }

    const user = await UsersService.getUserByUsername(username);
    user.profile.email = user.email;
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

export const deleteUserPost = (postId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_POST_DELETE_REQUEST });

    await postsService.deletePost(postId);
    dispatch({
      type: USER_POST_DELETE_SUCCESS,
      payload: postId,
    });
  } catch (error) {
    dispatch(createActionPayload(USER_POST_DELETE_FAIL, error));
  }
};

export const listUserArticles = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_ARTICLES_LIST_REQUEST });

    const articles = await UsersService.getUserArticles(username);
    dispatch({
      type: USER_ARTICLES_LIST_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    dispatch(createActionPayload(USER_ARTICLES_LIST_FAIL, error));
  }
};

export const followUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_FOLLOWING_REQUEST,
    });
    dispatch({ type: FOLLOW_USER_REQUEST, payload: username });
    await usersService.followUser(username);
    await dispatch(listFollowing());
    dispatch({
      type: FOLLOW_USER_SUCCESS,
      payload: username,
    });
  } catch (error) {
    error.username = username;
    dispatch(createActionPayload(FOLLOW_USER_FAIL, error));
  }
};

export const listFollowing = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_FOLLOWING_REQUEST,
    });
    const following = await usersService.getFollowing();
    dispatch({
      type: LIST_FOLLOWING_SUCCESS,
      payload: following,
    });
  } catch (error) {
    dispatch(createActionPayload(LIST_FOLLOWING_FAIL, error));
  }
};

export const updateUserProfile = (userData) => async (dispatch, getState) => {
  try {
    let { user } = await usersService.updateUserProfile(userData);
    user.profile.email = user.email;
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: user.profile,
    });
  } catch (error) {
    dispatch(createActionPayload(UPDATE_USER_FAIL, error));
  }
};

export const updateProfilePic = (formData) => async (dispatch) => {
  try {
    let { user } = await usersService.updateUserProfilePic(formData);

    user.profile.email = user.email;
    dispatch({
      type: UPDATE_USER_PHOTO_SUCCESS,
      payload: user.profile,
    });
  } catch (error) {
    dispatch(createActionPayload(UPDATE_USER_PHOTO_FAIL, error));
  }
};

export const updateUserProfileSkills = (skills) => async (dispatch) => {
  try {
    let profile = await usersService.updateUserProfileSkills(skills);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    dispatch(createActionPayload(UPDATE_USER_TAGS_FAIL, error));
  }
};
