import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/profile" exact component={LandingPage} />
  </Switch>
);

export default Routes;
