import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import SearchBox from '../components/SearchBox'

import userData from '../data/users';
import notifications from '../data/notifications';
import '../styles/components/HeaderBar.css';
import Avatar from '../common/Avatar';


function Header() {
  const user = userData.find((u) => Number(u.id) === 1);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowNavigation(!showNavigation);
  };

  const toggleNotification = (e) => {
    e.stopPropagation();
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

  return (
    <div id="header">
      <div id="logo">
        <Link to={'/'}>
          <h3>MUMBLE</h3>
        </Link>
      </div>

      <div id="nav-wrapper">
        <SearchBox/>
        <i className="fas fa-bell nav-item nav-icon"
           onClick={toggleNotification}
        ></i>
        <Avatar
          id="nav-toggle-icon"
          onClick={toggleDropdown}
          alt="img-description"
          src={user.profile_pic}
          className="nav-item"
          size="small"
        />
      </div>

      {showNavigation && (
        <div ref={navigationRef} className="card" id="user--navigation">
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
            className="user-navigation--item"
            onClick={closeDropdown}
          >
            <i className="fas fa-cog user--nav--icon"></i>
            Settings
          </Link>

          <Link
            to="/logout"
            className="user-navigation--item"
            onClick={closeDropdown}
          >
            <i className="fas fa-sign-out-alt user--nav--icon"></i>
            Logout
          </Link>
        </div>
      )}
      {showNotification && (
        <div ref={notificationRef} className="card" id="user--navigation">
          <Link
            to={`/notifications`}
            className="user-navigation--item"
            onClick={closeNotification}
          >
            <i className="fas fa-envelope-open-text nav--icon"></i>
            <h6>All Notifications</h6>
          </Link>

          {notifications.map((notification) => (
            <div key={notification.id} className="user-navigation--item">
              <Avatar
                alt="img-description"
                src={notification.user.profile_pic}
                className="nav-item"
                size="small"
              />
              <Link
                to={`/notification/${notification.id}`}
                onClick={closeNotification}
              >
                <strong>{notification.user.name} </strong>
                {notification.content}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
