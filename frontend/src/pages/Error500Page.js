import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error500Page.css';

const Error500Page = ({ error }) => (
  <div className="main500page">
    <h1>
      5
      <span>
<<<<<<< HEAD
        <img
          className="image__500"
          src="https://mumble.dev/apple-touch-icon.png"
          alt="Mumble Logo (0)"
        />
      </span>
      <span>
        <img
          className="image__500"
          src="https://mumble.dev/apple-touch-icon.png"
          alt="Mumble Logo (0)"
        />
=======
        <img className="image__500" src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)" />
      </span>
      <span>
        <img className="image__500" src="https://mumble.dev/apple-touch-icon.png" alt="Mumble Logo (0)" />
>>>>>>> 1cc4057caf94d0e0b35d97fdc5f4948e2dafb0ec
      </span>
    </h1>
    <h2>Internal Server Error !</h2>
    <p>Something went wrong</p>
    <br />
    <Link to="/">Click here to go back to the 🏡 home page</Link>
    <br />
    <br />
  </div>
);

export default Error500Page;
