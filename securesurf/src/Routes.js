import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import UserDashboard from "./UserDashboard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <UserDashboard />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route>
        <Homepage />
      </Route>
    </Switch>
  );
}

export default Routes;