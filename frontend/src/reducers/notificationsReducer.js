import {
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_FAIL,
  NOTIFICATIONS_UNREAD_REQUEST,
  NOTIFICATIONS_UNREAD_SUCCESS,
  NOTIFICATIONS_UNREAD_FAIL,
} from '../constants/notificationsConstants';

export const notificationsReducer = (state = { notifications: [] }, action) => {
  switch (action.type) {
    case NOTIFICATIONS_REQUEST:
      return { ...state, loading: true };

    case NOTIFICATIONS_SUCCESS:
      return { ...state, loading: false, notifications: action.payload };

    case NOTIFICATIONS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const unreadNotificationsReducer = (state = { notifications: [] }, action) => {
  switch (action.type) {
    case NOTIFICATIONS_UNREAD_REQUEST:
      return { ...state, loading: true };

    case NOTIFICATIONS_UNREAD_SUCCESS:
      return { ...state, loading: false, notifications: action.payload };

    case NOTIFICATIONS_UNREAD_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
