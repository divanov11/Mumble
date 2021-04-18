import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error500Page.css';

const Error500Page = ({ error }) => (
  <div className="main500page">
    <h1 className="main500page__banner">
      5
      <img
        className="main500page__logo"
        src="https://mumble.dev/apple-touch-icon.png"
        alt="Mumble Logo (0)"
      />
      <img
        className="main500page__logo"
        src="https://mumble.dev/apple-touch-icon.png"
        alt="Mumble Logo (0)"
      />
    </h1>
    <h2 className="main500page__title">Internal Server Error !</h2>
    <p className="main500page__info">Something went wrong</p>
    <Link to="/">Click here to go back to the 🏡 home page</Link>
  </div>
);

export default Error500Page;
