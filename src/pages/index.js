import { lazy } from "react";

import * as urls from "./urls";

const routes = [
  {
    path: urls.HOMEPAGE_URL,
    name: "home",
    exact: true,
    component: lazy(() => import("./Home")),
  },
  {
    path: urls.CARD_PREVIEW,
    name: "card preview",
    exact: true,
    component: lazy(() => import("./CardPreview")),
  },
  {
    name: "not found",
    path: "*",
    component: lazy(() => import("./not-found/NotFound")),
  },
];

export default routes;
