import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REFRESH_TOKEN_SUCCESS,
} from '../constants/authConstants';
import authService from '../services/authService';
import { createActionPayload } from './postActions';

export const login = (loginCredentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const tokens = await authService.login(loginCredentials);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: tokens,
    });
  } catch (error) {
    dispatch(createActionPayload(LOGIN_FAIL, error));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch(createActionPayload(LOGOUT_FAIL, error));
  }
};

export const register = (inputs) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const data = await authService.register(inputs);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(createActionPayload(REGISTER_FAIL, error));
  }
};

export const refreshToken = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();

    let { access } = await authService.refreshToken(auth.refresh);

    dispatch({
      type: REFRESH_TOKEN_SUCCESS,
      payload: { access },
    });
  } catch (error) {
    dispatch(logout());
  }
};

export const deleteAccount = () => async (dispatch, getState) => {
  try {
    await authService.deleteAccount();
    dispatch(logout());
  } catch (error) {
    dispatch(logout());
  }
};
