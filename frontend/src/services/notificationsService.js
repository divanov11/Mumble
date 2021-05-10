import { get, put, getApiUrl } from './config';

const getNotifications = () =>
  get({
    url: getApiUrl(`api/notifications/`),
  });

const getUnreadNotifications = () =>
  get({
    url: getApiUrl(`api/notifications/?is_read=False`),
  });

const markAsRead = (notificationId) =>
  put({
    url: getApiUrl(`api/notifications/${notificationId}/read/`),
  });

const notificationsService = {
  getNotifications,
  markAsRead,
  getUnreadNotifications,
};

export default notificationsService;
