import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import heroLight from '../assets/images/hero-light.svg';
import heroDark from '../assets/images/hero-dark.svg';
import logoDark from '../assets/logo/light-logo.png';
import logoLight from '../assets/logo/light-logo.png';
import '../styles/components/LoginOrSignUp.css';

import { LoginForm, SignupForm } from '../components';
import { toggleTheme as DarkLightTheme } from '../actions/local';
import { Link } from 'react-router-dom';
import { Button } from '../common';

const LoginSignupPage = ({ match, history }) => {
  const { parameter } = match.params;
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <div className="loginSignup">
      <div className="loginSignup__header">
        <div className="container">
          <div className="loginSignup__headerLeft">
            <Link className="loginSignup__headerLogo" to="/">
              <img src={isDarkTheme ? logoDark : logoLight} alt="Logo" />
              <h1>Mumble</h1>
            </Link>
            <h2 className="loginSignup__headerTitle">A place for developers to</h2>
            <h5 className="loginSignup__headerSubtitle">
              Share Projects, Ask Questions, Have Discussions & Publish Articles
            </h5>
          </div>
          <div className="loginSignup__headerRight">
            <i
              className={classNames(
                'loginSignup__themeIcon',
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
        <div className="loginSignup__body">
          <div className="loginSignup__bodyLeft">
            {parameter === 'login' ? <LoginForm /> : <SignupForm />}
            <div className="loginSignup__social">
              <Button
                color="main"
                outline
                iconStyle="fab"
                iconName="github"
                text="Continue with Github"
              />
              <span style={{ margin: '0 0.8rem' }}>or</span>
              <Button
                color="sub"
                outline
                iconStyle="fab"
                iconName="google"
                text="Continue with Google"
              />
            </div>
          </div>
          <div className="loginSignup__bodyRight">
            <img
              className="loginSignup__heroImage"
              src={isDarkTheme ? heroDark : heroLight}
              alt="Mumble loginSignup Hero"
            />
          </div>
        </div>
      </div>
      <div className="loginSignup__footer">
        <div className="container">
          <div className="loginSignup__footerLeft">
            <p>&copy; Mumble Community {new Date().getFullYear()}</p>
            <span style={{ marginLeft: '1.5rem' }}>&bull;</span>
            <a className="loginSignup__footerIcon" href="/" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="loginSignup__footerIcon" href="/" rel="noreferrer" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="loginSignup__footerIcon"
              href="https://discord.com/invite/9Du4KUY3dE"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-discord"></i>
              <span className="tooltip-text">Mumble Discord Server</span>
            </a>
            <a
              className="loginSignup__footerIcon"
              href="https://midouwebdev.gitbook.io/mumble-docs/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-file"></i>
              <span className="tooltip-text">Mumble docs</span>
            </a>
          </div>
          <div className="loginSignup__footerRight">
            <p>
              An open source project. <br /> For the community, by the community.
            </p>
            <a
              className="loginSignup__footerIcon"
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
  );
};

export default LoginSignupPage;
