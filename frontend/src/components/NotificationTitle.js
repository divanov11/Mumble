import React from 'react';
import '../styles/components/NotificationTitle.css';

function NotificationTitle({ notification }) {
  return (
    <div className="notification-title">
      <span className="notification-title__name">{notification.user.name}</span>
      <span className="notification-title__link">{notification.content}</span>
    </div>
  );
}

export default NotificationTitle;
