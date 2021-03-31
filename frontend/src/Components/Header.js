import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
      <div id="logo">
        <Link to={'/'}>
          <h3>MUMBLE</h3>
        </Link>
      </div>

      <div id="nav-wrapper">
        <i className="fas fa-bell nav-item nav-icon"></i>
        {/* This will eventually be drop down list with options like settings, porfile, logout, etc */}
        <Link to={'/settings'}>
          <img
            alt="img-description"
            className="user-thumbnail user-thumbnail-sm nav-item"
            src="https://randomuser.me/api/portraits/men/52.jpg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
