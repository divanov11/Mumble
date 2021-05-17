import React from 'react';

import logo from '../assets/logo/dark-logo-login.png';

const Loading = () => (
  <div className="loading">
    <div className="loading__logo">
      <img src={logo} alt="Mumble Logo" />
    </div>
    <div className="loading__loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loading;
