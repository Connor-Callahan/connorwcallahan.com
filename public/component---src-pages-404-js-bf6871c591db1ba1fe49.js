(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(158),i=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},150:function(e,t){e.exports={siteTitle:"Connor Callahan",siteTitleShort:"Connor Callahan",siteTitleAlt:"Connor Callahan",siteLogo:"/images/icon-mac.png",siteUrl:"https://www.connorwcallahan.com.com",repo:"https://github.com/Connor-Callahan",pathPrefix:"",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"I am a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux. I love to building things and helping people.",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",userName:"Connor",userEmail:"connorwcallahan@gmail.com",userLocation:"Brooklyn, NY",userAvatar:"",userDescription:"Fill it up",themeColor:"#3F80FF",backgroundColor:"#ffffff",navLinks:[{name:"About",link:"/about/"},{name:"Contact",link:"/contact/"}]}},151:function(e,t,a){"use strict";var n=a(155),r={description:"I’m interested in leading creative, multidisciplinary engineering teams. Whether you're someone looking to get started on a project with a freelance web developer, a developer seeking to collaborate, or anyone who would like to say hi, send me a message and let's get in touch.",image:a.n(n).a};t.a=r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){e.exports=a.p+"static/icon-mac-e0146d27f908085f0c384b2ca396312d.png"},155:function(e,t,a){e.exports=a.p+"static/profile-365ecf411c4fa4cf42381574319b5cd5.jpeg"},156:function(e,t,a){"use strict";var n=a(157),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(166),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan",description:"Connor Callahan is a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux.",author:"Connor Callahan"}}}}},158:function(e,t,a){"use strict";var n=a(152),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(148),s=(a(159),a(160),a(7)),u=a.n(s),p=a(154),d=a.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.navLinks.navLinks;return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-container"},o.a.createElement("div",{className:"icon"},o.a.createElement(l.a,{to:"/"},o.a.createElement("img",{src:d.a,className:"favicon"})," ",o.a.createElement("span",{className:"text"},"Connor Callahan"))),o.a.createElement("div",{className:"nav-links"},e.map(function(e){return o.a.createElement(l.a,{key:e.name,to:e.link,className:"link",activeClassName:"active"},e.name)}),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@connorwcallahan"},"Blog"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Connor-Callahan"},"GitHub"))))},t}(r.Component);m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var f=m,h=a(150),g=a.n(h),v=(a(151),a(161),a(162),a(163),a(164),a(165),function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(f,{navLinks:g.a}),o.a.createElement("main",null,t))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-bf6871c591db1ba1fe49.js.map