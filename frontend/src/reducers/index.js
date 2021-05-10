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
import { notificationsReducer } from './notificationsReducer';

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
  notifications: notificationsReducer,
});

export const replaceItem = (collection, item) => {
  const index = collection.findIndex((entry) => entry.id === item.id);
  return [...collection.slice(0, index), item, ...collection.slice(index + 1)];
};
