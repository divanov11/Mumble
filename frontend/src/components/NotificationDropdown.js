import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Avatar, Button } from '../common';
import { markAsRead, markAllAsRead } from '../actions/notificationsActions';
import { getImageUrl } from '../utilities/getImageUrl';
import { getNotificationLink } from './Header';
import '../styles/components/NotificationDropdown.css';

const NotificationDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.unreadNotifications);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMarkingAllRead, setIsMarkingAllRead] = useState(false);

  const notificationCategories = {
    all: { label: 'All', icon: 'bell' },
    follow: { label: 'Follows', icon: 'user-plus' },
    mumble: { label: 'Posts', icon: 'comment' },
    article: { label: 'Articles', icon: 'newspaper' },
    discussion: { label: 'Discussions', icon: 'comments' },
  };

  const filteredNotifications = useMemo(() => {
    if (selectedCategory === 'all') {
      return notifications;
    }
    return notifications.filter(notification => notification.notification_type === selectedCategory);
  }, [notifications, selectedCategory]);

  const unreadCount = useMemo(() => {
    return filteredNotifications.filter(notification => !notification.is_read).length;
  }, [filteredNotifications]);

  const handleMarkAllAsRead = async () => {
    setIsMarkingAllRead(true);
    try {
      await dispatch(markAllAsRead());
    } catch (error) {
      console.error('Failed to mark all as read:', error);
    } finally {
      setIsMarkingAllRead(false);
    }
  };

  const handleNotificationClick = (notification) => {
    if (!notification.is_read) {
      dispatch(markAsRead(notification.id));
    }
    onClose();
  };

  const getNotificationIcon = (type) => {
    const iconMap = {
      follow: 'user-plus',
      mumble: 'comment',
      article: 'newspaper',
      discussion: 'comments',
    };
    return iconMap[type] || 'bell';
  };

  const getNotificationMessage = (notification) => {
    const typeMessages = {
      follow: `${notification.created_by.username} started following you`,
      mumble: `${notification.created_by.username} commented on your post`,
      article: `${notification.created_by.username} liked your article`,
      discussion: `${notification.created_by.username} replied to your discussion`,
    };
    return typeMessages[notification.notification_type] || notification.content;
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  return (
    <div 
      className="notification-dropdown card"
      role="dialog"
      aria-label="Notifications"
      aria-modal="false"
    >
      <div className="notification-dropdown__header">
        <h3 className="notification-dropdown__title">
          Notifications
          {unreadCount > 0 && (
            <span className="notification-badge" aria-label={`${unreadCount} unread notifications`}>
              {unreadCount}
            </span>
          )}
        </h3>
        
        <div className="notification-dropdown__actions">
          {unreadCount > 0 && (
            <Button
              size="sm"
              color="sub"
              text="Mark all read"
              onClick={handleMarkAllAsRead}
              loading={isMarkingAllRead}
              className="mark-all-read-btn"
              aria-label="Mark all notifications as read"
            />
          )}
          <Button
            size="sm"
            color="sub"
            iconName="times"
            onClick={onClose}
            className="close-dropdown-btn"
            aria-label="Close notifications"
          />
        </div>
      </div>

      <div className="notification-categories" role="tablist" aria-label="Notification categories">
        {Object.entries(notificationCategories).map(([key, category]) => {
          const categoryCount = key === 'all' 
            ? notifications.length 
            : notifications.filter(n => n.notification_type === key).length;
          
          return (
            <button
              key={key}
              className={classNames('notification-category', {
                'notification-category--active': selectedCategory === key,
              })}
              onClick={() => setSelectedCategory(key)}
              role="tab"
              aria-selected={selectedCategory === key}
              aria-controls="notification-list"
              disabled={categoryCount === 0}
            >
              <i className={`fas fa-${category.icon}`} aria-hidden="true"></i>
              <span>{category.label}</span>
              {categoryCount > 0 && (
                <span className="category-count" aria-label={`${categoryCount} notifications`}>
                  {categoryCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div 
        id="notification-list"
        className="notification-list"
        role="tabpanel"
        aria-labelledby="notification-categories"
      >
        {filteredNotifications.length === 0 ? (
          <div className="notification-empty" role="status">
            <i className="fas fa-bell-slash" aria-hidden="true"></i>
            <p>No notifications in this category</p>
          </div>
        ) : (
          <ul className="notification-items" role="list">
            {filteredNotifications.map((notification) => (
              <li key={notification.id} className="notification-item" role="listitem">
                <Link
                  to={getNotificationLink(notification)}
                  className={classNames('notification-link', {
                    'notification-link--unread': !notification.is_read,
                  })}
                  onClick={() => handleNotificationClick(notification)}
                  aria-describedby={`notification-${notification.id}-description`}
                >
                  <div className="notification-avatar">
                    <Avatar
                      alt={`${notification.created_by.username}'s profile picture`}
                      src={getImageUrl(notification.created_by.profile_pic)}
                      size="sm"
                    />
                    <div className="notification-type-icon">
                      <i 
                        className={`fas fa-${getNotificationIcon(notification.notification_type)}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  
                  <div className="notification-content">
                    <div className="notification-message">
                      {getNotificationMessage(notification)}
                    </div>
                    <div 
                      id={`notification-${notification.id}-description`}
                      className="notification-meta"
                    >
                      <time 
                        dateTime={notification.created_at}
                        className="notification-time"
                      >
                        {formatTimeAgo(notification.created_at)}
                      </time>
                      {!notification.is_read && (
                        <span className="notification-unread-indicator" aria-label="Unread">
                          •
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="notification-dropdown__footer">
        <Link
          to="/notifications"
          className="view-all-link"
          onClick={onClose}
          aria-label="View all notifications in full page"
        >
          <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          View All Notifications
        </Link>
      </div>
    </div>
  );
};

export default NotificationDropdown;