(function(e){function t(t){for(var o,r,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-360ca74a":"29d71695","chunk-2d0df077":"f01911bc","chunk-2d22bd35":"bd58b54d","chunk-3a516650":"dcdd950f"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-360ca74a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-360ca74a":"00c96699","chunk-2d0df077":"31d6cfe0","chunk-2d22bd35":"31d6cfe0","chunk-3a516650":"31d6cfe0"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var o={"./L_LAYOUT_01.vue":["f12f","chunk-360ca74a","chunk-2d22bd35"],"./L_LAYOUT_03.vue":["87bd","chunk-360ca74a","chunk-2d0df077"],"./NotFound.vue":["9703","chunk-3a516650"]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id="1a5d",e.exports=r},"41cb":function(e,t,n){"use strict";var o=n("2b0e"),r=n("8c4f"),a=n("58ca");o["default"].use(r["a"]),o["default"].use(a["a"]),t["a"]=new r["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:[]})},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=(n("58ca"),n("5f5b")),a=(n("f669"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),c=[],u=n("2877"),i={},s=Object(u["a"])(i,a,c,!1,null,null,null),l=s.exports,f=n("41cb"),d=n("2f62"),p=n("bc3a"),h=n.n(p);o["default"].use(d["a"],h.a);var g=new d["a"].Store({state:{siteName:"Rush Front Office",backOfficeUrl:"https://back.dev.ajiredun.com",api:{backOffice:"https://back.dev.ajiredun.com/api/",pageRoutes:"https://back.dev.ajiredun.com/api/pages?published=true",getBlockData:"https://back.dev.ajiredun.com/api/blocks/"},pageInfo:null,container:{blockData:[]},blockDataChanged:0},mutations:{setPageInfo:function(e,t){e.pageInfo=t},setBlockData:function(e,t){e.container.blockData=t},addBlockData:function(e,t){e.container.blockData[t["blockId"]]=t["data"],e.blockDataChanged=t["blockId"]}},actions:{setPageInfo:function(e,t){e.commit("setPageInfo",t);var n={};t.blocks.forEach((function(e){n[e.id]=e})),e.commit("setBlockData",n)},setBlockData:function(e,t){e.commit("setBlockData",t)},loadBlockData:function(e,t){var n=t.url,o=t.id;h.a.get(n).then((function(t){var n=t.status;if(200==n){var r=t.data,a={blockId:r.id,data:r};e.commit("addBlockData",a)}else 403==n?console.log("User do not have access to block: "+o):404==n?console.log("Block not found: "+o):console.log("Error loading block: "+o)})).catch((function(e){return console.log(e)}))}},getters:{blockData:function(e){return e.container.blockData},container:function(e){return e.container}}}),v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),setTimeout((function(){window.location.reload(!0)}),500)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].use(r["a"]),o["default"].config.productionTip=!1,new o["default"]({router:f["a"],store:g,methods:{getDynamicRoutes:function(e){var t=this;h.a.get(e).then((function(e){t.processData(e)})).catch((function(e){return console.log(e)}))},processData:function(e){var t=this,o=e.status;if(200==o){var r=e.data["hydra:member"];r.forEach((function(e){var o={path:"".concat(e.route),component:function(){return n("1a5d")("./"+e.layout.code+".vue")},name:"".concat(e.name),props:{pageInfo:e}};t.$router.addRoutes([o])}));var a={path:"/**",name:"NotFound",component:function(){return n.e("chunk-3a516650").then(n.bind(null,"9703"))}};this.$router.addRoutes([a])}else console.log("Error fetching paths")}},created:function(){this.getDynamicRoutes(this.$store.state.api.pageRoutes)},render:function(e){return e(l)}}).$mount("#app")},f669:function(e,t,n){}});
//# sourceMappingURL=app.b4300515.js.map