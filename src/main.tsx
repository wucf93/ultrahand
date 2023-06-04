import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { router } from "./router";
import zhCN from "antd/locale/zh_CN";
import 'antd/dist/reset.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{ token: { colorPrimary: "#1d93ab" } }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
