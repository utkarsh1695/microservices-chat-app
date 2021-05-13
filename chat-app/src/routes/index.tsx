import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routeConfig from "./routeConfig";

const Routes = () => {
  return routeConfig.map(({ path, component, exact }, index) => (
    <Route key={`__${path}:${index}__`} {...{ path, component, exact }} />
  ));
};

export default Routes;