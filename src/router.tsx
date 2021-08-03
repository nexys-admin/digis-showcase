import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landing from "./landing";

import { basename } from "./config";

import { links } from "./links";

export default () => {
  return (
    <Router basename={basename}>
      <Switch>
        <Route exact path={links.landing.link} component={Landing} />
      </Switch>
    </Router>
  );
};
