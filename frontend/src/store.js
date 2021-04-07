import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userListReducer,
  userListRecommendedReducer,
  userProfileDetailReducer,
  userPostsListReducer,
} from './reducers/userReducers';

import { postSearchListReducer } from './reducers/postReducers';

const reducer = combineReducers({
  userList: userListReducer,
  userListRecommended: userListRecommendedReducer,
  userProfileDetail: userProfileDetailReducer,
  userPostsList: userPostsListReducer,

  postSearchList: postSearchListReducer,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
