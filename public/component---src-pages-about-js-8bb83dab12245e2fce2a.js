(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(156),i=a(154),l=a(172),c={p1:"As a lifelong tinkerer I have always been drawn to take apart things and figure out how they work. I love to learn by doing and am always interested in learning something new. Other than coding some of my interests include 3-D printing, playing guitar (or trying to), woodworking, photography, watch-modding....basically anything that involves making or building.",p2:"My journey in code has been remarkable and I am continually blown away by the community and people I meet in this field. Whether you're someone looking to get started on a project with a freelance web developer, a developer seeking to collaborate, or anyone who would like to say hi, send me a message and let's get in touch.",image:a.n(l).a},s=a(0),u=a.n(s),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement(o.a,null,u.a.createElement(i.a,{title:"About"}),u.a.createElement("div",null,u.a.createElement("div",{className:"about"},u.a.createElement("div",{className:"profile"},u.a.createElement("h1",null,"About Me"),u.a.createElement("p",null,c.p1),u.a.createElement("p",null,c.p2)),u.a.createElement("img",{className:"profile-pic",alt:"me",src:c.image}))))},t}(s.Component);t.default=p},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t){e.exports={siteTitle:"Connor Callahan",siteTitleShort:"Connor Callahan",siteTitleAlt:"Connor Callahan",siteLogo:"/images/icon-mac.png",siteUrl:"https://www.connorwcallahan.com.com",repo:"https://github.com/Connor-Callahan",pathPrefix:"",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"I am a Full Stack Web Developer who loves building applications and collaborating with teams to solve challenging problems. Please take a minute to browse my projects, check out my blog or say hello! ",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",userName:"Connor",userEmail:"connorwcallahan@gmail.com",userLocation:"Brooklyn, NY",userAvatar:"",userDescription:"Fill it up",themeColor:"#3F80FF",backgroundColor:"#ffffff",navLinks:[{name:"About",link:"/about/"},{name:"Contact",link:"/contact/"}]}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){e.exports=a.p+"static/icon-mac-e0146d27f908085f0c384b2ca396312d.png"},154:function(e,t,a){"use strict";var n=a(155),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(164),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Connor Callahan",description:"Connor Callahan is a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux.",author:"Connor Callahan"}}}}},156:function(e,t,a){"use strict";var n=a(151),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(148),s=(a(157),a(158),a(7)),u=a.n(s),p=a(153),m=a.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.navLinks.navLinks;return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-container"},o.a.createElement("div",{className:"icon"},o.a.createElement(c.a,{to:"/"},o.a.createElement("img",{src:m.a,className:"favicon",alt:"icon"})," ",o.a.createElement("span",{className:"text"},"Connor Callahan"))),o.a.createElement("div",{className:"nav-links"},e.map(function(e){return o.a.createElement(c.a,{key:e.name,to:e.link,className:"link",activeClassName:"active"},e.name)}),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@connorwcallahan"},"Blog"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Connor-Callahan"},"GitHub"))))},t}(r.Component);d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var h=d,g=a(150),f=a.n(g),y=(a(159),a(160),a(161),a(162),a(163),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(h,{navLinks:f.a}),o.a.createElement("main",null,t))},data:n})});y.propTypes={children:l.a.node.isRequired};t.a=y},172:function(e,t,a){e.exports=a.p+"static/profile-365ecf411c4fa4cf42381574319b5cd5.jpeg"}}]);
//# sourceMappingURL=component---src-pages-about-js-8bb83dab12245e2fce2a.js.map