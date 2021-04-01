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
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <main>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/profile/:username"} component={ProfilePage} />
          <Route exact path={"/settings"} component={UserSettingsPage} />
          <Route exact path={"/discussion/:slug"} component={Discussion} />
          <Route exact path={"/find-user"} component={UserSearchPage} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
