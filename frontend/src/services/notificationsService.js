import { get, put, getApiUrl } from './config';

const getNotifications = () =>
  get({
    url: getApiUrl(`api/notifications/`),
  });

const markAsRead = (notificationId) =>
  put({
    url: getApiUrl(`api/notifications/${notificationId}/read/`),
  });

const notificationsService = {
  getNotifications,
  markAsRead,
};

export default notificationsService;
