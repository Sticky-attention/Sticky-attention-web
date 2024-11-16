export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/downloads/", { loader: () => import(/* webpackChunkName: "downloads_index.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/downloads/index.html.js"), meta: {"t":"获取","i":"download"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"使用教程","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/OneDrive/文档/Codes/Sticky-attention-web/Sticky-attention-web/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
