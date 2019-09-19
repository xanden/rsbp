import React, { Suspense } from "react";
import { Switch } from "react-router";
import MyErrorBoundary from "components/ErrorBoundary";
import Wrapper from "components/Layout/Wrapper";

import pages from "routes/pages";

const routes = (
  <div>
    <Wrapper>
      <MyErrorBoundary>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>{pages}</Switch>
        </Suspense>
      </MyErrorBoundary>
    </Wrapper>
  </div>
);

export default routes;
