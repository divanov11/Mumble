import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error404Page.css';

const Error404Page = () => (
  <div className="main404page">
    <h1>
      4
      <span>
        <img
          className="image__404"
          src="https://mumble.dev/apple-touch-icon.png"
          alt="Mumble Logo (0)"
        />
      </span>
      4
    </h1>
    <h2>Page Not Found !</h2>
    <p>Looks like you got lost</p>
    <br />
    <Link to="/">Go Home</Link>
  </div>
);

export default Error404Page;
