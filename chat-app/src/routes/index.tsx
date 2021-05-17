import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants/common";
import Chat from "../views/Chat";
import Home from "../views/Home";
import Login from "../views/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.CHAT_LISTING} component={Home} />
      <Route path={ROUTES.CHAT_WINDOW} component={Chat} />
      <Route path={ROUTES.LOGIN} component={Login} />
    </Switch>
  )
};

export default Routes;