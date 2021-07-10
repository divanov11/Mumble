import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import logoDark from '../assets/logo/light-logo.png';
import logoLight from '../assets/logo/light-logo.png';
import '../styles/components/ForgotPasswordPage.css';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import { Link } from 'react-router-dom';
import { Button, Input } from '../common';

const ForgotPasswordPage = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Do something with the email
    // Include the logic for sending request here
    alert(`we'll send you password reset link to your email`);
    setEmail('');
  };

  return (
    <div className="forgotpwd">
      <div className="forgotpwd__header">
        <div className="container">
          <div className="forgotpwd__headerLeft">
            <Link className="forgotpwd__headerLogo" to="/">
              <img src={isDarkTheme ? logoDark : logoLight} alt="Logo" />
              <h1>Mumble</h1>
            </Link>
            <h2 className="forgotpwd__headerTitle">Forgot your password ?</h2>
            <h5 className="forgotpwd__headerSubtitle">
              Don&apos;t worry, we are going to send you a link !
            </h5>
          </div>
          <div className="forgotpwd__headerRight">
            <i
              className={classNames(
                'forgotpwd__themeIcon',
                'fas',
                `fa-${isDarkTheme ? 'sun' : 'moon'}`,
              )}
              onClick={() => {
                toggleTheme(DarkLightTheme());
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="forgotpwd__body">
          <div className="forgotpwd__bodyLeft">
            <form className="form" onSubmit={onSubmit} style={{ width: '90%' }}>
              <Input
                name="email"
                placeholder="e.g user@domain.com"
                required={true}
                type="email"
                label="Email Address:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '90%' }}
              />
              <Button color="main" text="Reset my password" size="lg"></Button>
            </form>
          </div>
        </div>

        <div className="forgotpwd__footer">
          <div className="container">
            <div className="forgotpwd__footerLeft">
              <p>&copy; Mumble Community {new Date().getFullYear()}</p>
              <span style={{ marginLeft: '1.5rem' }}>&bull;</span>
              <a className="forgotpwd__footerIcon" href="/" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="forgotpwd__footerIcon" href="/" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="forgotpwd__footerIcon"
                href="https://discord.com/invite/9Du4KUY3dE"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-discord"></i>
                <span className="tooltip-text">Mumble Discord Server</span>
              </a>
              <a
                className="forgotpwd__footerIcon"
                href="https://midouwebdev.gitbook.io/mumble-docs/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-file"></i>
                <span className="tooltip-text">Mumble Docs</span>
              </a>
            </div>
            <div className="forgotpwd__footerRight">
              <p>
                An open source project. <br /> For the community, by the community.
              </p>
              <a
                className="forgotpwd__footerIcon"
                href="https://github.com/divanov11/Mumble"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
                <span className="tooltip-text">Github Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
