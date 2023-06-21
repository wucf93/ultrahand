import { ReactNode } from "react";
import Home from "./pages/home";
import {
  Navigate,
  createHashRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from "react-router-dom";
import { CalculatorFilled, AppstoreFilled } from "@ant-design/icons";

export interface PageObject
  extends Omit<NonIndexRouteObject, "children" | "id"> {
  /** 必须唯一 */
  id: string;
  /** 名称 */
  name: string;
  /** icon */
  icon?: ReactNode;
  /** 子元素 */
  children?: Array<RouteObject>;
}

export type RouteObject = IndexRouteObject | PageObject;

/** 显示在左侧菜单的页面 */
export const pages: Array<RouteObject> = [
  {
    index: true,
    element: <Navigate to="base" />,
  },
  {
    id: "base",
    name: "基础工具",
    path: "/base",
    icon: <CalculatorFilled />,
    lazy: () => import("./pages/base"),
    children: [
      {
        index: true,
        element: <Navigate to="date" />,
      },
      {
        id: "base-date",
        name: "日期工具",
        path: "date",
        lazy: () => import("./pages/base/date"),
      },
      {
        id: "base-json",
        name: "JSON工具",
        path: "json",
        lazy: () => import("./pages/base/json"),
      },
    ],
  },
  {
    id: "app",
    name: "应用",
    path: "/app",
    icon: <AppstoreFilled />,
    lazy: () => import("./pages/app"),
  },
];

export function isPageObject(page: unknown): page is PageObject {
  return !!(page as PageObject).name;
}

export const router = createHashRouter([
  {
    id: "home",
    path: "/",
    Component: Home,
    children: pages,
  },
]);
