import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import '../styles/components/NotificationTitle.css';

import { Avatar } from '../common';
import { formatDate } from '../utilities';
import { getNotificationLink } from './Header';
import { markAsRead } from '../actions/notificationsActions';
import { useDispatch } from 'react-redux';
import { getImageUrl } from '../utilities/getImageUrl';

const Notification = ({ notification }) => {
  const dispatch = useDispatch();

  return (
    <Link
      className="notification-link"
      onClick={() => dispatch(markAsRead(notification.id))}
      to={getNotificationLink(notification)}
    >
      <div className={classNames('notification--item')}>
        <Avatar
          src={getImageUrl(notification.created_by.profile_pic)}
          name={notification.created_by.name}
          handle={notification.created_by.username}
          url={`/profile/${notification.created_by.username}`}
          size="sm"
        />
        <div className="notification__right-content">
          <NotificationTitle notification={notification} />
          <p
            className={classNames('notification__content', {
              'notification__content--unread': !notification.is_read,
            })}
          >
            {notification.content}
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
      <span className="notification-title__name">{notification.created_by.username}</span>
      <span className="notification-title__link">{notification.content}</span>
    </div>
  );
};

export default Notification;
