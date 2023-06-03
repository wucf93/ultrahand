import { lazy } from "react";
import Home from "./home";
import { createBrowserRouter, RouteObject } from "react-router-dom";

interface PageObject {
  name: string;
  path: string;
  children?: Array<PageObject>;
  Component?: RouteObject["Component"];
}

/** 显示在左侧菜单的页面 */
export const pages: Array<PageObject> = [
  {
    name: "格式化",
    path: "/format",
    children: [
      {
        name: "时间格式化",
        path: "date",
        Component: lazy(() => import("./pages/format/date")),
      },
    ],
  },
];

export const router = createBrowserRouter([
  { path: "/", Component: Home, children: [...pages, { path: "/setting" }] },
]);
