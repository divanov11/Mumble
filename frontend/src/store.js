import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import jwt_decode from "jwt-decode";



const accessToken = localStorage.getItem('access') ?
    localStorage.getItem('access') : null



let authState = {
  access:accessToken,
  isAuthenticated:false,
  user:null
}


if (accessToken){
  authState['isAuthenticated'] = true
  authState['user'] = jwt_decode(accessToken);
}


//Decode Token Here

const initialState = {
  auth:authState,
};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
