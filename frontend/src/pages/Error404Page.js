import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error404Page.css';

const Error404Page = () => (
  <div className="main404page">
    <h1 className="main404page__title">
      4
      <img
        className="main404page__logo"
        src="https://mumble.dev/apple-touch-icon.png"
        alt="Mumble Logo (0)"
      />
      4
    </h1>
    <h2 className="main404page__sub-title">Page Not Found !</h2>
    <p className="main404page__info">Looks like you got lost</p>
    <br />
    <Link to="/">Go Home</Link>
  </div>
);

export default Error404Page;
