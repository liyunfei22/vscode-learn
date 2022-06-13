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
          { text: "用户界面", link: "/UserInterface" },
          { text: "主题", link: "/Themes" },
          { text: "setting", link: "/Settings" },
          { text: "快捷键", link: "/KeyBindings" },
          { text: "语言", link: "/DisplayLanguage" },
          { text: "Telemetry", link: "/Telemetry" },
        ],
      },
      {
        text: "用户指南",
        items: [
          { text: "基本编辑", link: "/BasicEditing" },
          { text: "扩展市场", link: "/ExtensionMarketplace" },
          { text: "智能提示", link: "/IntelliSense" },
          { text: "代码导航", link: "/CodeNavigation" },
          { text: "重构", link: "/Refactoring" },
          { text: "Debugging", link: "/Debugging" },
          { text: "版本控制", link: "/VersionControl" },
          { text: "集成终端", link: "/IntegratedTerminal" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/liyunfei22/vscode-learn" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present liyf",
    },
    lastUpdatedText: "Last Updated",
  },
});
