import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../app/Home";
import Recommend from "../app/Recommend";
import Singers from "../app/Singers";
import Rank from "../app/Rank";

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommand"} />,
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      },
    ],
  },
];
