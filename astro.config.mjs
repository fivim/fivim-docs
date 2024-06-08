import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

import { siteAndBase } from "./src/site.config";

const conf = {
  // https://docs.astro.build/en/guides/deploy/github/
  // site: "https://enassi.github.io",
  // base: "/enassi-docs",
  integrations: [
    starlight({
      title: "Enassi Docs",
      logo: {
        light: "./public/logo.png",
        dark: "./public/logo.png",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/enassi/enassi-docs/tree/main/",
      },
      social: {
        github: "https://github.com/enassi/enassi",
      },
      customCss: process.env.NO_GRADIENTS ? [] : ["./src/styles/custom.css"],
      locales: {
        en: { label: "English", lang: "en" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      defaultLocale: "en",
      sidebar: [
        {
          label: "Start Here",
          translations: {
            "zh-CN": "从这里开始",
          },
          items: [
            {
              label: "Getting Started",
              link: "getting-started",
              translations: {
                "zh-CN": "开始使用",
              },
            },
            {
              label: "Themes",
              link: "themes",
              translations: {
                "zh-CN": "主题",
              },
            },
            {
              label: "Donate",
              link: "donate",
              translations: {
                "zh-CN": "捐赠",
              },
            },
          ],
        },

        {
          label: "Develop guides",
          translations: {
            "zh-CN": "开发指南",
          },
          autogenerate: { directory: "develop" },
        },

        {
          label: "Exsied(editor)",
          translations: {
            "zh-CN": "Exsied(编辑器)",
          },
          autogenerate: { directory: "exsied" },
        },

        {
          label: "FAQ",
          badge: "New",
          translations: {
            "zh-CN": "常见问题",
          },
          autogenerate: { directory: "FAQ" },
        },
      ],
      plugins: process.env.CHECK_LINKS
        ? [
            starlightLinksValidator({
              errorOnFallbackPages: false,
              errorOnInconsistentLocale: true,
            }),
          ]
        : [],
    }),
  ],
};

if (siteAndBase.base) conf.base = siteAndBase.base;
if (siteAndBase.site) conf.site = siteAndBase.site;

process.stdout.write(`site:: ${conf.site || ""}\n`);
process.stdout.write(`base:: ${conf.base || ""}\n`);

// https://astro.build/config
export default defineConfig(conf);
