// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-articles-js": () => import("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/articles.js" /* webpackChunkName: "component---src-pages-articles-js" */),
  "component---src-pages-contact-js": () => import("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/.cache/data.json")

