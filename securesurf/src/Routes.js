import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Analytics from "./Analytics";
import Recent from "./Recent";
import Account from "./Account";
import Settings from "./Settings";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard/recent">
        <Recent />
      </Route>
      <Route exact path="/dashboard/analytics">
        <Analytics />
      </Route>
      <Route exact path="/dashboard/account">
        <Account />
      </Route>
      <Route exact path="/dashboard/settings">
        <Settings />
      </Route>
      <Route exact path="/login">
        <NavBar />
        <Login />
      </Route>
      <Route>
        <NavBar />
        <Homepage />
      </Route>
    </Switch>
  );
}

export default Routes;