(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3a516650":"dcdd950f","chunk-57d57fe1":"46dcb8a8","chunk-f77ce842":"a248e6be","chunk-606428a3":"85cde5ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-57d57fe1":1,"chunk-f77ce842":1,"chunk-606428a3":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3a516650":"31d6cfe0","chunk-57d57fe1":"587b0235","chunk-f77ce842":"587b0235","chunk-606428a3":"281bdd79"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./L_LAYOUT_01.vue":["f12f","chunk-57d57fe1"],"./L_LAYOUT_03.vue":["87bd","chunk-f77ce842"],"./NotFound.vue":["9703","chunk-3a516650"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),o=n("8c4f"),a=n("58ca");r["default"].use(o["a"]),r["default"].use(a["a"]),t["a"]=new o["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:[]})},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=(n("58ca"),n("5f5b")),a=(n("f669"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),c=[],u=n("2877"),i={},s=Object(u["a"])(i,a,c,!1,null,null,null),f=s.exports,l=n("41cb"),d=n("2f62"),p=n("bc3a"),h=n.n(p);r["default"].use(d["a"],h.a);var g=new d["a"].Store({state:{siteName:"Rush Front Office",backOfficeUrl:"https://back.dev.ajiredun.com/",api:{backOffice:"https://back.dev.ajiredun.com/api/",pageRoutes:"https://back.dev.ajiredun.com/api/pages?published=true"},pageInfo:null,layout:null,slots:[]},mutations:{setPageInfo:function(e,t){e.pageInfo=t}},actions:{setPageInfo:function(e,t){e.commit("setPageInfo",t)}},getters:{}}),v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({router:l["a"],store:g,methods:{getDynamicRoutes:function(e){var t=this;h.a.get(e).then((function(e){t.processData(e)})).catch((function(e){return console.log(e)}))},processData:function(e){var t=this,r=e.status;if(200==r){var o=e.data["hydra:member"];o.forEach((function(e){var r={path:"".concat(e.route),component:function(){return n("1a5d")("./"+e.layout.code+".vue")},name:"".concat(e.name),props:{pageInfo:e}};t.$router.addRoutes([r])}));var a={path:"/**",name:"NotFound",component:function(){return n.e("chunk-3a516650").then(n.bind(null,"9703"))}};this.$router.addRoutes([a])}else console.log("Error fetching paths")}},created:function(){this.getDynamicRoutes(this.$store.state.api.pageRoutes)},render:function(e){return e(f)}}).$mount("#app")},f669:function(e,t,n){}});
//# sourceMappingURL=app.a90061af.js.map