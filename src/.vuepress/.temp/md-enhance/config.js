import CodeDemo from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
