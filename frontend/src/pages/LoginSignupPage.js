import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import heroLight from '../assets/images/hero-light.svg';
import heroDark from '../assets/images/hero-dark.svg';
import logoDark from '../assets/logo/dark-logo.png';
import logoLight from '../assets/logo/light-logo.png';
import '../styles/components/LoginOrSignUp.css';

import { LoginForm, SignupForm } from '../components';
import { toggleTheme as DarkLightTheme } from '../actions/local';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <img
                className="loginSignup__headerLogo"
                src={isDarkTheme ? logoDark : logoLight}
                alt="Logo"
              />
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
          </div>
          <div className="loginSignup__bodyRight">
            <img
              className="loginSignup__heroImage"
              src={isDarkTheme ? heroDark : heroLight}
              alt="Mumble loginSignup Hero"
            />
          </div>
        </div>
        <div className="loginSignup__footer">
          <div className="container">
            <div className="loginSignup__footerLeft">
              <p>&copy; Mumble Community {new Date().getFullYear()}</p>
            </div>
            <div className="loginSignup__footerRight">
              <p>
                An open source project. <br /> For the community, by the community
              </p>
              <a
                className="loginSignup__footerIcon"
                href="https://github.com/denis11/Mumble"
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

export default LoginSignupPage;
