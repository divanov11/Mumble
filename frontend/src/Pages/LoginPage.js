import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Login.css';
import screenshot from '../Images/screenshot.PNG';

function LoginPage() {
  return (
    <div id="login--page--container">
      <div id="left--column--login">
        <div id="left-column-content">
          <h1 id="headline">A place for developers to</h1>
          <p id="subheadline">
            Share Projects - Ask Questions - Have Discussions - Write Articles
          </p>
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
          <form action="#" className="form">
            <div className="form__field">
              <label htmlFor="formInput#email">Email: </label>
              <input
                className="input input--email"
                id="formInput#email"
                type="email"
                name="email"
                placeholder="e.g. user@domain.com"
              />
            </div>

            <div className="form__field">
              <label htmlFor="formInput#password">Password: </label>
              <input
                className="input input--password"
                id="formInput#passowrd"
                type="password"
                name="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
            </div>

            <div className="form__field">
              <label htmlFor="formInput#password">Password: </label>
              <input
                className="input input--password"
                id="formInput#passowrd"
                type="password"
                name="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              />
            </div>

            <input
              className="submit btn btn--main"
              type="submit"
              value="Sign In"
            />
          </form>
          <div id="bottom-content">
            <p>
              Already have an account? <Link to="#">Register</Link>
            </p>
            <p>
              <Link to="#">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
