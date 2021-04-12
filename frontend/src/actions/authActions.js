import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../constants/authConstants';
import axios from 'axios';

export const login = (loginCredentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    // Do the Request to server and Handle the login process
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    console.log('PRE_DATA');
    const { data } = await axios.post('api/users/token/', loginCredentials, config);

    console.log('DATA:', data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
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
