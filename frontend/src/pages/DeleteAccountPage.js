import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../actions/authActions';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import classNames from 'classnames';

import '../styles/components/LogoutConfirmation.css';

const DeleteAccountPage = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  return (
    <div className="LogoutConfirmation">
      {/* Theme changer */}
      <div className="LogoutConfirmation__themeToggler">
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
      <div className="LogoutConfirmation__message">
        <h1>Are you sure to Delete your Account?</h1>
        <br />
        {/* Links back to home page */}
        <div className="LogoutConfirmation__buttons">
          <Link
            to="/"
            className="btn btn--main--outline LogoutConfirmation__btn LogoutConfirmation__btn--left"
          >
            &#x2190; Cancel
          </Link>
          {/*  */}
          <Link
            className="btn btn--main--outline LogoutConfirmation__btn LogoutConfirmation__btn--left"
            onClick={handleDeleteAccount}
          >
            Delete <i className="fa fa-user-times"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
