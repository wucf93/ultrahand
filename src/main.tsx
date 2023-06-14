import React from "react";
import ReactDOM from "react-dom/client";
// router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// antd
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
