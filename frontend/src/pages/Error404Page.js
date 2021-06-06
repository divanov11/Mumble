import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import classNames from 'classnames';

import '../styles/components/Error404Page.css';

const Error404Page = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  return (
    <div className="main404page">
      <div className="main404page__themeToggler">
        <i
          className={classNames(
            'main404page__themeIcon',
            'fas',
            `fa-${isDarkTheme ? 'sun' : 'moon'}`,
          )}
          onClick={() => {
            toggleTheme(DarkLightTheme());
          }}
        ></i>
      </div>
      <h1 className="main404page__title">
        4
        <img
          className="main404page__logo"
          src="https://mumble.dev/apple-touch-icon.png"
          alt="Mumble Logo"
        />
        4
      </h1>
      <h2 className="main404page__sub-title">Page Not Found !</h2>
      <p className="main404page__info">Looks like you got lost</p>
      <br />
      <Link className="btn btn--main--outline" to="/">
        &#x2190; Go Home
      </Link>
    </div>
  );
};

export default Error404Page;
