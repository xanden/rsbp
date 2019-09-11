import React, { lazy } from "react";
import { Route } from "react-router";

// pages
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "components/Home")
);
const Hello = lazy(() =>
  import(/* webpackChunkName: "Hello" */ "components/Hello")
);
// const App = lazy(() => import(/* webpackChunkName: "App" */ "components/App"));
const NoMatch = lazy(() =>
  import(/* webpackChunkName: "NoMatch" */ "components/NoMatch")
);

import App from "components/App"

export default [
  <Route key="/" exact path="/" component={Home} />,
  <Route key="/hello" path="/hello" component={Hello} />,
  <Route key="/app" path="/app" component={App} />,
  <Route key="*" component={NoMatch} />
];
