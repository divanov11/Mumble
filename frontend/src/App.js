import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import Discussion from './Pages/Discussion'
import ProfilePage from './Pages/ProfilePage'
import UserSettingsPage from './Pages/UserSettingsPage'

function App() {
  return (
    <Router>
      <Header />
      <Route component={LoginPage} path={'/login'} />
      <main >
        <Route component={HomePage} path={'/'} exact />
        <Route component={ProfilePage} path={'/profile/:username'} />
        <Route component={UserSettingsPage} path={'/settings'} />
        <Route component={Discussion} path={'/discussion/:slug'} />
      </main>

    </Router>
  );
}

export default App;
