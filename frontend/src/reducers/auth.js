import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from '../constants/authConstants';

import { LOAD_PROFILE_SUCCESS, UPDATE_USER_PHOTO_SUCCESS } from '../constants/userConstants';

export default function authReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST: {
      return { isLoading: true };
    }

    case LOGIN_REQUEST: {
      return { isLoading: true };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        access: payload.access,
        refresh: payload.refresh,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };
    }

    case LOAD_PROFILE_SUCCESS: {
      return {
        ...state,
        user: {
          ...payload,
          ...state.user,
        },
      };
    }

    case REFRESH_TOKEN_SUCCESS: {
      localStorage.setItem('access', payload.access);
      return {
        ...state,
        access: payload.access,
      };
    }

    case UPDATE_USER_PHOTO_SUCCESS:
      const newState = {
        ...state,
        user: {
          ...state.user,
          profile_pic: payload.profile_pic,
        },
      };
      return newState;

    case LOGIN_FAIL:
      return { isLoading: false, error: payload };

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGOUT_SUCCESS: {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        isLoading: false,
        user: null,
      };
    }

    case REGISTER_FAIL:
      return { isLoading: false, error: payload };

    default:
      return state;
  }
}
