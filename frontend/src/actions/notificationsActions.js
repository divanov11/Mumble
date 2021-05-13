import {
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_FAIL,
  READ_REQUEST,
  READ_SUCCESS,
  READ_FAIL,
  NOTIFICATIONS_UNREAD_REQUEST,
  NOTIFICATIONS_UNREAD_SUCCESS,
  NOTIFICATIONS_UNREAD_FAIL,
} from '../constants/notificationsConstants';
import { NotificationsService } from '../services';

export const createActionPayload = (type, error) => ({
  type: type,
  payload:
    error.response && error.response.data.detail ? error.response.data.detail : error.message,
});

export const getNotifications = () => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATIONS_REQUEST });

    const notifications = await NotificationsService.getNotifications();
    dispatch({
      type: NOTIFICATIONS_SUCCESS,
      payload: notifications,
    });
  } catch (error) {
    dispatch(createActionPayload(NOTIFICATIONS_FAIL, error));
  }
};

export const getUnreadNotifications = () => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATIONS_UNREAD_REQUEST });

    const unreadNotifications = await NotificationsService.getUnreadNotifications();
    dispatch({
      type: NOTIFICATIONS_UNREAD_SUCCESS,
      payload: unreadNotifications,
    });
  } catch (error) {
    dispatch(createActionPayload(NOTIFICATIONS_UNREAD_FAIL, error));
  }
};

export const markAsRead = (notificationId) => async (dispatch) => {
  try {
    dispatch({ type: READ_REQUEST });

    await NotificationsService.markAsRead(notificationId);
    dispatch({
      type: READ_SUCCESS,
    });

    dispatch(getUnreadNotifications());
  } catch (error) {
    dispatch(createActionPayload(READ_FAIL, error));
  }
};
