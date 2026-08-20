import { octane } from "octane/compiler/vite";
import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  experimentalMemoryManagement: true,
  experimentalFastVisibility: true,
  video: false,

  component: {
    devServer: {
      framework: "cypress-ct-octane-js" as any,
      bundler: "vite",
      viteConfig: {
        plugins: [octane()],
      },
    },
  },
});
