import './styles/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Discussion from './pages/Discussion';
import ProfilePage from './pages/ProfilePage';
import UserSettingsPage from './pages/UserSettingsPage';
import UserSearchPage from './pages/UserSearchPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={'/login'} component={LoginPage} />
        <main>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/profile/:username'} component={ProfilePage} />
          <Route exact path={'/settings'} component={UserSettingsPage} />
          <Route exact path={'/discussion/:slug'} component={Discussion} />
          <Route exact path={'/find-user'} component={UserSearchPage} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
