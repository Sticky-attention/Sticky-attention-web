import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
