import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import screenshot from '../assets/images/screenshot.PNG';
import '../styles/components/LoginOrSignUp.css';

import { LoginForm, SignupForm } from '../components';

const LoginSignupPage = ({ match, history }) => {
  const params = match.params['parameter'];

  let auth = useSelector((state) => state.auth);
  let { user } = auth;

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <div id="login--page--container">
      <div id="left--column--login">
        <div id="left-column-content">
          <h1 id="headline">A place for developers to</h1>
          <p id="subheadline">Share Projects - Ask Questions - Have Discussions - Write Articles</p>
          <img alt="img-description" id="screenshot" src={screenshot} />
          <p>
            <small className="login--summary">
              An open source project. For the community, by the community
            </small>
          </p>
        </div>
      </div>

      <div id="right--column--login">
        <div id="form-wrapper">
          <h1 id="title">Mumble</h1>
          {params === 'login' ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
