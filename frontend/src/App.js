import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
} from './pages';

const App = () => {
  const userTheme = localStorage.getItem('mumble-theme') ?? 'light';
  const [currentTheme, setCurrentTheme] = useState(userTheme);

  useEffect(() => {
    localStorage.setItem('mumble-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ErrorBoundary FallbackComponent={Error500page}>
        <div className={classNames('app', `${currentTheme === 'dark' && 'dark-theme'}`)}>
          <Header theme={currentTheme} toggleTheme={toggleTheme} />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/:parameter(login|signup)" component={LoginSignupPage} />
              <Route exact path="/profile/:username" component={ProfilePage} />
              <PrivateRoute exact path="/create-discussion" component={CreateDiscussionPage} />
              <PrivateRoute exact path="/create-article" component={CreateArticlePage} />
              <Route exact path="/notifications" component={NotificationsPage} />
              <Route exact path="/discussion/:slug" component={DiscussionPage} />
              <Route exact path="/article/:slug" component={ArticlePage} />
              <Route exact path="/search" component={SearchPage} />
              <PrivateRoute
                exact
                path="/settings"
                component={() => (
                  <UserSettingsPage theme={currentTheme} toggleTheme={toggleTheme} />
                )}
              />
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
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
