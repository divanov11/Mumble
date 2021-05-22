import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import jwt_decode from 'jwt-decode';

const accessToken = localStorage.getItem('access') ? localStorage.getItem('access') : null;
const refreshToken = localStorage.getItem('refresh') ? localStorage.getItem('refresh') : null;

let authState = {
  access: accessToken,
  refresh: refreshToken,
  isAuthenticated: false,
  user: null,
};

if (accessToken) {
  try {
    //Decode Token Here
    authState['user'] = jwt_decode(accessToken);
    authState['isAuthenticated'] = true;
  } catch (error) {
    authState['access'] = null;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}

const initialState = {
  auth: authState,
};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools({ mageAge: 200 })(applyMiddleware(...middleWare)),
);

export default store;
