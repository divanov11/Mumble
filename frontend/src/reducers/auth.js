import { LOGIN_SUCCESS } from '../constants/authConstants';

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isLoading: false,

  // For now Munally set. Once functionality done with authentication set "isAuthenticated: false"
  isAuthenticated: true,
  user: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.tokens.access);
      localStorage.setItem('refresh', payload.tokens.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.tokens.access,
        refresh: payload.tokens.refresh,
        isLoading: false,
      };

    default:
      return state;
  }
}
