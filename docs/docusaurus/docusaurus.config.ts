import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Docs",
  tagline: "Project documentation",
  favicon: "img/favicon.ico",
  url: "https://example.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  presets: [
    [
      "classic",
      {
        docs: { routeBasePath: "/", sidebarPath: "./sidebars.ts" },
        blog: false,
        theme: {},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: { title: "Docs", items: [] },
  } satisfies Preset.ThemeConfig,
};

export default config;
