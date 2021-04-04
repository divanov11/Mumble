import './styles/App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Discussion from './pages/Discussion';
import ProfilePage from './pages/ProfilePage';
import UserSettingsPage from './pages/UserSettingsPage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';
import Error404 from './pages/Error404';

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
          <Route exact path={'/discussion/:slug'} component={Discussion} />
          <Route exact path={'/article/:slug'} component={ArticlePage} />
          <Route exact path={'/search'} component={SearchPage} />
          <Route path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
