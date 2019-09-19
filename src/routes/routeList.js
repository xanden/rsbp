// Core
import React, { lazy } from "react";

// Icons
import { MoveToInbox, Mail } from "@material-ui/icons";

const RouteList = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "Home" */ "components/Home")
    ),
    icon: <MoveToInbox />,
    bar: () => <div>123</div>
  },
  {
    name: "Hello",
    path: "/hello",
    exact: false,
    component: lazy(() =>
      import(/* webpackChunkName: "Hello" */ "components/Hello")
    ),
    icon: <Mail />
  },
  {
    name: "App",
    path: "/app",
    exact: false,
    component: lazy(() =>
      import(/* webpackChunkName: "App" */ "components/App")
    ),
    icon: <MoveToInbox />
  },
  {
    name: "Users",
    path: "/users",
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "Test" */ "components/Users")
    ),
    icon: <MoveToInbox />
  },
  {
    name: "User",
    path: "/users/:id",
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "Test" */ "components/User")
    )
  },
  {
    name: "NoMatch",
    path: "*",
    exact: false,
    component: lazy(() =>
      import(/* webpackChunkName: "NoMatch" */ "components/NoMatch")
    )
  }
];

export default RouteList;
