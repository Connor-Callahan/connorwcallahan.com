(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(156),l=t(154);a.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["developer","application","react","javascript"]}),r.a.createElement("div",{className:"contact-container"},r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{className:"info"},r.a.createElement("ul",null,r.a.createElement("p",null,"Email: connorwcallahan@gmail.com"),r.a.createElement("p",null,"Github: ",r.a.createElement("a",{target:"_blank",href:"https://github.com/Connor-Callahan",rel:"noopener noreferrer"},"Connor-Callahan")),r.a.createElement("p",null,"LinkedIn: ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/cwcallahan/",rel:"noopener noreferrer"},"cwcallahan")),r.a.createElement("p",null,"Medium: ",r.a.createElement("a",{target:"_blank",href:"https://github.com/Connor-Callahan",rel:"noopener noreferrer"},"connorwcallahan"))),r.a.createElement("img",{className:"me-icon",alt:"astronaut",src:t(173)})))))}},148:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),o=t(4),l=t.n(o),i=t(33),c=t.n(i);t.d(a,"a",function(){return c.a});t(149);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},149:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},150:function(e,a){e.exports={siteTitle:"Connor Callahan",siteTitleShort:"Connor Callahan",siteTitleAlt:"Connor Callahan",siteLogo:"/images/icon-mac.png",siteUrl:"https://www.connorwcallahan.com.com",repo:"https://github.com/Connor-Callahan",pathPrefix:"",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"I am a Full Stack Web Developer who loves building applications and collaborating with teams to solve challenging problems. Please take a minute to browse my projects, check out my blog or say hello! ",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",userName:"Connor",userEmail:"connorwcallahan@gmail.com",userLocation:"Brooklyn, NY",userAvatar:"",userDescription:"Fill it up",themeColor:"#3F80FF",backgroundColor:"#ffffff",navLinks:[{name:"About",link:"/about/"},{name:"Contact",link:"/contact/"}]}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan"}}}}},152:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),o=t(4),l=t.n(o),i=t(55),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=s},153:function(e,a,t){e.exports=t.p+"static/icon-mac-e0146d27f908085f0c384b2ca396312d.png"},154:function(e,a,t){"use strict";var n=t(155),r=t(0),o=t.n(r),l=t(4),i=t.n(l),c=t(164),s=t.n(c);function m(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,i=e.title,c=n.data.site,m=a||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan",description:"Connor Callahan is a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux.",author:"Connor Callahan"}}}}},156:function(e,a,t){"use strict";var n=t(151),r=t(0),o=t.n(r),l=t(4),i=t.n(l),c=t(148),s=(t(157),t(158),t(7)),m=t.n(s),u=t(153),p=t.n(u),d=function(e){function a(){return e.apply(this,arguments)||this}return m()(a,e),a.prototype.render=function(){var e=this.props.navLinks.navLinks;return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-container"},o.a.createElement("div",{className:"icon"},o.a.createElement(c.a,{to:"/"},o.a.createElement("img",{src:p.a,className:"favicon",alt:"icon"})," ",o.a.createElement("span",{className:"text"},"Connor Callahan"))),o.a.createElement("div",{className:"nav-links"},e.map(function(e){return o.a.createElement(c.a,{key:e.name,to:e.link,className:"link",activeClassName:"active"},e.name)}),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@connorwcallahan"},"Blog"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Connor-Callahan"},"GitHub"))))},a}(r.Component);d.propTypes={siteTitle:i.a.string},d.defaultProps={siteTitle:""};var h=d,f=t(150),g=t.n(f),v=(t(159),t(160),t(161),t(162),t(163),function(e){var a=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(h,{navLinks:g.a}),o.a.createElement("main",null,a))},data:n})});v.propTypes={children:i.a.node.isRequired};a.a=v},173:function(e,a,t){e.exports=t.p+"static/me-icon-9bc4b6e0acfe347e87a2ed289f17b56a.png"}}]);
//# sourceMappingURL=component---src-pages-contact-js-2e0d5a70f0df45217bbf.js.map