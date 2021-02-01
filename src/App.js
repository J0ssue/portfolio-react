import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import globalStyles from "./shared/Global";
import routes from "./pages/index";
// import { ThemeProvider } from "styled-components";

// for api purposes
// import ApiContext from "./components/ApiContext/ApiContext";
// import { index } from "./utils/restClient";

// components
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.js";
import HeaderNavigation from "./components/HeaderNavigation";

const AppRoute = () => {
  function renderRoutes() {
    return routes.map((route, i) => (
      <Route key={i} exact path={route.path} component={route.component} />
    ));
  }

  return (
    <Router>
      {/* <ErrorBoundary hasError={serverError}> */}
      {/* TODO: build loading component. */}
      <Global styles={globalStyles} />
      <HeaderNavigation routes={routes} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>{renderRoutes()}</Switch>
      </Suspense>
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default AppRoute;
