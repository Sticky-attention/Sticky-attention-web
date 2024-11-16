import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "使用教程",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
