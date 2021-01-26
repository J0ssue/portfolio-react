import { lazy } from "react";

// import * as urls from "./urls";

const routes = [
  // {
  //   path: urls.HOMEPAGE_URL,
  //   exact: true,
  //   component: lazy(() => import("./home/Home")),
  // },
  //   {
  //     path: urls.DISCLOSURE_FORM_URL,
  //     exact: true,
  //     component: lazy(() => import("./disclosure/Disclosure")),
  //   },
  //   {
  //     path: urls.DISCLOSURE_TOKEN_LOGIN_URL,
  //     exact: true,
  //     component: lazy(() => import("./not-found/NotFound")),
  //   },
  //   {
  //     path: urls.DISCLOSURE_DETAILS_URL,
  //     exact: true,
  //     component: lazy(() => import("./not-found/NotFound")),
  //   },
  {
    path: "*",
    component: lazy(() => import("./not-found/NotFound")),
  },
];

export default routes;
