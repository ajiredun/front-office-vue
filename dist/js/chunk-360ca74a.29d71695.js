(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-360ca74a"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",(function(){return function(t){return o(r(t))}}))},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5465:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.switchToReal?n("div",{staticClass:"CT_MENU_MAIN"},[n("b-navbar",{attrs:{toggleable:"lg",sticky:"true",type:"light",variant:"white"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("b-img",{staticClass:"nav-logo",attrs:{"blank-color":"#777",src:"img/logo.png"}})],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{attrs:{align:"center"}},[n("b-nav-item",{attrs:{to:"/about-us"}},[t._v("About us")]),n("b-nav-item",{attrs:{to:"/about-us"}},[t._v(t._s(t.currentSlotId))]),n("b-nav-item",{attrs:{to:"/about-us"}},[t._v(t._s(t.blockInfo.id))]),n("b-nav-item",{attrs:{to:"/about-us"}},[t._v(t._s(t.blockInfo.slot))]),n("b-nav-item",{attrs:{to:"/about-us"}},[t._v(t._s(t.blockInfo.contentType))])],1),n("b-navbar-nav",{staticClass:"ml-auto",attrs:{justified:""}},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[n("i",{staticClass:"fas fa-user fa-2x"})])]},proxy:!0}],null,!1,1830852997)},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1):n("div",{staticClass:"CT_MENU_MAIN"},[n("b-navbar",{attrs:{toggleable:"lg",sticky:"true",type:"light",variant:"white"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("b-img",{staticClass:"nav-logo",attrs:{"blank-color":"#777",src:"img/logo.png"}})],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{attrs:{align:"center"}},[n("b-nav-item",{attrs:{to:"/about-us"}},[t._v("About us")])],1),n("b-navbar-nav",{staticClass:"ml-auto",attrs:{justified:""}},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[n("i",{staticClass:"fas fa-user fa-2x"})])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={props:{currentSlotId:String,blockInfo:Object},computed:c({},Object(i["b"])(["blockDataChanged"])),data:function(){return{switchToReal:!1}},methods:{processData:function(t){this.switchToReal=!0}},mounted:function(){var t=this.$store.state.api.getBlockData+this.blockInfo.id,e={url:t,id:this.blockInfo.id};this.$store.dispatch("loadBlockData",e)},watch:{blockDataChanged:function(t){if(this.$store.state.blockDataChanged==this.blockInfo.id){var e=this.$store.getters.blockData[this.blockInfo.id];this.processData(e)}}}},l=u,f=(n("a29e"),n("2877")),p=Object(f["a"])(l,r,o,!1,null,null,null),b=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.switchToReal?n("b-row",{staticClass:"CT_HALF_IMAGE_HALF_TEXT"},[n("b-col",{attrs:{md:"6"}},[n("b-img",{attrs:{"fluid-grow":"",src:"img/logo.png"}})],1),n("b-col",{attrs:{md:"6"}},[t._v("\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    ")])],1):n("b-row",{staticClass:"CT_HALF_IMAGE_HALF_TEXT"},[n("b-col",{attrs:{md:"6"}},[n("div",{staticClass:"mockup-img"})]),n("b-col",{attrs:{md:"6"}},[n("div",{staticClass:"mockup-paragraph"},[n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"})])])],1)},v=[];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={props:{currentSlotId:String,blockInfo:Object},computed:g({},Object(i["b"])(["blockDataChanged"])),data:function(){return{switchToReal:!1}},methods:{processData:function(t){this.switchToReal=!0}},mounted:function(){var t=this.$store.state.api.getBlockData+this.blockInfo.id,e={url:t,id:this.blockInfo.id};this.$store.dispatch("loadBlockData",e)},watch:{blockDataChanged:function(t){if(this.$store.state.blockDataChanged==this.blockInfo.id){var e=this.$store.getters.blockData[this.blockInfo.id];this.processData(e)}}}},y=m,O=(n("b945"),Object(f["a"])(y,d,v,!1,null,null,null)),w=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.switchToReal?n("b-row",{staticClass:"CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT"},["left"==t.side?n("b-col",{attrs:{md:"4"}},[n("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e(),n("b-col",{attrs:{md:"8"},domProps:{innerHTML:t._s(t.text)}}),"right"==t.side?n("b-col",{attrs:{md:"4"}},[n("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e()],1):n("b-row",{staticClass:"CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT"},[n("b-col",{attrs:{md:"4"}},[n("div",{staticClass:"mockup-img"})]),n("b-col",{attrs:{md:"8"}},[n("div",{staticClass:"mockup-paragraph"},[n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"}),n("div",{staticClass:"mockup-text-line"})])])],1)},_=[];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I={props:{currentSlotId:String,blockInfo:Object},computed:C({},Object(i["b"])(["blockDataChanged"])),data:function(){return{switchToReal:!1,image:!1,side:"left",text:!1,title:!1}},methods:{processData:function(t){console.log(t);var e=t.properties;e.title&&(this.title=e.title),e.side&&(this.side=e.side),e.text&&(this.text=e.text),e.image&&(this.image=this.$store.state.backOfficeUrl+e.image),this.switchToReal=!0}},mounted:function(){var t=this.$store.state.api.getBlockData+this.blockInfo.id,e={url:t,id:this.blockInfo.id};this.$store.dispatch("loadBlockData",e)},watch:{blockDataChanged:function(t){if(this.$store.state.blockDataChanged==this.blockInfo.id){var e=this.$store.getters.blockData[this.blockInfo.id];this.processData(e)}}}},P=I,D=(n("910f"),Object(f["a"])(P,k,_,!1,null,null,null)),x=D.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:t.slotCodeId,attrs:{id:t.slotCodeId}})},E=[],S=n("2b0e");function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"rf-slot",components:A({},L),props:{slotCode:String},data:function(){var t=this.slotCode+"_"+this.$store.state.pageInfo.id;return{slotCode:this.slotCode,slotCodeId:t,availableComponents:L}},mounted:function(){var t=this.slotCode,e=this.slotCodeId,n={};for(var r in this.$store.state.pageInfo.blocks.forEach((function(e){e.slot==t&&(n[e.blockOrder]=e)})),n)if(n.hasOwnProperty(r)){var o=n[r];for(var a in o)if(o.hasOwnProperty(a)&&"contentType"==a){var i=S["default"].extend(this.availableComponents[o[a]]),s=new i({store:this.$store,parent:this.$parent,propsData:{currentSlotId:e,blockInfo:o}});s.$mount(),this.$refs[e].appendChild(s.$el)}}},methods:{onClick:function(){alert("Hello")}}},R=M,H=Object(f["a"])(R,T,E,!1,null,null,null),F=H.exports,L=e["a"]={"rf-slot":F,CT_MENU_MAIN:b,CT_HALF_IMAGE_HALF_TEXT:w,CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT:x}},"584a":function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},"5adb":function(t,e,n){},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),a=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a((function(){n(1)})),"Object",i)}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),a=n("d864"),i=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var l,f,p,b=t&u.F,d=t&u.G,v=t&u.S,h=t&u.P,g=t&u.B,m=t&u.W,y=d?o:o[e]||(o[e]={}),O=y[c],w=d?r:v?r[e]:(r[e]||{})[c];for(l in d&&(n=e),n)f=!b&&w&&void 0!==w[l],f&&s(y,l)||(p=f?w[l]:n[l],y[l]=d&&"function"!=typeof w[l]?n[l]:g&&f?a(p,r):m&&w[l]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):h&&"function"==typeof p?a(Function.call,p):p,h&&((y.virtual||(y.virtual={}))[l]=p,t&u.R&&O&&!O[l]&&i(O,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e59":function(t,e,n){},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var r=n("5ca1"),o=n("990b"),a=n("6821"),i=n("11e9"),s=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),c=i.f,u=o(r),l={},f=0;while(u.length>f)n=c(r,e=u[f++]),void 0!==n&&s(l,e,n);return l}})},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"910f":function(t,e,n){"use strict";var r=n("5adb"),o=n.n(r);o.a},9843:function(t,e,n){},"990b":function(t,e,n){var r=n("9093"),o=n("2621"),a=n("cb7c"),i=n("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},a29e:function(t,e,n){"use strict";var r=n("9843"),o=n.n(r);o.a},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b945:function(t,e,n){"use strict";var r=n("7e59"),o=n.n(r);o.a},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("85f2"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),a=n("1bc3"),i=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-360ca74a.29d71695.js.map