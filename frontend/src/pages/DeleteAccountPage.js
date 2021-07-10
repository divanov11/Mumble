import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAccount } from '../actions/authActions';

import { toggleTheme as DarkLightTheme } from '../actions/local';
import classNames from 'classnames';

import '../styles/components/DeleteAccountPage.css';

const DeleteAccountPage = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const toggleTheme = useDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };

  return (
    <div className="main__DeleteAccountPage">
      {/* Theme changer */}
      <div className="DeleteAccountPage__themeToggler">
        <i
          className={classNames(
            'DeleteAccountPage__themeIcon',
            'fas',
            `fa-${isDarkTheme ? 'sun' : 'moon'}`,
          )}
          onClick={() => {
            toggleTheme(DarkLightTheme());
          }}
        ></i>
      </div>
      <div className="DeleteAccountPage__message">
        <h1>Are you sure to Delete your Account?</h1>
        <br />
        {/* Links back to home page */}
        <div className="DeleteAccountPage__buttons">
          <Link
            to="/"
            className="btn btn--main--outline DeleteAccountPage__btn DeleteAccountPage__btn--left"
          >
            &#x2190; Cancel
          </Link>
          {/*  */}
          <Link
            to="/login"
            className="btn btn--main--outline DeleteAccountPage__btn DeleteAccountPage__btn--left"
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
