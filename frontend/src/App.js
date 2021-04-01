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
      <main>
        <Switch>
          <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/profile/:username"} component={ProfilePage} />
            <Route exact path={"/settings"} component={UserSettingsPage} />
            <Route exact path={"/discussion/:slug"} component={Discussion} />
            <Route exact path={"/find-user"} component={UserSearchPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
