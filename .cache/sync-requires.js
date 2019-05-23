const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/about.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/articles.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/connorcallahan/Desktop/projects-2019/connorwcallahan.com/src/pages/index.js")))
}

