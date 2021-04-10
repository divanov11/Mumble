import { LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../constants/authConstants';

import users from '../data/users';
const mockUser = users[3];

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isLoading: false,
  // User has been set by manually from the `src\data\users.js` for the development purpose
  // For now manually set. Once functionality done with authentication set "isAuthenticated: false"
  isAuthenticated: true,
  user: mockUser,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem('access', payload.tokens.access);
      localStorage.setItem('refresh', payload.tokens.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.tokens.access,
        refresh: payload.tokens.refresh,
        isLoading: false,
      };
    }

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
