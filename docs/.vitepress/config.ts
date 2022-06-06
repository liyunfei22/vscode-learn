import {
  defineConfig
} from 'vitepress'

export default defineConfig({
  title: "vsCode",
  description: "vsCode 文档",
  base: "/vscode-learn/",
  lang: "en-US",
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: "start", link: "/1.getStarted" }],
    sidebar: [
      {
        text: "开始",
        items: [
          { text: "介绍", link: "/1.getStarted" },
          { text: "集成", link: "/getting-started" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "/github" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present liyf",
    },
    lastUpdatedText: "Last Updated",
  },
});
