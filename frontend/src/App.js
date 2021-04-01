import { useState } from "react"
import "./App.css";
import "./ui-kit/styles/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Discussion from "./Pages/Discussion";
import ProfilePage from "./Pages/ProfilePage";
import UserSettingsPage from "./Pages/UserSettingsPage";
import UserSearchPage from "./Pages/UserSearchPage";

function App() {
  // change the user state to null to see the login page 
  const [user, setUser] = useState('john')

  return (
    <Router>
      {!user ? (           // if no user is Logged in show the LoginPage 
        <LoginPage />
      ) : (               // else show the App
        <>
          <Header />
          <Switch>
            <main>
              <Route component={HomePage} path={"/"} exact />
              <Route component={ProfilePage} path={"/profile/:username"} />
              <Route component={UserSettingsPage} path={"/settings"} />
              <Route component={Discussion} path={"/discussion/:slug"} />
              <Route component={UserSearchPage} path={"/find-user"} />
            </main>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
