import { combineReducers } from 'redux';
import {
  userListReducer,
  userListRecommendedReducer,
  userProfileDetailReducer,
  userPostsListReducer,
} from './userReducers';

import { postSearchListReducer } from './postReducers';

export default combineReducers({
  userList: userListReducer,
  userListRecommended: userListRecommendedReducer,
  userProfileDetail: userProfileDetailReducer,
  userPostsList: userPostsListReducer,

  postSearchList: postSearchListReducer,
});
