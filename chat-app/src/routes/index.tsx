import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants/common";
import Chat from "../views/Chat";
import Home from "../views/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.CHAT_LISTING} component={Home} />
      <Route path={ROUTES.CHAT_WINDOW} component={Chat} />
    </Switch>
  )
};

export default Routes;