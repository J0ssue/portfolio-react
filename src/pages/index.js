import { lazy } from "react";

import * as urls from "./urls";

const routes = [
  {
    path: urls.HOMEPAGE_URL,
    exact: true,
    component: lazy(() => import("./Home")),
  },
  {
    path: urls.CARD_PREVIEW,
    exact: true,
    component: lazy(() => import("./CardPreview")),
  },
  {
    path: "*",
    component: lazy(() => import("./not-found/NotFound")),
  },
];

export default routes;
