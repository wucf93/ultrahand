import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//antd 主题
import { theme } from 'antd';
const mapToken = theme.defaultAlgorithm(theme.defaultSeed)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: { alias: { "@": "/src" } },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: { modifyVars: mapToken },
      javascriptEnabled: true
    }
  }
});
