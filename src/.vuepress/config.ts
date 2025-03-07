import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "StickyAttention",
  description: "一款新作业贴软件 新增了原版没有的新功能",

  theme: hopeTheme({
    plugins: {
      components: {
        // 你想使用的组件
        components: [
          "BiliBili",
        ],
      },
    },
  }),
});
