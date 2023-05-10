/*! For license information please see 00a710cfb91f57c344b6cc21d7516b882cbefdf4-c9770a997295496965a8.js.LICENSE.txt */
(self.webpackChunkaero_team_eindhoven=self.webpackChunkaero_team_eindhoven||[]).push([[407],{4184:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)){if(l.length){var u=r.apply(null,l);u&&e.push(u)}}else if("object"===a){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var o in l)n.call(l,o)&&l[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},59:function(e,t,l){"use strict";l.d(t,{Q:function(){return a}});var n=l(1883),r=l(7294);function a(e){const t=(0,n.useStaticQuery)("20006346");return r.createElement(r.Fragment,null,r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),r.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#002878"}),r.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),r.createElement("meta",{name:"description",content:e.description||t.site.siteMetadata.description}),r.createElement("meta",{name:"msapplication-TileColor",content:"#002878"}),r.createElement("meta",{name:"theme-color",content:"#ffffff"}),e.title?r.createElement("title",null,e.title," | ",t.site.siteMetadata.title):r.createElement("title",null,t.site.siteMetadata.title))}},8541:function(e,t,l){"use strict";l.d(t,{Z:function(){return w}});var n=l(7294),r="header-module--header--e3723",a=l(2553),u=l(5785),o=l(1883),i=l(9210),s=l.n(i),d=l(6826),f=l.n(d),c=l(4184),m=l.n(c);var p=()=>n.createElement("nav",{className:"FullsizeNav"},n.createElement(o.Link,{to:"/"},n.createElement(s(),{className:"logo"})),n.createElement("ul",{className:"navList"},x.map((e=>n.createElement("li",{key:e.link,className:"listItem"},n.createElement(o.Link,{to:e.link,className:m()("nav",{disabled:e.disabled})},e.label))))));const x=[{label:"About Us",link:"/about-us",disabled:!0},{label:"Project",link:"/project"},{label:"Team",link:"/team"},{label:"Our Journey",link:"/journey",disabled:!0},{label:"Partners",link:"/partners"},{label:"Join",link:"/join"},{label:"Contact",link:"/contact"}];var b=()=>{const[e,t]=n.useState(!1),l=[{label:"Home",link:"/"}].concat((0,u.Z)(x));return n.createElement("nav",{className:"CompactNav"},n.createElement(o.Link,{to:"/"},n.createElement(s(),{className:"main-logo"})),n.createElement("div",null,n.createElement(f(),{className:"hamburger-icon",onClick:()=>{t(!0)}})),n.createElement("div",{className:m()("overlay-menu",{opened:e}),onClick:()=>{t(!1)}},n.createElement("ul",null,l.map((e=>n.createElement("li",{key:e.link,className:"menu-item"},n.createElement(o.Link,{to:e.link,className:m()("nav",{disabled:e.disabled})},e.label)))))))};function y(e){let{children:t}=e;return n.createElement("div",{className:"HeaderMain"},n.createElement(a.W2,null,n.createElement("header",{className:r},n.createElement(a.zv,{xs:!0,sm:!0,md:!0},n.createElement(b,null)),n.createElement(a.zv,{lg:!0,xl:!0,xxl:!0,xxxl:!0},n.createElement(p,null)))),t&&n.createElement("div",{className:"post-header"},t))}var h="footer-module--mail-link--d77ae",v="footer-module--sitefooter--95e8e";function g(){return n.createElement("footer",{className:v},n.createElement(a.W2,null,n.createElement(a.X2,null,n.createElement(a.JX,{md:12,lg:4},n.createElement("h2",null,"Aero Team Eindhoven"),n.createElement("p",null,n.createElement("a",{className:h,href:"mailto:info@aeroteameindhoven.nl"},"info@aeroteameindhoven.nl"))),n.createElement(a.JX,{md:12,lg:4},n.createElement("h2",null,"Visiting address"),n.createElement("div",null,"Horsten 8"),n.createElement("div",null,"5612 AX Eindhoven"),n.createElement("div",null,"The Netherlands"),n.createElement("p",null,"TU/e campus")),n.createElement(a.JX,{md:12,lg:4},n.createElement("h2",null,"Social Media"),n.createElement("div",null,n.createElement("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/company/aeroteamehv"},"LinkedIn")),n.createElement("div",null,n.createElement("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/aeroteamehv/"},"Instagram")),n.createElement("div",null,n.createElement("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://twitter.com/AeroTeamEhv"},"Twitter")),n.createElement("div",null,n.createElement("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/AeroTeamEindhoven"},"Facebook")),n.createElement("div",null,n.createElement("a",{className:h,target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UC48Rt9YAXZIi9RsOdSUUcFQ"},"Youtube"))))))}var E="layout-module--content--34f64",O="layout-module--layout-wrapper--ea635";function w(e){return n.createElement("div",{className:O},n.createElement("div",{className:m()("blue-gradient-bg",{fullHeight:e.fullScreenHeader})},n.createElement(y,null,e.postHeader)),n.createElement("main",{className:E},e.children),n.createElement(g,null))}},444:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setConfiguration=t.getConfiguration=void 0;let l={breakpoints:[576,768,992,1200,1600,1920],containerWidths:[540,750,960,1140,1540,1810],gutterWidth:30,gridColumns:12,defaultScreenClass:"xxl",maxScreenClass:"xxl"};t.getConfiguration=()=>l;t.setConfiguration=e=>{l={...l,...e}}},868:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ScreenClassContext=t.NO_PROVIDER_FLAG=void 0;var n,r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(7294)),a=(n=l(5697))&&n.__esModule?n:{default:n},u=l(1369),o=l(444),i=l(7427);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}const d="NO_PROVIDER_FLAG";t.NO_PROVIDER_FLAG=d;const f=r.default.createContext(d);t.ScreenClassContext=f;const c=e=>{let{useOwnWidth:t,children:l,fallbackScreenClass:n}=e;const a=(0,r.useRef)(),[s,d]=(0,r.useState)(!1),c=(0,u.useScreenClass)(a,n),{defaultScreenClass:m}=(0,o.getConfiguration)(),p=s?c:n||m;return(0,r.useEffect)((()=>d(!0)),[]),r.default.createElement(f.Provider,{value:p},t?r.default.createElement(i.Div,{ref:t?a:null},l):r.default.createElement(r.default.Fragment,null,l))};c.propTypes={children:a.default.node.isRequired,useOwnWidth:a.default.bool,fallbackScreenClass:a.default.oneOf([null,"xs","sm","md","lg","xl","xxl","xxxl"])},c.defaultProps={useOwnWidth:!1,fallbackScreenClass:null};var m=c;t.default=m},5443:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(7294)),r=o(l(5697)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=u(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(868));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(u=function(e){return e?l:t})(e)}function o(e){return e&&e.__esModule?e:{default:e}}const i=e=>{let{children:t}=e;return n.default.createElement(a.ScreenClassContext.Consumer,null,(e=>e===a.NO_PROVIDER_FLAG?n.default.createElement(a.default,null,n.default.createElement(a.ScreenClassContext.Consumer,null,(e=>t(e)))):t(e)))};i.propTypes={children:r.default.func.isRequired};var s=i;t.default=s},9098:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(7294)),r=d(l(5697)),a=d(l(4035)),u=l(444),o=l(9815),i=d(l(5443)),s=l(7427);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}const c=n.default.forwardRef(((e,t)=>{let{children:l,xs:r,sm:s,md:d,lg:f,xl:c,xxl:m,xxxl:p,offset:x,pull:b,push:y,order:h,debug:v,style:g,component:E,width:O,...w}=e;return n.default.createElement(i.default,null,(e=>n.default.createElement(o.GutterWidthContext.Consumer,null,(o=>{const i=(0,a.default)({forceWidth:O,width:{xs:r,sm:s,md:d,lg:f,xl:c,xxl:m,xxxl:p},offset:x,pull:b,push:y,order:h,debug:v,screenClass:e,gutterWidth:o,gridColumns:(0,u.getConfiguration)().gridColumns,moreStyle:g});return(0,n.createElement)(E,{ref:t,style:i,...w,children:l})}))))}));c.propTypes={children:r.default.node,xs:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),sm:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),md:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),lg:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),xl:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),xxl:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),xxxl:r.default.oneOfType([r.default.number,r.default.oneOf(["content"])]),width:r.default.oneOfType([r.default.number,r.default.string]),offset:r.default.shape({xs:r.default.number,sm:r.default.number,md:r.default.number,lg:r.default.number,xl:r.default.number,xxl:r.default.number,xxxl:r.default.number}),push:r.default.shape({xs:r.default.number,sm:r.default.number,md:r.default.number,lg:r.default.number,xl:r.default.number,xxl:r.default.number,xxxl:r.default.number}),pull:r.default.shape({xs:r.default.number,sm:r.default.number,md:r.default.number,lg:r.default.number,xl:r.default.number,xxl:r.default.number,xxxl:r.default.number}),order:r.default.shape({xs:r.default.number,sm:r.default.number,md:r.default.number,lg:r.default.number,xl:r.default.number,xxl:r.default.number,xxxl:r.default.number}),style:r.default.objectOf(r.default.oneOfType([r.default.number,r.default.string])),debug:r.default.bool,component:r.default.elementType},c.defaultProps={children:null,xs:null,sm:null,md:null,lg:null,xl:null,xxl:null,xxxl:null,width:null,offset:{},push:{},pull:{},style:{},order:{},debug:!1,component:s.Div},c.displayName="Col";var m=c;t.default=m},4035:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(1369);const r=(e,t)=>{if("number"!=typeof e)return;return 100/t*Math.max(0,Math.min(t,e))+"%"};t.default=e=>{let{forceWidth:t=null,width:l={},offset:a={},pull:u={},push:o={},order:i={},debug:s,screenClass:d,gutterWidth:f,moreStyle:c,gridColumns:m}=e;const p={boxSizing:"border-box",minHeight:1,position:"relative",paddingLeft:f/2,paddingRight:f/2,width:"100%"};var x;return s&&(p.outline="1px solid silver",p.background="rgba(0,0,0,.05)",p.lineHeight="32px"),p.flexBasis="100%",p.flexGrow=0,p.flexShrink=0,p.maxWidth="100%",p.marginLeft="0%",p.right="auto",p.left="auto",n.screenClasses.forEach(((e,t)=>{if(n.screenClasses.indexOf(d)>=t){const t=r(l[e],m),n="content"===l[e];p.flexBasis=n?"auto":t||p.flexBasis,p.width=p.flexBasis,p.maxWidth=t||p.maxWidth,p.marginLeft=r(a[e],m)||p.marginLeft,p.right=r(u[e],m)||p.right,p.left=r(o[e],m)||p.left,i[e]&&(p.order=i[e])}})),x=l,Object.keys(x).reduce(((e,t)=>e||x[t]),!1)||(p.flexBasis=0,p.flexGrow=1),t&&(p.flexBasis="unset",p.flexGrow="unset",p.flexShrink="unset",p.width=t),{...p,...c}}},1003:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=d(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(7294)),r=s(l(5697)),a=s(l(2675)),u=l(444),o=s(l(5443)),i=l(7427);function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(d=function(e){return e?l:t})(e)}const f=n.default.forwardRef(((e,t)=>{let{children:l,fluid:r,xs:i,sm:s,md:d,lg:f,xl:c,xxl:m,xxxl:p,style:x,component:b,...y}=e;return n.default.createElement(o.default,null,(e=>(0,n.createElement)(b,{ref:t,style:(0,a.default)({fluid:r,xs:i,sm:s,md:d,lg:f,xl:c,xxl:m,xxxl:p,screenClass:e,containerWidths:(0,u.getConfiguration)().containerWidths,gutterWidth:(0,u.getConfiguration)().gutterWidth,moreStyle:x}),...y},l)))}));f.propTypes={children:r.default.node.isRequired,fluid:r.default.bool,xs:r.default.bool,sm:r.default.bool,md:r.default.bool,lg:r.default.bool,xl:r.default.bool,xxl:r.default.bool,xxxl:r.default.bool,style:r.default.objectOf(r.default.oneOfType([r.default.number,r.default.string])),component:r.default.elementType},f.defaultProps={fluid:!1,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1,style:{},component:i.Div},f.displayName="Container";var c=f;t.default=c},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{let{fluid:t,xs:l,sm:n,md:r,lg:a,xl:u,xxl:o,xxxl:i,screenClass:s,containerWidths:d,gutterWidth:f,moreStyle:c}=e;const m={boxSizing:"border-box",position:"relative",marginLeft:"auto",marginRight:"auto",paddingLeft:f/2,paddingRight:f/2};return!t||l||n||r||a||u?("xs"===s&&d[0]&&!l&&(m.maxWidth=d[0]),"sm"===s&&d[0]&&!n&&(m.maxWidth=d[0]),"md"===s&&d[1]&&!r&&(m.maxWidth=d[1]),"lg"===s&&d[2]&&!a&&(m.maxWidth=d[2]),"xl"===s&&d[3]&&!u&&(m.maxWidth=d[3]),"xxl"===s&&d[4]&&!o&&(m.maxWidth=d[4]),"xxxl"===s&&d[5]&&!i&&(m.maxWidth=d[5]),{...m,...c}):{...m,...c}}},9815:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GutterWidthContext=void 0;var n=i(l(7294)),r=i(l(5697)),a=l(444),u=i(l(4575)),o=l(7427);function i(e){return e&&e.__esModule?e:{default:e}}const s=n.default.createContext(!1);t.GutterWidthContext=s;const d=n.default.forwardRef(((e,t)=>{let{children:l,style:r,align:o,justify:i,wrap:d,debug:f,nogutter:c,gutterWidth:m,component:p,direction:x,...b}=e,y=(0,a.getConfiguration)().gutterWidth;c&&(y=0),"number"==typeof m&&(y=m);const h=(0,u.default)({gutterWidth:y,align:o,justify:i,debug:f,moreStyle:r,direction:x,wrap:d});return n.default.createElement(p,{ref:t,style:h,...b},n.default.createElement(s.Provider,{value:y},l))}));d.propTypes={children:r.default.node.isRequired,align:r.default.oneOf(["normal","start","center","end","stretch"]),justify:r.default.oneOf(["start","center","end","between","around","initial","inherit"]),direction:r.default.oneOf(["column","row","column-reverse","row-reverse"]),wrap:r.default.oneOf(["nowrap","wrap","reverse"]),nogutter:r.default.bool,gutterWidth:r.default.number,style:r.default.objectOf(r.default.oneOfType([r.default.number,r.default.string])),debug:r.default.bool,component:r.default.elementType},d.defaultProps={align:"normal",justify:"start",direction:"row",wrap:"wrap",nogutter:!1,gutterWidth:null,style:{},debug:!1,component:o.Div},d.displayName="Row";var f=d;t.default=f},4575:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{let{gutterWidth:t,align:l,justify:n,debug:r,moreStyle:a,direction:u,wrap:o}=e,i=l;"start"===l&&(i="flex-start"),"end"===l&&(i="flex-end");let s=n;"start"===n&&(s="flex-start"),"end"===n&&(s="flex-end"),"between"===n&&(s="space-between"),"around"===n&&(s="space-around"),"center"===n&&(s="center"),"initial"===n&&(s="initial"),"inherit"===n&&(s="inherit");let d=o;"nowrap"===o&&(d="nowrap"),"wrap"===o&&(d="wrap"),"reverse"===o&&(d="wrap-reverse");const f={marginLeft:-t/2,marginRight:-t/2,display:"flex",flexGrow:0,flexShrink:0,alignItems:i,justifyContent:s,flexDirection:["column","row","column-reverse","row-reverse"].includes(u)?u:void 0,flexWrap:d};return r&&(f.background="rgba(128,128,128,.05)"),{...f,...a}}},2553:function(e,t,l){"use strict";Object.defineProperty(t,"JX",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"W2",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"_G",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"zv",{enumerable:!0,get:function(){return o.default}});var n=m(l(9098)),r=m(l(1003)),a=m(l(9815)),u=m(l(2033)),o=m(l(5935)),i=m(l(6550)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(868)),d=l(444),f=l(1369);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}},1789:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="div"},2102:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="span"},6899:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l="undefined"!=typeof window?window:void 0;t.default=l},7427:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Div",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Span",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Window",{enumerable:!0,get:function(){return a.default}});var n=u(l(1789)),r=u(l(2102)),a=u(l(6899));function u(e){return e&&e.__esModule?e:{default:e}}},2033:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(7294)),r=i(l(5697)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=o(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(6304)),u=i(l(5443));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(o=function(e){return e?l:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}const s=e=>{let{children:t,xs:l,sm:r,md:o,lg:i,xl:s,xxl:d,xxxl:f}=e;return n.default.createElement(u.default,null,(e=>a.hidden({screenClass:e,xs:l,sm:r,md:o,lg:i,xl:s,xxl:d,xxxl:f})?null:t))};s.propTypes={children:r.default.node.isRequired,xs:r.default.bool,sm:r.default.bool,md:r.default.bool,lg:r.default.bool,xl:r.default.bool,xxl:r.default.bool,xxxl:r.default.bool},s.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1};var d=s;t.default=d},6304:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hidden=t.default=void 0;const l=e=>{let{screenClass:t,xs:l,sm:n,md:r,lg:a,xl:u,xxl:o,xxxl:i}=e;return"xxl"===t?o:"xxxl"===t?i:"xl"===t?u:"lg"===t?a:"md"===t?r:"sm"===t?n:l};t.hidden=l;var n=l;t.default=n},6550:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(7294)),r=u(l(5697)),a=u(l(5443));function u(e){return e&&e.__esModule?e:{default:e}}const o=e=>{let{render:t}=e;return n.default.createElement(a.default,null,(e=>t(e)))};o.propTypes={render:r.default.func.isRequired};var i=o;t.default=i},5935:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(7294)),r=i(l(5697)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var l=o(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,l&&l.set(e,n);return n}(l(4561)),u=i(l(5443));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(o=function(e){return e?l:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}const s=e=>{let{children:t,xs:l,sm:r,md:o,lg:i,xl:s,xxl:d,xxxl:f}=e;return n.default.createElement(u.default,null,(e=>a.visible({screenClass:e,xs:l,sm:r,md:o,lg:i,xl:s,xxl:d,xxxl:f})?t:null))};s.propTypes={children:r.default.node.isRequired,xs:r.default.bool,sm:r.default.bool,md:r.default.bool,lg:r.default.bool,xl:r.default.bool,xxl:r.default.bool,xxxl:r.default.bool},s.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1};var d=s;t.default=d},4561:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.visible=t.default=void 0;const l=e=>{let{screenClass:t,xs:l,sm:n,md:r,lg:a,xl:u,xxl:o,xxxl:i}=e;return"xxl"===t?o:"xxxl"===t?i:"xl"===t?u:"lg"===t?a:"md"===t?r:"sm"===t?n:l};t.visible=l;var n=l;t.default=n},1369:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScreenClass=t.screenClasses=void 0;var n=l(7294),r=l(444),a=l(7427);const u=["xs","sm","md","lg","xl","xxl","xxxl"];t.screenClasses=u;t.useScreenClass=(e,t)=>{const l=()=>{const{breakpoints:l,defaultScreenClass:n,maxScreenClass:o}=(0,r.getConfiguration)();let i=n;const s=(e=>e&&e.current&&e.current.clientWidth?e.current.clientWidth:void 0!==a.Window&&a.Window.innerWidth?a.Window.innerWidth:null)(e);s?(i="xs",l[0]&&s>=l[0]&&(i="sm"),l[1]&&s>=l[1]&&(i="md"),l[2]&&s>=l[2]&&(i="lg"),l[3]&&s>=l[3]&&(i="xl"),l[4]&&s>=l[4]&&(i="xxl"),l[5]&&s>=l[5]&&(i="xxxl")):t&&(i=t);const d=u.indexOf(i),f=u.indexOf(o);return f>=0&&d>f&&(i=u[f]),i},[o,i]=(0,n.useState)((()=>l()));return(0,n.useEffect)((()=>{const e=()=>i(l());return a.Window.addEventListener("resize",e,!1),()=>{a.Window.removeEventListener("resize",e,!1)}}),[]),o}},6826:function(e,t,l){var n=l(7294);function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".d{fill:#e2231a;}")),n.createElement("g",{id:"a",key:1}),n.createElement("g",{id:"b",key:2},n.createElement("g",{id:"c"},n.createElement("g",null,[n.createElement("polygon",{className:"d",points:"0 11.32 0 28.31 22.9 16.98 34.36 28.3 57.26 16.98 68.71 28.3 91.62 16.98 91.62 0 68.71 11.32 57.26 0 34.36 11.32 22.9 0 0 11.32 0 11.32 0 11.32",key:0}),n.createElement("polygon",{className:"d",points:"0 45.29 0 62.27 22.9 50.95 34.36 62.27 57.26 50.95 68.71 62.27 91.62 50.95 91.62 33.97 68.71 45.29 57.26 33.97 34.36 45.29 22.9 33.97 0 45.29 0 45.29 0 45.29",key:1}),n.createElement("polygon",{className:"d",points:"0 79.26 0 96.24 22.9 84.92 34.36 96.24 57.26 84.92 68.71 96.24 91.62 84.92 91.62 67.94 68.71 79.26 57.26 67.94 34.36 79.26 22.9 67.94 0 79.26 0 79.26 0 79.26",key:2})])))])}r.defaultProps={viewBox:"0 0 91.62 96.24"},e.exports=r,r.default=r},9210:function(e,t,l){var n=l(7294);function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#ff6464;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"Layer_4","data-name":"Layer 4"},[n.createElement("path",{className:"cls-1",d:"M233.14,55.39V31.67h-8V28.35h20v3.32h-7.95V55.39Z",key:0}),n.createElement("path",{className:"cls-1",d:"M254.23,55.85a9.86,9.86,0,0,1-5-1.26,8.87,8.87,0,0,1-3.41-3.49,10.55,10.55,0,0,1-1.24-5.22,11.1,11.1,0,0,1,1.22-5.29,8.81,8.81,0,0,1,3.4-3.55,9.84,9.84,0,0,1,5.07-1.28A9.32,9.32,0,0,1,259.17,37a8.87,8.87,0,0,1,3.24,3.34,9.22,9.22,0,0,1,1.16,4.6c0,.25,0,.53,0,.83s0,.62-.05,1H248.59A5.92,5.92,0,0,0,250.42,51a5.57,5.57,0,0,0,3.81,1.45,5.08,5.08,0,0,0,2.91-.79,4.78,4.78,0,0,0,1.76-2.15H263A8.59,8.59,0,0,1,259.92,54,8.9,8.9,0,0,1,254.23,55.85Zm0-16.72a5.77,5.77,0,0,0-3.63,1.21A5.35,5.35,0,0,0,248.66,44h10.82a4.92,4.92,0,0,0-1.58-3.55A5.29,5.29,0,0,0,254.23,39.13Z",key:1}),n.createElement("path",{className:"cls-1",d:"M273.85,55.85a8.75,8.75,0,0,1-4-.81,5.51,5.51,0,0,1-2.36-2.15,5.63,5.63,0,0,1-.77-2.91,5.2,5.2,0,0,1,2.16-4.4A10.08,10.08,0,0,1,275.05,44h5v-.34a4.3,4.3,0,0,0-1.22-3.36,4.44,4.44,0,0,0-3.14-1.12,5.19,5.19,0,0,0-3,.83,3.45,3.45,0,0,0-1.52,2.45h-4.1a6.44,6.44,0,0,1,1.41-3.57,7.71,7.71,0,0,1,3.09-2.28,10.42,10.42,0,0,1,4.11-.8A8.64,8.64,0,0,1,282,37.87a7.54,7.54,0,0,1,2.2,5.74V55.39h-3.55l-.35-3.29a7.23,7.23,0,0,1-2.35,2.67A6.94,6.94,0,0,1,273.85,55.85Zm.81-3.32a4.84,4.84,0,0,0,2.8-.79,5.32,5.32,0,0,0,1.78-2.11,8.24,8.24,0,0,0,.79-2.9h-4.56a5.48,5.48,0,0,0-3.45.85,2.65,2.65,0,0,0-1,2.13,2.45,2.45,0,0,0,1,2.06A4.27,4.27,0,0,0,274.66,52.53Z",key:2}),n.createElement("path",{className:"cls-1",d:"M289,55.39V36.23h3.63l.35,2.7a6.76,6.76,0,0,1,2.46-2.32,7.17,7.17,0,0,1,3.53-.85q4.56,0,6.33,3.6a7.53,7.53,0,0,1,2.8-2.63,7.85,7.85,0,0,1,3.81-1,7.42,7.42,0,0,1,5.64,2.17q2,2.16,2,6.45v11H315.5V44.8q0-5.56-4.25-5.56a4.41,4.41,0,0,0-3.53,1.62,7,7,0,0,0-1.37,4.64v9.89h-4.1V44.8q0-5.56-4.28-5.56a4.38,4.38,0,0,0-3.5,1.62,7,7,0,0,0-1.37,4.64v9.89Z",key:3}),n.createElement("path",{className:"cls-1",d:"M334.27,55.39v-27h17.19v3.32H338.37v8.42H350.3v3.25H338.37v8.72h13.09v3.33Z",key:4}),n.createElement("path",{className:"cls-1",d:"M357.79,32.6a2.65,2.65,0,0,1-1.91-.72,2.36,2.36,0,0,1-.75-1.79,2.39,2.39,0,0,1,.75-1.8,2.92,2.92,0,0,1,3.82,0,2.4,2.4,0,0,1,.76,1.8,2.36,2.36,0,0,1-.76,1.79A2.65,2.65,0,0,1,357.79,32.6Zm-2.05,22.79V36.23h4.1V55.39Z",key:5}),n.createElement("path",{className:"cls-1",d:"M365,55.39V36.23h3.63l.31,3.36a6.59,6.59,0,0,1,2.61-2.8,7.59,7.59,0,0,1,4-1A7.06,7.06,0,0,1,381,37.93q2,2.16,2,6.45v11h-4V44.8q0-5.56-4.56-5.56a4.9,4.9,0,0,0-3.77,1.62,6.63,6.63,0,0,0-1.48,4.64v9.89Z",key:6}),n.createElement("path",{className:"cls-1",d:"M396.36,55.85a9,9,0,0,1-8.23-4.91,11.8,11.8,0,0,1,0-10.33,9.06,9.06,0,0,1,3.34-3.55,9.4,9.4,0,0,1,4.93-1.3,8.64,8.64,0,0,1,4,.89,6.62,6.62,0,0,1,2.68,2.51V27.58h4.1V55.39h-3.67l-.43-3a8.94,8.94,0,0,1-2.55,2.4A7.62,7.62,0,0,1,396.36,55.85Zm.73-3.55a5.6,5.6,0,0,0,4.31-1.82,6.61,6.61,0,0,0,1.68-4.67,6.62,6.62,0,0,0-1.68-4.7,6.1,6.1,0,0,0-8.63,0,6.59,6.59,0,0,0-1.7,4.7,7.17,7.17,0,0,0,.77,3.36A5.72,5.72,0,0,0,394,51.46,5.81,5.81,0,0,0,397.09,52.3Z",key:7}),n.createElement("path",{className:"cls-1",d:"M412.23,55.39V27.58h4.1V39.32A6.8,6.8,0,0,1,419,36.71a7.8,7.8,0,0,1,3.81-1,6.94,6.94,0,0,1,5.4,2.17c1.32,1.44,2,3.59,2,6.45v11h-4.05V44.8q0-5.56-4.44-5.56a5.07,5.07,0,0,0-3.85,1.62,6.5,6.5,0,0,0-1.52,4.64v9.89Z",key:8}),n.createElement("path",{className:"cls-1",d:"M443.82,55.85a9.63,9.63,0,0,1-4.92-1.26,9.05,9.05,0,0,1-3.46-3.51,10.54,10.54,0,0,1-1.27-5.27,10.49,10.49,0,0,1,1.29-5.28A9.29,9.29,0,0,1,439,37a10.22,10.22,0,0,1,9.83,0,9.36,9.36,0,0,1,3.47,3.51,10.39,10.39,0,0,1,1.3,5.28,10.35,10.35,0,0,1-1.3,5.27,9.12,9.12,0,0,1-3.49,3.51A9.8,9.8,0,0,1,443.82,55.85Zm0-3.52a5.32,5.32,0,0,0,2.73-.73,5.41,5.41,0,0,0,2-2.18,7.56,7.56,0,0,0,.78-3.61,7.66,7.66,0,0,0-.76-3.61A5.33,5.33,0,0,0,441.14,40a5.4,5.4,0,0,0-2,2.19,7.66,7.66,0,0,0-.77,3.61,7.68,7.68,0,0,0,.77,3.61,5.53,5.53,0,0,0,2,2.18A5.16,5.16,0,0,0,443.82,52.33Z",key:9}),n.createElement("path",{className:"cls-1",d:"M462.31,55.39l-7.18-19.16h4.29l5.33,15.25,5.33-15.25h4.25l-7.15,19.16Z",key:10}),n.createElement("path",{className:"cls-1",d:"M485.61,55.85a9.8,9.8,0,0,1-5-1.26,8.83,8.83,0,0,1-3.42-3.49A10.55,10.55,0,0,1,476,45.88a11.1,11.1,0,0,1,1.22-5.29,8.81,8.81,0,0,1,3.4-3.55,9.85,9.85,0,0,1,5.08-1.28,9.28,9.28,0,0,1,4.9,1.26,9,9,0,0,1,3.25,3.34A9.32,9.32,0,0,1,495,45c0,.25,0,.53,0,.83s0,.62-.06,1H480A5.92,5.92,0,0,0,481.8,51a5.57,5.57,0,0,0,3.81,1.45,5.06,5.06,0,0,0,2.91-.79,4.78,4.78,0,0,0,1.76-2.15h4.1A8.67,8.67,0,0,1,491.3,54,8.9,8.9,0,0,1,485.61,55.85Zm0-16.72A5.77,5.77,0,0,0,482,40.34,5.3,5.3,0,0,0,480.05,44h10.81a4.88,4.88,0,0,0-1.58-3.55A5.29,5.29,0,0,0,485.61,39.13Z",key:11}),n.createElement("path",{className:"cls-1",d:"M499.05,55.39V36.23h3.63l.31,3.36a6.59,6.59,0,0,1,2.61-2.8,7.58,7.58,0,0,1,3.95-1A7.08,7.08,0,0,1,515,37.93q2,2.16,2,6.45v11H513V44.8q0-5.56-4.55-5.56a4.9,4.9,0,0,0-3.77,1.62,6.63,6.63,0,0,0-1.49,4.64v9.89Z",key:12}),n.createElement("path",{className:"cls-1",d:"M70.25,38.47,118.51,27a28.72,28.72,0,0,0-3.62-13.38A26.52,26.52,0,0,0,105,3.6a29.28,29.28,0,0,0-28.13,0,26.82,26.82,0,0,0-10,10,28.92,28.92,0,0,0-3.71,14.78,30.76,30.76,0,0,0,2,11.34ZM81.42,16.19a13,13,0,0,1,18.91,0,12,12,0,0,1,1.84,2.43L77.61,25.15A14.86,14.86,0,0,1,81.42,16.19Z",key:13}),n.createElement("path",{className:"cls-1",d:"M100.33,40.5a12.88,12.88,0,0,1-9.48,4.09,12.69,12.69,0,0,1-9.43-4.09,11.14,11.14,0,0,1-1.61-2.1L66.05,41.69c.24.48.49,1,.76,1.43a26.41,26.41,0,0,0,9.92,10,29.45,29.45,0,0,0,28.18,0,26.35,26.35,0,0,0,10-10,27.24,27.24,0,0,0,3-8.1H103.48A13.08,13.08,0,0,1,100.33,40.5Z",key:14}),n.createElement("polygon",{className:"cls-1",points:"152.84 18.75 152.84 5.14 136.19 9.57 135.13 1.31 122.7 1.31 122.7 25.95 152.84 18.75",key:15}),n.createElement("polygon",{className:"cls-1",points:"122.7 28.16 122.7 55.39 136.65 55.39 136.65 24.83 122.7 28.16",key:16}),n.createElement("path",{className:"cls-1",d:"M178.94,12.51l.18,0L201.2,7.2a26.08,26.08,0,0,0-4.88-3.6,29.28,29.28,0,0,0-28.13,0,26.82,26.82,0,0,0-10,10,27.2,27.2,0,0,0-2,4.38Z",key:17}),n.createElement("path",{className:"cls-1",d:"M203,9l-16.25,3.89a13.75,13.75,0,0,1,5,3.31q4,4.1,4,12.16t-4,12.15a12.88,12.88,0,0,1-9.48,4.09,12.69,12.69,0,0,1-9.43-4.09q-4-4.08-4-12.15t4-12.14l-17.29,4.13a32.57,32.57,0,0,0-1,8,29.15,29.15,0,0,0,3.65,14.77,26.41,26.41,0,0,0,9.92,10,29.45,29.45,0,0,0,28.18,0,26.35,26.35,0,0,0,10-10,29.25,29.25,0,0,0,3.65-14.77,29.29,29.29,0,0,0-3.65-14.78A28.32,28.32,0,0,0,203,9Z",key:18}),n.createElement("path",{className:"cls-2",d:"M59.2,41.11,59,40.77,39.66,1.31H7.8V12.1H21.25L0,55.39H15.61l2-4.36Zm-26.1-23L41,34.89,23,39.68Z",key:19}),n.createElement("polygon",{className:"cls-2",points:"61.79 46.39 46.38 46.39 50.6 55.39 66.21 55.39 61.79 46.39",key:20})]))])}r.defaultProps={viewBox:"0 0 517.01 56.69"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=00a710cfb91f57c344b6cc21d7516b882cbefdf4-c9770a997295496965a8.js.map