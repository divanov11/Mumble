import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import userData from '../data/users';
import '../styles/components/HeaderBar.css';

function Header() {
  const user = userData.find((u) => Number(u.id) === 1);
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowNavigation(!showNavigation);
  };

  const closeDropdown = () => setShowNavigation(false);

  const navigationRef = useDetectClickOutside({
    onTriggered: closeDropdown,
  });

  return (
    <div id="header">
      <div id="logo">
        <Link to={'/'}>
          <h3>MUMBLE</h3>
        </Link>
      </div>

      <div id="nav-wrapper">
        <i className="fas fa-bell nav-item nav-icon"></i>
        <img
          id="nav-toggle-icon"
          onClick={toggleDropdown}
          alt="img-description"
          className="avatar avatar--sm nav-item"
          src={user.profile_pic}
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
    </div>
  );
}

export default Header;
