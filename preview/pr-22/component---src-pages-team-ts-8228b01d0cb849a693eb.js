(self.webpackChunkaero_team_eindhoven=self.webpackChunkaero_team_eindhoven||[]).push([[694],{9662:function(e,t,n){var r=n(614),o=n(6330),a=TypeError;e.exports=function(e){if(r(e))return e;throw a(o(e)+" is not a function")}},1223:function(e,t,n){var r=n(5112),o=n(30),a=n(3070).f,i=r("unscopables"),c=Array.prototype;null==c[i]&&a(c,i,{configurable:!0,value:o(null)}),e.exports=function(e){c[i][e]=!0}},9670:function(e,t,n){var r=n(111),o=String,a=TypeError;e.exports=function(e){if(r(e))return e;throw a(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),a=n(6244),i=function(e){return function(t,n,i){var c,u=r(t),s=a(u),f=o(i,s);if(e&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((e||f in u)&&u[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),a=r("".slice);e.exports=function(e){return a(o(e),8,-1)}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,a=n(7854),i=n(8113),c=a.process,u=a.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,a=o.call,i=r&&o.bind.bind(a,a);e.exports=r?i:function(e){return function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),a=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),a=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),a=n(4326),i=Object,c=r("".split);e.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?c(e,""):i(e)}:i},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),a=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===a}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),a=n(7976),i=n(3307),c=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&a(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30:function(e,t,n){var r,o=n(9670),a=n(6048),i=n(748),c=n(3501),u=n(490),s=n(317),f=n(6200),l="prototype",p="script",m=f("IE_PROTO"),v=function(){},b=function(e){return"<"+p+">"+e+"</"+p+">"},d=function(e){e.write(b("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?d(r):(t=s("iframe"),n="java"+p+":",t.style.display="none",u.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(b("document.F=Object")),e.close(),e.F):d(r);for(var o=i.length;o--;)delete h[l][i[o]];return h()};c[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[l]=o(e),n=new v,v[l]=null,n[m]=e):n=h(),void 0===t?n:a.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),a=n(3070),i=n(9670),c=n(5656),u=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){i(e);for(var n,r=c(t),o=u(t),s=o.length,f=0;s>f;)a.f(e,n=o[f++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),a=n(3353),i=n(9670),c=n(4948),u=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",m="writable";t.f=r?a?function(e,t,n){if(i(e),t=c(t),i(n),"function"==typeof e&&"prototype"===t&&"value"in n&&m in n&&!n[m]){var r=f(e,t);r&&r[m]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(i(e),t=c(t),i(n),o)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),a=n(5656),i=n(1318).indexOf,c=n(3501),u=r([].push);e.exports=function(e,t){var n,r=a(e),s=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&u(f,n);for(;t.length>s;)o(r,n=t[s++])&&(~i(f,n)||u(f,n));return f}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},2140:function(e,t,n){var r=n(6916),o=n(614),a=n(111),i=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!a(c=r(n,e)))return c;if(o(n=e.valueOf)&&!a(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!a(c=r(n,e)))return c;throw i("Can't convert object to primitive value")}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293),a=n(7854).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),a=n(2190),i=n(8173),c=n(2140),u=n(5112),s=TypeError,f=u("toPrimitive");e.exports=function(e,t){if(!o(e)||a(e))return e;var n,u=i(e,f);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!o(n)||a(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,a=Math.random(),i=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+a,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),a=n(2597),i=n(9711),c=n(6293),u=n(3307),s=r.Symbol,f=o("wks"),l=u?s.for||s:s&&s.withoutSetter||i;e.exports=function(e){return a(f,e)||(f[e]=c&&a(s,e)?s[e]:l("Symbol."+e)),f[e]}},9244:function(e,t,n){n(1223)("flatMap")},1014:function(e,t,n){"use strict";n.r(t),n.d(t,{ALL_TEAMS:function(){return i},Head:function(){return u},default:function(){return s}});var r=n(1883),o=n(4465),a=n(7294);const i=new Map([["21-22",{name:"21/22",text:"In 2022 the first year of Aero Team started, and was founded by members from the old teams Blue Jay Eindhoven and Team Syfly."}],["22-23",{name:"22/23",text:"The second year of Aero Team, our focus is on the Battery Swap mechanism and the construction of our Cargo Drone"}]]),c=Array.from(i.keys()).at(-1);function u(e){return(0,o.Head)({...e,params:{parent__name:c}})}function s(e){return(0,a.useEffect)((()=>{(0,r.navigate)("/team/"+c+"/",{replace:!0})})),(0,o.default)({...e,params:{parent__name:c}})}},4465:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return S},default:function(){return E}});var r=n(7294),o=n(1883),a=n(59);const i="2258843670";function c(e){const t=function(e){let t=new Map;for(let a of e.allFile.group){let e=new Map;for(let t of a.nodes){var n;e.set(t.name,null===(n=t.childImageSharp)||void 0===n?void 0:n.gatsbyImageData)}t.set(a.fieldValue,e)}let r=new Map;for(let a of e.allMembers.nodes){const e=a.parent.name;let n=[];for(let r of a.members){var o;n.push(new s(r,null===(o=t.get(e))||void 0===o?void 0:o.get(u(r))))}r.set(e,n)}return r}((0,o.useStaticQuery)(i));return t.get(e)}function u(e){return(e.first_name+e.surname).replace(/\s/g,"").toLowerCase()}let s=function(){function e(e,t){this.first_name=e.first_name,this.surname=e.surname,this.email=e.aero_email,this.title=e.function,this.subteams=e.subteam.split(",").map((e=>e.trim())).filter((e=>e.length>0)),this.time=e.time,this.photo=t}return e.prototype.fullName=function(){return this.first_name+" "+this.surname},e}();var f=n(1014),l=n(8541),p=n(2553),m=n(8032),v=(n(9244),n(5785)),b=n(4184),d=n.n(b);function h(e){let{subTeams:t,currentSelection:n,onSelect:o}=e;return r.createElement("ul",{className:"subteams"},t.map((e=>r.createElement("li",{key:e,onClick:()=>o(e),className:d()("subteam",n===e?"selected":void 0)},e))))}var g=n(6158),w=n.n(g);function y(e){let t,{member:o,above_fold:a,show_subteam:i,currentSelection:c,onSelect:u}=e;return t=void 0===o.photo?r.createElement(m.S,{src:"../../images/placeholders/member.png",alt:o.fullName(),className:"photo",loading:"eager",__imageData:n(5102)}):r.createElement(m.G,{image:o.photo,alt:o.fullName(),className:"photo",loading:a?"eager":"lazy"}),r.createElement("div",{className:"TeamMember"},r.createElement("div",{className:"photo-container"},t,r.createElement("div",{className:"contact-details"},r.createElement("a",{href:"mailto:"+o.email},r.createElement(w(),{className:"icon mail"})))),r.createElement("div",{className:"line"}),r.createElement("div",{className:"name"},o.fullName()),r.createElement("div",{className:"title"},o.title),r.createElement("div",{className:"subteams","aria-hidden":!i},o.subteams.map((e=>r.createElement("div",{className:d()("subteam",c===e?"selected":void 0),key:e,onClick:()=>u(e)},e)))))}function x(e){let{teamInfo:t,members:n,subteam:o,setSubteam:a,clearSubteam:i,show_subteams:c}=e;const u=e=>{e!==o?a(e):i()},s=n.flatMap((e=>e.subteams)),f=(0,v.Z)(new Set(s)),l=o?n.filter((e=>e.subteams.includes(o))):n;return r.createElement("div",null,r.createElement("p",null,t.text),r.createElement(h,{subTeams:f,currentSelection:o,onSelect:u}),r.createElement(p.X2,null,l.map(((e,t)=>r.createElement(p.JX,{key:e.email,sm:12,md:6,lg:4},r.createElement(y,{member:e,above_fold:t<4,onSelect:u,currentSelection:o,show_subteam:c}))))))}function S(e){return r.createElement(a.Q,{title:"The "+e.params.parent__name+" Team"})}function E(e){const t=e.params.parent__name,a=f.ALL_TEAMS.get(t),i=c(t),u=(()=>{const e=Array.from(f.ALL_TEAMS.keys()),n=e.findIndex((e=>e==t));return"/team/"+e[(n+1)%e.length]})(),{setSubteam:s,clearSubteam:v,subteam:b}=(()=>{const t=new URLSearchParams(e.location.hash.substring(1));return{setSubteam:e=>{t.set("filter",e),(0,o.navigate)("#"+t.toString())},clearSubteam:()=>{t.delete("filter"),(0,o.navigate)("#"+t.toString())},subteam:t.get("filter")}})();return r.createElement(l.Z,null,r.createElement("div",{className:"TeamPage"},r.createElement(p.W2,{className:"teamcontainer"},r.createElement("h1",null,"OUR TEAM",r.createElement(o.Link,{className:"year",to:u},a.name,r.createElement(m.S,{src:"../../images/switch.png",alt:"Switch to a different team",className:"switch-team",loading:"eager",placeholder:"none",__imageData:n(1325)}))),r.createElement(x,{teamInfo:a,members:i,subteam:b,setSubteam:s,clearSubteam:v,show_subteams:"21-22"!==t}))))}},5102:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"backgroundColor":"transparent","images":{"fallback":{"src":"/preview/pr-22/static/731f05922e2b4814e6ae56688fb70661/55687/member.png","srcSet":"/preview/pr-22/static/731f05922e2b4814e6ae56688fb70661/55687/member.png 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/preview/pr-22/static/731f05922e2b4814e6ae56688fb70661/ed17b/member.avif 600w","type":"image/avif","sizes":"(min-width: 600px) 600px, 100vw"},{"srcSet":"/preview/pr-22/static/731f05922e2b4814e6ae56688fb70661/d238c/member.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":600}')},1325:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/preview/pr-22/static/139fda133c5c9cca369a7fb9e1f71463/3d34d/switch.png","srcSet":"/preview/pr-22/static/139fda133c5c9cca369a7fb9e1f71463/3d34d/switch.png 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/preview/pr-22/static/139fda133c5c9cca369a7fb9e1f71463/eef08/switch.avif 100w","type":"image/avif","sizes":"(min-width: 100px) 100px, 100vw"},{"srcSet":"/preview/pr-22/static/139fda133c5c9cca369a7fb9e1f71463/59d64/switch.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=component---src-pages-team-ts-8228b01d0cb849a693eb.js.map