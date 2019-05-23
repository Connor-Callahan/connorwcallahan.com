(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=(t(148),t(158)),i=t(156);a.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["developer","application","react","javascript"]}),r.a.createElement("div",{className:"contact-container"},r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{className:"info"},r.a.createElement("ul",null,r.a.createElement("p",null,"Email: connorwcallahan@gmail.com"),r.a.createElement("p",null,"Github: ",r.a.createElement("a",{target:"_blank",href:"https://github.com/Connor-Callahan"},"Connor-Callahan")),r.a.createElement("p",null,"LinkedIn: ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/cwcallahan/"},"cwcallahan")),r.a.createElement("p",null,"Medium: ",r.a.createElement("a",{target:"_blank",href:"https://github.com/Connor-Callahan"},"connorwcallahan"))),r.a.createElement("img",{className:"me-icon",src:t(174)})))))}},148:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(33),c=t.n(l);t.d(a,"a",function(){return c.a});t(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},150:function(e,a){e.exports={siteTitle:"Connor Callahan",siteTitleShort:"Connor Callahan",siteTitleAlt:"Connor Callahan",siteLogo:"/images/icon-mac.png",siteUrl:"https://www.connorwcallahan.com.com",repo:"https://github.com/Connor-Callahan",pathPrefix:"",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"I am a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux. I love to building things and helping people.",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",userName:"Connor",userEmail:"connorwcallahan@gmail.com",userLocation:"Brooklyn, NY",userAvatar:"",userDescription:"Fill it up",themeColor:"#3F80FF",backgroundColor:"#ffffff",navLinks:[{name:"About",link:"/about/"},{name:"Contact",link:"/contact/"}]}},151:function(e,a,t){"use strict";var n=t(155),r={description:"I’m interested in leading creative, multidisciplinary engineering teams. Whether you're someone looking to get started on a project with a freelance web developer, a developer seeking to collaborate, or anyone who would like to say hi, send me a message and let's get in touch.",image:t.n(n).a};a.a=r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(55),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},154:function(e,a,t){e.exports=t.p+"static/icon-mac-e0146d27f908085f0c384b2ca396312d.png"},155:function(e,a,t){e.exports=t.p+"static/profile-365ecf411c4fa4cf42381574319b5cd5.jpeg"},156:function(e,a,t){"use strict";var n=t(157),r=t(0),o=t.n(r),i=t(4),l=t.n(i),c=t(166),s=t.n(c);function u(e){var a=e.description,t=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=a||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},a.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan",description:"Connor Callahan is a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux.",author:"Connor Callahan"}}}}},158:function(e,a,t){"use strict";var n=t(152),r=t(0),o=t.n(r),i=t(4),l=t.n(i),c=t(148),s=(t(159),t(160),t(7)),u=t.n(s),m=t(154),p=t.n(m),d=function(e){function a(){return e.apply(this,arguments)||this}return u()(a,e),a.prototype.render=function(){var e=this.props.navLinks.navLinks;return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-container"},o.a.createElement("div",{className:"icon"},o.a.createElement(c.a,{to:"/"},o.a.createElement("img",{src:p.a,className:"favicon"})," ",o.a.createElement("span",{className:"text"},"Connor Callahan"))),o.a.createElement("div",{className:"nav-links"},e.map(function(e){return o.a.createElement(c.a,{key:e.name,to:e.link,className:"link",activeClassName:"active"},e.name)}),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@connorwcallahan"},"Blog"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Connor-Callahan"},"GitHub"))))},a}(r.Component);d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var h=d,f=t(150),g=t.n(f),v=(t(151),t(161),t(162),t(163),t(164),t(165),function(e){var a=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(h,{navLinks:g.a}),o.a.createElement("main",null,a))},data:n})});v.propTypes={children:l.a.node.isRequired};a.a=v},174:function(e,a,t){e.exports=t.p+"static/me-icon-9bc4b6e0acfe347e87a2ed289f17b56a.png"}}]);
//# sourceMappingURL=component---src-pages-contact-js-cca9fd200f8b7708e3e3.js.map