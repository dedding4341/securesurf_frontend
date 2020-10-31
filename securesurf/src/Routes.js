import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import UserDashboard from "./UserDashboard";
import Login from "./Login";
import NavBar from "./NavBar";
import SideNav from "./SideNav";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <SideNav />
        <UserDashboard />
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