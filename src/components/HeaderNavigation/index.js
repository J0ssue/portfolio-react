import React from "react";
import BaseLink from "./components/BaseLink";

import { HeaderNavigationContainer, NavigationBar } from "./styled-components";

const HeaderNavigation = (props) => {
  const routes = removeNotFoundRoute(props.routes);

  function renderRouteLinks() {
    const routeLinks = getNavigationRouteData();

    return routeLinks.map((link, i) => (
      <BaseLink key={i} url={link.path} label={link.name} />
    ));
  }

  function getNavigationRouteData() {
    return routes.map((route) => {
      return {
        path: route.path,
        name: route.name,
      };
    });
  }

  function removeNotFoundRoute(routes) {
    return routes.filter((route) => route.name !== "not found");
  }

  return (
    <HeaderNavigationContainer>
      <NavigationBar>{renderRouteLinks()}</NavigationBar>
    </HeaderNavigationContainer>
  );
};

export default HeaderNavigation;
