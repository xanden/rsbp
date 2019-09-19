import React from "react";
import { Route } from "react-router";
import routeList from "routes/routeList";

export default routeList.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />);
