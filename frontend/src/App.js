import './styles/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Discussion from './pages/Discussion';
import ProfilePage from './pages/ProfilePage';
import UserSettingsPage from './pages/UserSettingsPage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';
import CreateDiscussionPage from './pages/CreateDiscussionPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path={'/login'} component={LoginPage} />
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/profile/:username'} component={ProfilePage} />
          <Route exact path={'/settings'} component={UserSettingsPage} />
          <Route
            exact
            path={'/create-discussion'}
            component={CreateDiscussionPage}
          />
          <Route exact path={'/discussion/:slug'} component={Discussion} />
          <Route exact path={'/article/:slug'} component={ArticlePage} />
          <Route exact path={'/search'} component={SearchPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
