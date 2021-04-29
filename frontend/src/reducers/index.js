import { combineReducers } from 'redux';
import auth from './auth';
import local from './local';
import {
  userListReducer,
  userListRecommendedReducer,
  userProfileDetailReducer,
  userPostsListReducer,
  userArticleListReducer,
} from './userReducers';

import { postDashboardReducer, postSearchListReducer } from './postReducers';
import {
  articlePageReducer,
  createArticleReducer,
  articleSearchListReducer,
} from './articleReducer';

export default combineReducers({
  local,
  auth,
  userList: userListReducer,
  userListRecommended: userListRecommendedReducer,
  userProfileDetail: userProfileDetailReducer,
  userPostsList: userPostsListReducer,
  createArticle: createArticleReducer,
  postSearchList: postSearchListReducer,
  articleSearchList: articleSearchListReducer,
  articlePage: articlePageReducer,
  dashboard: postDashboardReducer,
  userArticleList: userArticleListReducer,
});
