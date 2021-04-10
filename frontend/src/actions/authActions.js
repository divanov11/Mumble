import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../constants/authConstants';

export const login = (loginCredentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    // Do the Request to server and Handle the login process

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: { name: 'john doe', email: 'john@email.com' },
        access: 'asdfsda234234234sdfasfdo09q2nb23*2#',
        refresh: 'o9hwefa8625&_2oingf@%dfgqweroin435',
      },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    // make a request to server if necessary

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload:
        error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
