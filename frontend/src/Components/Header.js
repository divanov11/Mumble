import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userData from '../data/users';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useHistory } from 'react-router-dom';
import '../styles/components/HeaderBar.css';

function Header() {
  const user = userData.find((u) => Number(u.id) === 1);
  const [showNavigation, setShowNavigation] = useState(false);
  const history = useHistory();
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowNavigation(!showNavigation);
  };

  const closeDropdown = (e) => {
    setShowNavigation(false);
  };

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
          <div
            className="user-navigation--item"
            onClick={(e) => {
              closeDropdown(e);
              history.push(`/profile/${user.username}`);
            }}
          >
            <i className="fas fa-user user--nav--icon"></i>
            <Link to={`/profile/${user.username}`}>Profile</Link>
          </div>

          <div
            className="user-navigation--item"
            onClick={(e) => {
              closeDropdown(e);
              history.push('/settings');
            }}
          >
            <i className="fas fa-cog user--nav--icon"></i>
            <Link to={'/settings'}>Settings</Link>
          </div>

          <div
            className="user-navigation--item"
            onClick={(e) => {
              closeDropdown(e);
              history.push('/logout');
            }}
          >
            <i className="fas fa-sign-out-alt user--nav--icon"></i>
            <Link to={'/logout'}>Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
