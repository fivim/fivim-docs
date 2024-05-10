import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export const locales = {
  root: { label: "English", lang: "en" },
  "zh-cn": { label: "简体中文", lang: "zh-CN" },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Enassi Docs",
      logo: {
        light: "./public/logo.png",
        dark: "./public/logo.png",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/withastro/starlight/edit/main/docs/",
      },
      social: {
        github: "https://github.com/enassi/enassi",
      },
      // head: [
      //   {
      //     tag: "script",
      //     attrs: {
      //       src: "https://cdn.usefathom.com/script.js",
      //       "data-site": "EZBHTSIG",
      //       defer: true,
      //     },
      //   },
      //   {
      //     tag: "meta",
      //     attrs: { property: "og:image", content: site + "og.jpg?v=1" },
      //   },
      //   {
      //     tag: "meta",
      //     attrs: { property: "twitter:image", content: site + "og.jpg?v=1" },
      //   },
      // ],
      customCss: process.env.NO_GRADIENTS ? [] : ["./src/styles/custom.css"],

      locales,
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
              label: "Sync",
              link: "sync",
              translations: {
                "zh-CN": "同步",
              },
            },
            {
              label: "Themes",
              link: "themes",
              translations: {
                "zh-CN": "主题",
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
          label: "FAQ",
          badge: "New",
          translations: {
            "zh-CN": "常见问题",
          },
          autogenerate: { directory: "FAQ" },
        },
      ],
    }),
  ],
});
