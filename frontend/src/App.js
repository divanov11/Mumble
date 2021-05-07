import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import PrivateRoute from './utilities/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import 'react-placeholder/lib/reactPlaceholder.css';
import './styles/App.css';

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

const App = () => {
  const isDarkTheme = useSelector((state) => state.local.darkTheme);

  const user = useSelector((state) => state.auth);

  return (
    <Router>
      <div className={classNames('app', `${isDarkTheme && 'dark-theme'}`)}>
        <ErrorBoundary FallbackComponent={Error500page}>
          {user.isAuthenticated && <Header />}
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
    </Router>
  );
};

export default App;
