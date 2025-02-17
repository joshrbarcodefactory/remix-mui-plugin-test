import mui from "@postinumero/vite-plugin-remix-mui";
import { vitePlugin as remix } from "@remix-run/dev";
import { VitePluginConfig } from "@remix-run/dev/dist/vite/plugin";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { flatRoutes } from "remix-flat-routes";
installGlobals();

export const config = async (
  options: {
    remix?: VitePluginConfig;
  } = {}
) =>
  defineConfig({
    plugins: [
      // remix(options.remix),
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
        //   ignoredRouteFiles: ["**/*"],
        //   routes: async (defineRoutes) => {
        //     return flatRoutes("routes", defineRoutes, {
        //       ignoredRouteFiles: [
        //         ".*",
        //         "**/*.css",
        //         "**/*.test.{js,jsx,ts,tsx}",
        //         "**/__*.*",
        //         // This is for server-side utilities you want to colocate
        //         // next to your routes without making an additional
        //         // directory. If you need a route that includes "server" or
        //         // "client" in the filename, use the escape brackets like:
        //         // my-route.[server].tsx
        //         "**/*.server.*",
        //         "**/*.client.*",
        //       ],
        //     });
        //   },
      }),
      mui(),
      tsconfigPaths(),
    ],
  });

export default config();
