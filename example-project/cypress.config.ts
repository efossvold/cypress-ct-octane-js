import { octane } from "octane/compiler/vite";
import { defineConfig } from "cypress";

export default defineConfig({
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
