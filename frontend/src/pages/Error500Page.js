import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Error500Page.css';

const Error500Page = ({ error }) => (
  <div className="error500page">
    <h1 className="error500page__banner">
      5
      <img
        className="error500page__logo"
        src="https://mumble.dev/apple-touch-icon.png"
        alt="Mumble Logo"
      />
      <img
        className="error500page__logo"
        src="https://mumble.dev/apple-touch-icon.png"
        alt="Mumble Logo"
      />
    </h1>
    <h2 className="error500page__title">🚨 Internal Server Error !</h2>
    <p className="error500page__info">Something went wrong. 🤷‍♂️</p>

    <Link className="btn btn--main--outline error500page__link" to="/">
      &#x2190; Go Home
    </Link>

    <div className="error500page__code">
      You can 🙌 raise an issue
      <a href="https://github.com/divanov11/Mumble/issues" target="_blank" rel="noreferrer">
        &nbsp;here&nbsp;
      </a>
      mentioning these issue below.
      <pre>
        <code>{error.message}</code>
      </pre>
    </div>
  </div>
);

export default Error500Page;
