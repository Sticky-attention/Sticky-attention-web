import { CodeTabs } from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
