import { combineReducers } from 'redux';
import auth from './auth';
import {
  userListReducer,
  userListRecommendedReducer,
  userProfileDetailReducer,
  userPostsListReducer,
} from './userReducers';

import { postSearchListReducer } from './postReducers';

export default combineReducers({
  auth,

  userList: userListReducer,
  userListRecommended: userListRecommendedReducer,
  userProfileDetail: userProfileDetailReducer,
  userPostsList: userPostsListReducer,

  postSearchList: postSearchListReducer,
});
