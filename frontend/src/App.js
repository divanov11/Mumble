import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

import Error500 from './pages/Error500';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Discussion from './pages/Discussion';
import ProfilePage from './pages/ProfilePage';
import UserSettingsPage from './pages/UserSettingsPage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';
import CreateArticlePage from './pages/CreateArticlePage';
import CreateDiscussionPage from './pages/CreateDiscussionPage';
import Error404 from './pages/Error404';
import NotificationsPage from './pages/NotificationsPage';
import RestoreScroll from './common/RestoreScroll';

const App = () => {
  const userTheme = localStorage.getItem('mumble-theme') ?? 'light';

  const [currentTheme, setCurrentTheme] = useState(userTheme);

  useEffect(() => {
    localStorage.setItem('mumble-theme', currentTheme);
    toast('Worked');
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ErrorBoundary FallbackComponent={Error500}>
        <div
          className={classNames(
            'app',
            `${currentTheme === 'dark' && 'dark-theme'}`,
          )}
        >
          <Header theme={currentTheme} toggleTheme={toggleTheme} />
          <main>
            <Switch>
              <Route exact path={'/login'} component={LoginPage} />
              <Route exact path={'/'} component={HomePage} />
              <Route
                exact
                path={'/profile/:username'}
                component={ProfilePage}
              />
              <Route exact path={'/settings'} component={UserSettingsPage} />
              <Route
                exact
                path={'/create-discussion'}
                component={CreateDiscussionPage}
              />
              <Route
                exact
                path={'/create-article'}
                component={CreateArticlePage}
              />
              <Route
                exact
                path={'/notifications'}
                component={NotificationsPage}
              />
              <Route exact path={'/discussion/:slug'} component={Discussion} />
              <Route exact path={'/article/:slug'} component={ArticlePage} />
              <Route exact path={'/search'} component={SearchPage} />
              <Route path="/404" component={Error404} />
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
