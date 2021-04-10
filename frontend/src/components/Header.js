import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import '../styles/components/HeaderBar.css';
import logo from '../assets/logo/dark-logo.png';

import { Avatar } from '../common';
import SearchBox from './SearchBox';
import { markAsRead, NotificationTitle } from './Notification';
import { usersData, notifications } from '../data';
import { toggleTheme as DarkLightTheme } from '../actions/local';

export const getNotificationLink = (notification) => {
  const notificationUrlMap = {
    discussion: `/discussion/${notification.content_slug}`,
    follow: `/profile/${notification.user.username}`,
    article: `/article/${notification.content_slug}`,
  };
  return notificationUrlMap[notification.notification_type];
};

const Header = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  const user = usersData.find((u) => Number(u.id) === 1);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowNotification(false); // if the notification dropdown is open then close it
    setShowNavigation(!showNavigation);
  };

  const toggleNotification = (e) => {
    e.stopPropagation();
    setShowNavigation(false); // if the avator dropdown is open then close it
    setShowNotification(!showNotification);
  };

  const closeDropdown = () => setShowNavigation(false);
  const closeNotification = () => setShowNotification(false);

  const navigationRef = useDetectClickOutside({
    onTriggered: closeDropdown,
  });

  const notificationRef = useDetectClickOutside({
    onTriggered: closeNotification,
  });

  const hasUnreadNotification = () => !!notifications.find((notification) => !notification.isRead);

  return (
    <div id="header">
      <div id="logo">
        <Link to={'/'}>
          <img src={logo} alt="Mumble Icon" />
        </Link>
      </div>

      <div id="nav-wrapper">
        <SearchBox />
        <i
          className={classNames('fas', 'fa-bell', 'nav-item', 'nav-icon')}
          onClick={toggleNotification}
        >
          {hasUnreadNotification() && <div className="nav-icon--unread"></div>}
        </i>
        <Avatar
          id="nav-toggle-icon"
          onClick={toggleDropdown}
          alt="img-description"
          src={user.profile_pic}
          className="nav-item"
          size="sm"
        />
      </div>

      {showNavigation && (
        <div ref={navigationRef} className="card" id="user--navigation">
          <div
            role="button"
            className="user-navigation--item"
            onClick={() => {
              toggleTheme(DarkLightTheme());
              closeDropdown();
            }}
          >
            <i
              className={classNames(
                'fas',
                `fa-${isDarkTheme ? 'sun' : 'moon'}`,
                ' user--nav--icon',
              )}
            ></i>
            Enable {isDarkTheme ? 'light' : 'dark'} Mode
          </div>

          <Link
            to={`/profile/${user.username}`}
            className="user-navigation--item"
            onClick={closeDropdown}
          >
            <i className="fas fa-user user--nav--icon"></i>
            Profile
          </Link>

          <Link
            to="/settings"
            id="user-settings"
            className="user-navigation--item"
            onClick={closeDropdown}
          >
            <i className="fas fa-cog user--nav--icon"></i>
            Settings
          </Link>

          <Link to="/logout" className="user-navigation--item" onClick={closeDropdown}>
            <i className="fas fa-sign-out-alt user--nav--icon"></i>
            Logout
          </Link>
        </div>
      )}
      {showNotification && (
        <div ref={notificationRef} className="card" id="user--navigation">
          <Link to={`/notifications`} className="user-navigation--item" onClick={closeNotification}>
            <i className="fas fa-envelope-open-text nav--icon"></i>
            <h6>All Notifications</h6>
          </Link>

          {notifications
            .filter((notification) => !notification.isRead)
            .map((notification) => (
              <div key={notification.id} className="user-navigation--item">
                <Avatar
                  alt="img-description"
                  src={notification.user.profile_pic}
                  className="nav-item"
                  size="sm"
                />
                <Link
                  to={getNotificationLink(notification)}
                  onClick={() => {
                    closeNotification();
                    markAsRead(notification);
                  }}
                >
                  <NotificationTitle notification={notification} />
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Header;
