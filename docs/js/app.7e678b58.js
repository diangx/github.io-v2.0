(function(){var e={4425:function(e,n,t){"use strict";var r=t(5130),o=t(6768),i=t(4232);function u(e,n,t,r,u,c){const s=(0,o.g2)("router-view"),a=(0,o.g2)("v-container"),p=(0,o.g2)("LanguageSelector");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(a,{class:(0,i.C4)(c.containerClass)},{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1},8,["class"]),(0,o.bF)(p)],64)}const c={class:"language-selector"};function s(e,n,t,r,u,s){const a=(0,o.g2)("v-icon"),p=(0,o.g2)("v-btn");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(p,{icon:"",onClick:s.toggleMenu,class:"language-button"},{default:(0,o.k6)((()=>[(0,o.bF)(a,{large:""},{default:(0,o.k6)((()=>[(0,o.eW)("mdi-earth")])),_:1})])),_:1},8,["onClick"]),(0,o.Lk)("div",{class:(0,i.C4)(["language-options",{show:u.menu}])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.languages,((e,n)=>((0,o.uX)(),(0,o.Wv)(p,{key:n,class:"language-item",text:"",block:"",onClick:n=>s.selectLanguage(e)},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e),1)])),_:2},1032,["onClick"])))),128))],2)])}var a=t(782),p={data(){return{menu:!1,languages:["en","kr"]}},methods:{...(0,a.i0)("language",["updateLanguage"]),toggleMenu(){this.menu=!this.menu},selectLanguage(e){this.updateLanguage(e),this.menu=!1}}},g=t(1241);const _=(0,g.A)(p,[["render",s],["__scopeId","data-v-f9b23e72"]]);var f=_,l={components:{LanguageSelector:f},data(){return{isMobile:!1}},computed:{containerClass(){return this.isMobile?"px-1":"px-16"}},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.checkIfMobile)},beforeDestroy(){window.removeEventListener("resize",this.checkIfMobile)},methods:{checkIfMobile(){this.isMobile=window.innerWidth<=768}}};const d=(0,g.A)(l,[["render",u]]);var E=d,m=t(5384),O=JSON.parse('{"greeting":"Hello","welcome":"Welcome to our application"}'),L=JSON.parse('{"greeting":"안녕하세요","welcome":"우리 애플리케이션에 오신 것을 환영합니다"}');const S={en:O,kr:L},T=(0,m.hU)({locale:"en",fallbackLocale:"en",messages:S});var A=T;const v={selectedLanguage:"en"},b={getSelectedLanguage:e=>e.selectedLanguage},h={setLanguage(e,n){e.selectedLanguage=n,A.global.locale=n}},R={updateLanguage({commit:e},n){e("setLanguage",n)}};var C={namespaced:!0,state:v,getters:b,mutations:h,actions:R};const I=(0,a.y$)({modules:{language:C}});var x=I,V=(t(5524),t(7768)),B=t(1920),N=t(5741),P=t(1387);const D=[{path:"/",name:"home",component:()=>t.e(448).then(t.bind(t,2448))}],k=(0,P.aE)({history:(0,P.LA)(""),routes:D});var y=k;const M=t(8188),w=t(5365),K=t(9453),Q={};function G(e){e.keys().forEach((n=>{const t=n.replace("./","").replace(/\.\w+$/,"");Q[t]=e(n)}))}G(M),G(w),G(K);var F=Q;const H=(0,V.$N)({components:B,directives:N,icons:{defaultSet:"mdi"}}),W=(0,r.Ef)(E);W.use(y),W.use(H),W.use(x),W.use(A),W.config.globalProperties.$state="",W.config.globalProperties.$images=F,W.config.globalProperties.t=e=>A.global.t(e),W.mount("#app")},5365:function(e,n,t){var r={"./KT_MOBILE_DASHBOARD_1.png":9751,"./KT_MOBILE_DASHBOARD_2.png":1644,"./KT_MOBILE_LOADING.png":8931,"./KT_MOBILE_LOGIN.png":9808,"./KT_MOBILE_NAV.png":456,"./KT_PC_DASHBOARD.png":5770,"./KT_PC_LOADING.png":3766,"./KT_PC_LOGIN_1.png":7029,"./KT_PC_LOGIN_2.png":9678,"./KT_PC_NAV.png":9693,"./KT_PC_SAVE.png":6915,"./KT_PC_SAVE_BEFORE.png":7409};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=5365},8188:function(e,n,t){var r={"./QT_LOGIN_1.png":374,"./QT_LOGIN_2.png":1997,"./QT_MOBILE_DASHBOARD.png":1650,"./QT_MOBILE_DASHBOARD_2.png":4765,"./QT_MOBILE_PARENTAL_ALERT_SETTING.png":3833,"./QT_PC_DASHBOARD_1.png":6503,"./QT_PC_DASHBOARD_2.png":8396,"./QT_PC_DASHBOARD_3.png":1285,"./QT_PC_PARENTAL.png":1568,"./QT_PC_TOPOLOGY.png":2552,"./QT_PC_USB.png":481,"./QT_PC_WIFI.png":7123};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=8188},9453:function(e,n,t){var r={"./SV_SERVER_API_LIST_1.png":3835,"./SV_SERVER_API_LIST_2.png":8800,"./SV_SERVER_LOG.png":3508,"./SV_SERVER_MENUTREE_MAKEFILE.png":5162,"./SV_SERVER_MONITOR_1.png":4524,"./SV_SERVER_MONITOR_2.png":3255,"./SV_SERVER_MONITOR_3.png":3262,"./SV_SERVER_PS_LOG.png":6928,"./SV_SERVER_WEB_CALL.png":5165,"./SV_WEB_CALL_1.png":1031,"./SV_WEB_CALL_2.png":8380,"./SV_WEB_CALL_3.png":4293,"./SV_WEB_CALL_4.png":522};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=9453},9751:function(e,n,t){"use strict";e.exports=t.p+"img/KT_MOBILE_DASHBOARD_1.9e38fd01.png"},1644:function(e,n,t){"use strict";e.exports=t.p+"img/KT_MOBILE_DASHBOARD_2.99772733.png"},8931:function(e,n,t){"use strict";e.exports=t.p+"img/KT_MOBILE_LOADING.44d74d24.png"},9808:function(e,n,t){"use strict";e.exports=t.p+"img/KT_MOBILE_LOGIN.d529ae68.png"},456:function(e,n,t){"use strict";e.exports=t.p+"img/KT_MOBILE_NAV.8bc2a850.png"},5770:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_DASHBOARD.67a7d0fd.png"},3766:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_LOADING.db45c17f.png"},7029:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_LOGIN_1.6fb5d2ae.png"},9678:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_LOGIN_2.7ac5779b.png"},9693:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_NAV.ce197e0c.png"},6915:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_SAVE.41c9d1c5.png"},7409:function(e,n,t){"use strict";e.exports=t.p+"img/KT_PC_SAVE_BEFORE.334e321b.png"},374:function(e,n,t){"use strict";e.exports=t.p+"img/QT_LOGIN_1.bff9210a.png"},1997:function(e,n,t){"use strict";e.exports=t.p+"img/QT_LOGIN_2.deb857b4.png"},1650:function(e,n,t){"use strict";e.exports=t.p+"img/QT_MOBILE_DASHBOARD.f8332560.png"},4765:function(e,n,t){"use strict";e.exports=t.p+"img/QT_MOBILE_DASHBOARD_2.6a182b2f.png"},3833:function(e,n,t){"use strict";e.exports=t.p+"img/QT_MOBILE_PARENTAL_ALERT_SETTING.fd0cdd0c.png"},6503:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_DASHBOARD_1.c98e3248.png"},8396:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_DASHBOARD_2.98ceebca.png"},1285:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_DASHBOARD_3.22b03fd9.png"},1568:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_PARENTAL.a320cac8.png"},2552:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_TOPOLOGY.3bf56dc2.png"},481:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_USB.d1cf6d68.png"},7123:function(e,n,t){"use strict";e.exports=t.p+"img/QT_PC_WIFI.af23b867.png"},3835:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_API_LIST_1.48168437.png"},8800:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_API_LIST_2.23d4a267.png"},3508:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_LOG.937a732f.png"},5162:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_MENUTREE_MAKEFILE.aab3d643.png"},4524:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_MONITOR_1.1d6848c9.png"},3255:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_MONITOR_2.59cd169f.png"},3262:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_MONITOR_3.2c949402.png"},6928:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_PS_LOG.87a4662d.png"},5165:function(e,n,t){"use strict";e.exports=t.p+"img/SV_SERVER_WEB_CALL.21921f39.png"},1031:function(e,n,t){"use strict";e.exports=t.p+"img/SV_WEB_CALL_1.4e7301d8.png"},8380:function(e,n,t){"use strict";e.exports=t.p+"img/SV_WEB_CALL_2.ea4e6e22.png"},4293:function(e,n,t){"use strict";e.exports=t.p+"img/SV_WEB_CALL_3.907c9167.png"},522:function(e,n,t){"use strict";e.exports=t.p+"img/SV_WEB_CALL_4.9994d7a8.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],i=e[p][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<u&&(u=i));if(c){e.splice(p--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".4b0f4fc0.js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".649d131f.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="diangx:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var c,s;if(void 0!==i)for(var a=document.getElementsByTagName("script"),p=0;p<a.length;p++){var g=a[p];if(g.getAttribute("src")==r||g.getAttribute("data-webpack")==n+i){c=g;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var _=function(n,t){c.onerror=c.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(_.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=_.bind(null,c.onerror),c.onload=_.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var c=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,c=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,u.parentNode&&u.parentNode.removeChild(u),i(s)}};return u.onerror=u.onload=c,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),c=t.p+u;if(n(u,c))return o();e(r,c,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={448:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),c=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}};t.l(u,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],c=r[1],s=r[2],a=0;if(u.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var p=s(t)}for(n&&n(r);a<u.length;a++)i=u[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},r=self["webpackChunkdiangx"]=self["webpackChunkdiangx"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4425)}));r=t.O(r)})();
//# sourceMappingURL=app.7e678b58.js.map