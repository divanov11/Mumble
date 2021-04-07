import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userListRecommendedReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userListRecommended:userListRecommendedReducer,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
