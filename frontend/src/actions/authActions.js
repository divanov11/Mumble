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
} from '../constants/authConstants';
import axios from 'axios';
import { getApiUrl } from '../services/config';

export const login = (loginCredentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    loginCredentials['username'] = loginCredentials['username'].toLowerCase();

    // Do the Request to server and Handle the login process
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(getApiUrl('api/users/token/'), loginCredentials, config);

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


export const register = (inputs) => async (dispatch) => {
  try {
      dispatch({
          type: REGISTER_REQUEST
      })

      const config = {
          headers: {
              'Content-type': 'application/json'
          }
      }

      const { data } = await axios.post(
        getApiUrl('api/users/register/'),
        inputs,
          config
      )

      console.log('DATA:', data)

      dispatch({
          type:REGISTER_SUCCESS,
          payload: data
      })

      dispatch({
          type: LOGIN_SUCCESS,
          payload: data
      })


    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
    }
  };