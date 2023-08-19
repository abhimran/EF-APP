import { defineConfig } from "vite";
import htmlPlugin from "@rollup/plugin-html";

export default defineConfig({
  assetsInclude: ["**/*.html"],
  plugins: [htmlPlugin()],
});
