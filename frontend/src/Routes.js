import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import PrivateRoute from './utilities/PrivateRoute';

import { Header, RestoreScroll } from './components';
import {
  HomePage,
  DiscussionPage,
  ArticlePage,
  ProfilePage,
  UserSettingsPage,
  SearchPage,
  CreateArticlePage,
  CreateDiscussionPage,
  NotificationsPage,
  LoginSignupPage,
  Error404page,
  Error500page,
  ForgotPasswordPage,
} from './pages';
import { getNotifications, getUnreadNotifications } from './actions/notificationsActions';

/**
 * React Router v5 will keep pushing history when you try to click a link that navigates
 * the user to the same page they are currently on.  This will cause the user to have to
 * press the browser back button multiple times to leave the page.  This hook checks
 * if the user is navigating to the same page, and if so, do nothing.
 *
 * See https://github.com/divanov11/Mumble/issues/315 for more issue
 */
export function useLocationBlocker() {
  const history = useHistory();

  const getLocationId = ({ pathname, search, hash }) => {
    return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
  };

  useEffect(
    () =>
      history.block(
        (location, action) =>
          action !== 'PUSH' || getLocationId(location) !== getLocationId(history.location),
      ),
    [history],
  );
}

const Routes = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useLocationBlocker();

  useEffect(() => {
    const refreshNotifications = () => {
      if (isAuthenticated) {
        dispatch(getUnreadNotifications());
      }
    };
    refreshNotifications();
    const interval = setInterval(refreshNotifications, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, dispatch]);

  return (
    <div className={classNames('app', `${isDarkTheme && 'dark-theme'}`)}>
      <ErrorBoundary FallbackComponent={Error500page}>
        {isAuthenticated && <Header />}
        <main>
          <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <Route exact path="/:parameter(login|signup)" component={LoginSignupPage} />
            <Route exact path="/profile/:username" component={ProfilePage} />
            <PrivateRoute exact path="/create-discussion" component={CreateDiscussionPage} />
            <PrivateRoute exact path="/create-article" component={CreateArticlePage} />
            <Route exact path="/notifications" component={NotificationsPage} />
            <Route exact path="/discussion/:slug" component={DiscussionPage} />
            <Route exact path="/article/:slug" component={ArticlePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <PrivateRoute exact path="/settings" component={UserSettingsPage} />
            <Route path="/404" component={Error404page} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <RestoreScroll />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      </ErrorBoundary>
    </div>
  );
};

export default Routes;
