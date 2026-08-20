import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import {
  buildRobotsTxt,
  buildSeoHeadHtml,
  buildSitemapXml,
} from "./seo.config";

const rootDir = dirname(fileURLToPath(import.meta.url));

function seoPlugin(): Plugin {
  let outDir = resolve(rootDir, "dist");

  return {
    name: "clinica-seo",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html) {
      return html.replace("<!-- SEO -->", buildSeoHeadHtml());
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/robots.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(buildRobotsTxt());
          return;
        }

        if (req.url === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.end(buildSitemapXml());
          return;
        }

        next();
      });
    },
    closeBundle() {
      writeFileSync(resolve(outDir, "robots.txt"), buildRobotsTxt());
      writeFileSync(resolve(outDir, "sitemap.xml"), buildSitemapXml());
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
});
