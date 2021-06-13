import React, { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import 'react-toastify/dist/ReactToastify.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import './styles/App.css';

import { Loading } from './common';
import { PrivateRoute } from './utilities';
import { RestoreScroll } from './components';
import { getUnreadNotifications } from './actions/notificationsActions';
import {
  HomePage,
  ArticlePage,
  ProfilePage,
  UserSettingsPage,
  SearchPage,
  TagsPage,
  CreateArticlePage,
  NotificationsPage,
  LoginSignupPage,
  Error404Page,
  Error500Page,
  ForgotPasswordPage,
  LogoutConfirmation,
  DeleteAccountPage,
} from './pages';
import ArticlesPage from './pages/ArticlesPage';
import { refreshToken as refreshTokenAction } from './actions/authActions';
import { getProfile, listFollowing } from './actions/userActions';
import InboxPage from './pages/InboxPage';

const App = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(listFollowing());
      dispatch(getProfile());
    }
  }, [isAuthenticated, dispatch]);

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

  useEffect(() => {
    const fiveMinutes = 1000 * 60 * 5;

    const refreshToken = () => {
      if (isAuthenticated) {
        dispatch(refreshTokenAction());
      }
    };

    const interval = setInterval(refreshToken, fiveMinutes);
    refreshToken();
    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, dispatch]);

  return (
    <div className={classNames('app', `${isDarkTheme && 'dark-theme'}`)}>
      <ErrorBoundary FallbackComponent={Error500Page}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/settings" component={UserSettingsPage} />
            <PrivateRoute exact path="/create-article" component={CreateArticlePage} />
            <PrivateRoute exact path="/inbox" component={InboxPage} />
            <PrivateRoute exact path="/notifications" component={NotificationsPage} />
            <PrivateRoute exact path="/delete-account" component={DeleteAccountPage} />
            <Route exact path="/:parameter(login|signup)" component={LoginSignupPage} />
            <Route exact path="/profile/:username" component={ProfilePage} />
            <Route exact path="/article/:slug" component={ArticlePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/tags" component={TagsPage} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/logout-confirmation" component={LogoutConfirmation} />
            <Route path="/404" component={Error404Page} />
            <Redirect to="/404" />
          </Switch>
          <RestoreScroll />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            draggable
            pauseOnHover
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
