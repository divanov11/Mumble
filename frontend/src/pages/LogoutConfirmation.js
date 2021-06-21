import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import classNames from 'classnames';

import '../styles/components/LogoutConfirmation.css';

const LogoutConfirmation = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  // Logs out the user
  const logoutUser = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <div className="LogoutConfirmation">
      {/* Theme changer */}
      <div className="LogoutConfirmation__themeToggler">
        <i
          className={classNames(
            'LogoutConfirmation__themeIcon',
            'fas',
            `fa-${isDarkTheme ? 'sun' : 'moon'}`,
          )}
          onClick={() => {
            toggleTheme(DarkLightTheme());
          }}
        ></i>
      </div>
      <div className="LogoutConfirmation__message">
        <h1>Do you really want to logout?</h1>
        <br />
        {/* Links back to home page */}
        <div className="LogoutConfirmation__buttons">
          <Link
            to="/"
            className="btn btn--main--outline LogoutConfirmation__btn LogoutConfirmation__btn--left"
          >
            &#x2190; Back
          </Link>
          {/* Logs out the user */}
          <Link
            to="/login"
            className="btn btn--main--outline LogoutConfirmation__btn LogoutConfirmation__btn--left"
            onClick={logoutUser}
          >
            Logout <i className="fa fa-sign-out"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
