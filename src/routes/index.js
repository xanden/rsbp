import React, { Suspense } from "react";
import { Switch } from "react-router";
import MyErrorBoundary from "components/ErrorBoundary";

import NavBar from "components/NavBar";

import pages from "routes/pages";

const routes = (
  <div>
    <NavBar />
    <MyErrorBoundary>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>{pages}</Switch>
      </Suspense>
    </MyErrorBoundary>
  </div>
);

export default routes;
