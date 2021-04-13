import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../constants/authConstants';
import jwt_decode from 'jwt-decode';

//import users from '../data/users';
//const mockUser = users[3];

export default function authReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return { isLoading: true };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);

      return {
        ...state,
        access: payload.access,
        isAuthenticated: true,
        isLoading: false,
        user: jwt_decode(payload.access),
      };
    }

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

    default:
      return state;
  }
}
