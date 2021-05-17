import React, { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import 'react-toastify/dist/ReactToastify.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import './styles/App.css';

import { PrivateRoute } from './utilities';
import { useLocationBlocker } from './hooks';
import { RestoreScroll } from './components';
import { getUnreadNotifications } from './actions/notificationsActions';
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
  Error404Page,
  Error500Page,
  ForgotPasswordPage,
} from './pages';

const App = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useLocationBlocker();
  const dispatch = useDispatch();

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
      <Router>
        <ErrorBoundary FallbackComponent={Error500Page}>
          <Suspense fallback={<h1>Loading</h1>}>
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
                <Route path="/404" component={Error404Page} />
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
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;
