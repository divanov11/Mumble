import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import '../styles/components/NotificationTitle.css';

import { Avatar } from '../common';
import { formatDate } from '../utilities';
import { getNotificationLink } from './Header';

export const markAsRead = (notification) => {
  notification.isRead = true;
};

const Notification = ({ notification }) => {
  return (
    <Link
      className="notification-link"
      onClick={() => markAsRead(notification)}
      to={getNotificationLink(notification)}
    >
      <div className={classNames('notification--item')}>
        <Avatar
          src={notification.user.profile_pic}
          name={notification.user.name}
          handle={notification.user.username}
          url={`/profile/${notification.user.username}`}
          size="sm"
        />
        <div className="notification__right-content">
          <NotificationTitle notification={notification} />
          <p
            className={classNames('notification__content', {
              'notification__content--unread': !notification.isRead,
            })}
          >
            {notification.description}
          </p>
          <p className="notification--meta">{formatDate.distanceDate(notification.created)}</p>
        </div>
      </div>
    </Link>
  );
};

export const NotificationTitle = ({ notification }) => {
  return (
    <div className="notification-title">
      <span className="notification-title__name">{notification.user.name}</span>
      <span className="notification-title__link">{notification.content}</span>
    </div>
  );
};

export default Notification;
