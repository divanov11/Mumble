import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import forgotpwdsvg from '../assets/images/forgotpwd-svg.svg';
import logoDark from '../assets/logo/light-logo.png';
import logoLight from '../assets/logo/light-logo.png';
import '../styles/components/ForgotPasswordPage.css';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import { Link } from 'react-router-dom';
import { Button, Input } from '../common';

const ForgotPasswordPage = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

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
            <form className="form" style={{ width: '100%' }}>
              <Input
                name="email"
                placeholder="e.g user@domain.com"
                required={true}
                label="Email Address:"
              />
              <Button color="main" text="Reset my password" size="lg"></Button>
            </form>
          </div>
          <div className="forgotpwd__bodyRight">
            <img
              className="forgotpwd__heroImage"
              src={isDarkTheme ? forgotpwdsvg : forgotpwdsvg}
              alt="Mumble ForgotPwd Hero"
            />
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
                href="https://discord.com/invite/TxgpyK8pzf"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
            <div className="forgotpwd__footerRight">
              <p>
                An open source project. <br /> For the community, by the community
              </p>
              <a
                className="forgotpwd__footerIcon"
                href="https://github.com/divanov11/Mumble"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
