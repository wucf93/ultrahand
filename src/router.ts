import Home from "./home";
import { createBrowserRouter, RouteObject } from "react-router-dom";

interface PageObject {
  id: string,
  name: string;
  path?: string;
  children?: Array<PageObject>;
  Component?: RouteObject["Component"];
  lazy?: RouteObject["lazy"];
}

/** 显示在左侧菜单的页面 */
export const pages: Array<PageObject> = [
  {
    id: 'format',
    name: "格式化",
    children: [
      {
        id: 'format-data',
        name: "时间格式化",
        path: "/format/date",
        lazy: () => import('./pages/format/date')
      },
      // {
      //   id: 'format-json',
      //   name: "JSON格式化",
      //   path: "/format/json",
      //   lazy: () => import('./pages/format/json')
      // },
    ],
  },
];

/** 扁平化路由 */
export const pageRoutes = (function getPageRoute(pages: Array<PageObject>) {
  return pages.reduce((routes, item) => {
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      routes = [...routes, ...getPageRoute(item.children)]
    }
    return routes
  }, [] as PageObject[])
})(pages)

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      ...pageRoutes,
    ]
  },
]);
