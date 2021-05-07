import {
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_FAIL,
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
