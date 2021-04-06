import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import { distanceDate } from '../utilities/formatDate';
import { getNotificationLink } from './Header';
import NotificationTitle from './NotificationTitle';

export const markAsRead = (notification) => {
  notification.isRead = true;
};

function Notification({ notification }) {
  return (
    <Link
      className="notification-link"
      onClick={() => markAsRead(notification)}
      to={getNotificationLink(notification)}
    >
      <div
        className={classNames('notification--item', {
          'notification--unread': !notification.isRead,
        })}
      >
        <Avatar
          src={notification.user.profile_pic}
          name={notification.user.name}
          handle={notification.user.username}
          url={`/profile/${notification.user.username}`}
          size="sm"
        />
        <div className="notification--item--right">
          <NotificationTitle notification={notification} />
          <p>{notification.description}</p>
          <p className="notification--meta">
            {distanceDate(notification.created)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Notification;
