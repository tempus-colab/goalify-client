/// <references type="vitest/client" />

import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    sentryVitePlugin({
      org: "hemenses-organization",
      project: "goalify",
      url: "https://sentry.io/",
      telemetry: false,
    }),
  ],
  server: {
    port: 5050,
  },
  build: {
    sourcemap: true,
  },
  appType: "spa",
});
