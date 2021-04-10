import { combineReducers } from 'redux';
import auth from './auth';
import local from './local';
import {
  userListReducer,
  userListRecommendedReducer,
  userProfileDetailReducer,
  userPostsListReducer,
} from './userReducers';

import { postDashboardReducer, postSearchListReducer } from './postReducers';

export default combineReducers({
  local,
  auth,
  userList: userListReducer,
  userListRecommended: userListRecommendedReducer,
  userProfileDetail: userProfileDetailReducer,
  userPostsList: userPostsListReducer,

  postSearchList: postSearchListReducer,
  dashboard: postDashboardReducer,
});
