(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c8f67a3"],{"145a":function(t,e,i){},"5adb":function(t,e,i){},"7e59":function(t,e,i){},"910f":function(t,e,i){"use strict";var s=i("5adb"),a=i.n(s);a.a},9843:function(t,e,i){},a29e:function(t,e,i){"use strict";var s=i("9843"),a=i.n(s);a.a},ad86:function(t,e,i){"use strict";var s=i("d705"),a=i.n(s);a.a},b0ef:function(t,e,i){"use strict";var s=i("b9a0"),a=i.n(s);a.a},b4e1:function(t,e,i){},b6cf:function(t,e,i){},b945:function(t,e,i){"use strict";var s=i("7e59"),a=i.n(s);a.a},b999:function(t,e,i){"use strict";var s=i("145a"),a=i.n(s);a.a},b9a0:function(t,e,i){},c6ac:function(t,e,i){"use strict";var s=i("d0a6"),a=i.n(s);a.a},d0a6:function(t,e,i){},d13e:function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("7f7f");var s=i("bd86"),a=i("2f62"),r=(i("41cb"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:t.slotCodeId,attrs:{id:t.slotCodeId}})}),o=[],l=i("2b0e");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={name:"rf-slot",components:c({},kt),props:{slotCode:String},data:function(){var t=this.slotCode+"_"+this.$store.state.pageInfo.id;return{slotCode:this.slotCode,slotCodeId:t,availableComponents:kt}},mounted:function(){var t=this.slotCode,e=this.slotCodeId,i={};for(var s in this.$store.state.pageInfo.blocks.forEach((function(e){e.slot==t&&(i[e.blockOrder]=e)})),i)if(i.hasOwnProperty(s)){var a=i[s];for(var r in a)if(a.hasOwnProperty(r)&&"contentType"==r){var o=l["default"].extend(this.availableComponents[a[r]]),n=new o({store:this.$store,parent:this.$parent,propsData:{currentSlotId:e,blockInfo:a}});n.$mount(),this.$refs[e].appendChild(n.$el)}}},methods:{onClick:function(){alert("Hello")}}},m=u,d=i("2877"),g=Object(d["a"])(m,r,o,!1,null,null,null),p=g.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("div",{class:"CT_MENU_MAIN "+t.displays},[i("b-navbar",{attrs:{toggleable:"lg",sticky:"true",type:"light",variant:"white"}},[i("b-navbar-brand",{attrs:{to:"/"}},[i("b-img",{staticClass:"nav-logo",attrs:{"blank-color":"#777",src:this.$store.state.frontOfficeUrl+"/img/logo.png"}})],1),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",{attrs:{align:"center"}},[i("b-nav-item",{attrs:{to:"/about-us"}},[t._v("About us")]),i("b-nav-item",{attrs:{to:"/login"}},[t._v("Login")]),i("b-nav-item",{attrs:{to:"/register"}},[t._v("Create Account")]),i("b-nav-item",{attrs:{to:"/profile"}},[t._v("My Account")]),i("b-nav-item",{attrs:{to:"/logout"}},[t._v("Logout")])],1),i("b-navbar-nav",{staticClass:"ml-auto",attrs:{justified:""}},[i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("em",[i("i",{staticClass:"fas fa-user fa-2x"})])]},proxy:!0}],null,!1,1830852997)},[i("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),i("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1):i("div",{staticClass:"CT_MENU_MAIN"},[i("b-navbar",{attrs:{toggleable:"lg",sticky:"true",type:"light",variant:"white"}},[i("b-navbar-brand",{attrs:{to:"/"}},[i("b-img",{staticClass:"nav-logo",attrs:{"blank-color":"#777",src:"img/logo.png"}})],1),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",{attrs:{align:"center"}},[i("b-nav-item",{attrs:{to:"/about-us"}},[t._v("About us")])],1),i("b-navbar-nav",{staticClass:"ml-auto",attrs:{justified:""}},[i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("em",[i("i",{staticClass:"fas fa-user fa-2x"})])]},proxy:!0}])},[i("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),i("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},f=[],b=i("bc3a"),_=i.n(b);function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var k={props:{currentSlotId:String,blockInfo:Object},data:function(){return{switchToReal:!1,error_info:"",title:!1,displays:""}},methods:{mapBasicBlockProperties:function(t){t.title&&(this.title=t.title),t.text&&(this.text=t.text),t.displays&&(this.displays=t.displays.join(" ")),t.image&&(this.image=t.image)},hideWhenCreated:function(t){}},computed:C({},Object(a["c"])(["blockDataChanged"]),{},Object(a["b"])(["getCurrentUserInfo","isAuthorized","isAuthenticated","getUrlToken"])),mounted:function(){var t=this.$store.state.api.getBlockData+this.blockInfo.id,e={url:t,id:this.blockInfo.id,ct:this.blockInfo.contentType};if(void 0!==this.blockInfo.roles&&null!==this.blockInfo.roles&&0!==this.blockInfo.roles.length){var i=this.blockInfo.roles;if(this.isAuthenticated){var s=this.getCurrentUserInfo.roles,a=i.some((function(t){return s.indexOf(t)>=0}));a&&this.$store.dispatch("removeAuthInfo",e)}}else this.$store.dispatch("loadBlockData",e)},watch:{blockDataChanged:function(t){if(this.$store.state.blockDataChanged==this.blockInfo.id){var e=this.$store.getters.blockData[this.blockInfo.id];this.processData(e)}}}},T={extends:k,data:function(){return{}},methods:{processData:function(t){var e=t.properties;this.mapBasicBlockProperties(e),this.switchToReal=!0}}},w=T,y=(i("a29e"),Object(d["a"])(w,h,f,!1,null,null,null)),U=y.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("b-row",{class:"CT_HALF_IMAGE_HALF_TEXT "+t.displays,attrs:{id:"CT_HALF_IMAGE_HALF_TEXT"+t.blockInfo.id}},[t.title?i("b-col",{staticClass:"rf-block-title",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e(),"left"==t.side?i("b-col",{attrs:{md:"6"}},[i("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e(),i("b-col",{attrs:{md:"6"},domProps:{innerHTML:t._s(t.text)}}),"right"==t.side?i("b-col",{attrs:{md:"6"}},[i("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e()],1):i("div",{staticClass:"CT_HALF_IMAGE_HALF_TEXT"},[i("b-row",[t.title?i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line",staticStyle:{height:"25px"}})]):t._e(),i("b-col",{attrs:{md:"6"}},[i("div",{staticClass:"mockup-img"})]),i("b-col",{attrs:{md:"6"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"})])])],1)],1)},I=[],O={extends:k,data:function(){return{image:!1,side:"left",text:!1}},methods:{processData:function(t){var e=t.properties;this.mapBasicBlockProperties(e),e.side&&(this.side=e.side),this.switchToReal=!0}}},E=O,S=(i("b945"),Object(d["a"])(E,x,I,!1,null,null,null)),A=S.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("b-row",{class:"CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT "+t.displays,attrs:{id:"CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT"+t.blockInfo.id}},[t.title?i("b-col",{staticClass:"rf-block-title",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e(),"left"==t.side?i("b-col",{attrs:{md:"4"}},[i("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e(),i("b-col",{attrs:{md:"8"},domProps:{innerHTML:t._s(t.text)}}),"right"==t.side?i("b-col",{attrs:{md:"4"}},[i("b-img",{attrs:{"fluid-grow":"",src:t.image}})],1):t._e()],1):i("div",{staticClass:"CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT"},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line",staticStyle:{height:"25px"}})]),i("b-col",{attrs:{md:"4"}},[i("div",{staticClass:"mockup-img"})]),i("b-col",{attrs:{md:"8"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"})])])],1)],1)},P=[],D={extends:k,data:function(){return{image:!1,side:"left",text:!1}},methods:{processData:function(t){var e=t.properties;this.mapBasicBlockProperties(e),e.side&&(this.side=e.side),this.switchToReal=!0}}},$=D,L=(i("910f"),Object(d["a"])($,R,P,!1,null,null,null)),j=L.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("b-row",{class:"CT_FULL_TEXT "+t.displays,attrs:{id:"CT_FULL_TEXT"+t.blockInfo.id}},[t.title?i("b-col",{staticClass:"rf-block-title",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e(),i("b-col",{attrs:{md:"12"},domProps:{innerHTML:t._s(t.text)}})],1):i("b-row",{staticClass:"CT_FULL_TEXT"},[t.title?i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line",staticStyle:{height:"25px"}})]):t._e(),i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"})])])],1)},B=[],N={extends:k,data:function(){return{image:!1,side:"left",text:!1}},methods:{processData:function(t){var e=t.properties;this.mapBasicBlockProperties(e),this.switchToReal=!0}}},H=N,G=(i("b0ef"),Object(d["a"])(H,M,B,!1,null,null,null)),q=G.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("b-row",{class:"CT_SLIDER_THUMBNAIL "+t.displays,attrs:{id:"CT_SLIDER_THUMBNAIL_"+t.blockInfo.id}},[t.title?i("b-col",{staticClass:"rf-block-title",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e(),i("b-col",{attrs:{md:"12"}},[i("carousel",{attrs:{id:"slider-thumbnail-"+t.blockInfo.id,easing:"linear",speed:"300",loop:!0,autoplay:t.autoplay,autoplayTimeout:t.autoplayTimeout,autoplayHoverPause:!0,scrollPerPage:!1,perPageCustom:[[100,1],[576,t.slideQtyInMobile],[768,t.slideQtyInTablet],[992,t.slideQtyInDesktop]]}},[t.image01?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image01+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image01}}),t.image01Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image01Url}},[t._v(t._s(t.image01UrlText))]):t._e()],1)]):t._e(),t.image02?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image02+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image02}}),t.image02Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image02Url}},[t._v(t._s(t.image02UrlText))]):t._e()],1)]):t._e(),t.image03?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image03+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image03}}),t.image03Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image03Url}},[t._v(t._s(t.image03UrlText))]):t._e()],1)]):t._e(),t.image04?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image04+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image04}}),t.image04Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image04Url}},[t._v(t._s(t.image04UrlText))]):t._e()],1)]):t._e(),t.image05?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image05+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image05}}),t.image05Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image05Url}},[t._v(t._s(t.image05UrlText))]):t._e()],1)]):t._e(),t.image06?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image06+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image06}}),t.image06Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image06Url}},[t._v(t._s(t.image06UrlText))]):t._e()],1)]):t._e(),t.image07?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image07+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image07}}),t.image07Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image07Url}},[t._v(t._s(t.image07UrlText))]):t._e()],1)]):t._e(),t.image08?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image08+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image08}}),t.image08Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image08Url}},[t._v(t._s(t.image08UrlText))]):t._e()],1)]):t._e(),t.image09?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image09+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image09}}),t.image09Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image09Url}},[t._v(t._s(t.image09UrlText))]):t._e()],1)]):t._e(),t.image10?i("slide",[i("div",{staticStyle:{width:"100%"}},[t.adv_height?i("div",{staticClass:"image-as-background",style:{"background-image":"url("+t.image10+")",height:t.adv_height}}):i("b-img",{attrs:{"fluid-grow":"","blank-color":"#777",src:t.image10}}),t.image10Url?i("a",{staticClass:"btn btn-sm btn-outline-dark",staticStyle:{"margin-top":"10px"},attrs:{href:t.image10Url}},[t._v(t._s(t.image10UrlText))]):t._e()],1)]):t._e()],1)],1)],1):i("div",{staticClass:"CT_SLIDER_THUMBNAIL",attrs:{id:"MOCKUP_CT_SLIDER_THUMBNAIL_"+t.blockInfo.id}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line",staticStyle:{height:"25px"}})]),i("b-col",{attrs:{md:"12","no-gutters":""}},[i("b-row",[i("b-col",[i("div",{staticStyle:{background:"gainsboro",width:"100%",height:"200px"}})]),i("b-col",[i("div",{staticStyle:{background:"gainsboro",width:"100%",height:"200px"}})]),i("b-col",[i("div",{staticStyle:{background:"gainsboro",width:"100%",height:"200px"}})]),i("b-col",[i("div",{staticStyle:{background:"gainsboro",width:"100%",height:"200px"}})])],1)],1)],1)],1)},F=[],X=i("0a63"),Y={extends:k,data:function(){return{autoplay:!0,autoplayTimeout:3e3,slideQtyInMobile:1,slideQtyInTablet:2,slideQtyInDesktop:3,image01:null,image01Url:null,image01UrlText:null,image02:null,image02Url:null,image02UrlText:null,image03:null,image03Url:null,image03UrlText:null,image04:null,image04Url:null,image04UrlText:null,image05:null,image05Url:null,image05UrlText:null,image06:null,image06Url:null,image06UrlText:null,image07:null,image07Url:null,image07UrlText:null,image08:null,image08Url:null,image08UrlText:null,image09:null,image09Url:null,image09UrlText:null,image10:null,image10Url:null,image10UrlText:null,adv_height:!1}},components:{Carousel:X["Carousel"],Slide:X["Slide"]},methods:{processData:function(t){var e=t.properties;this.mapBasicBlockProperties(e),e.autoplay&&(this.autoplay=e.autoplay),e.autoplayTimeout&&(this.autoplayTimeout=e.autoplayTimeout),e.slideQtyInMobile&&(this.slideQtyInMobile=e.slideQtyInMobile),e.slideQtyInTablet&&(this.slideQtyInTablet=e.slideQtyInTablet),e.slideQtyInDesktop&&(this.slideQtyInDesktop=e.slideQtyInDesktop),e.image01&&(this.image01=e.image01,e.image01UrlText&&(this.image01UrlText=e.image01UrlText,e.image01Url&&(this.image01Url=e.image01Url))),e.image02&&(this.image02=e.image02,e.image02UrlText&&(this.image02UrlText=e.image02UrlText,e.image02Url&&(this.image02Url=e.image02Url))),e.image03&&(this.image03=e.image03,e.image03UrlText&&(this.image03UrlText=e.image03UrlText,e.image03Url&&(this.image03Url=e.image03Url))),e.image04&&(this.image04=e.image04,e.image04UrlText&&(this.image04UrlText=e.image04UrlText,e.image04Url&&(this.image04Url=e.image04Url))),e.image05&&(this.image05=e.image05,e.image05UrlText&&(this.image05UrlText=e.image05UrlText,e.image05Url&&(this.image05Url=e.image05Url))),e.image06&&(this.image06=e.image06,e.image06UrlText&&(this.image06UrlText=e.image06UrlText,e.image06Url&&(this.image06Url=e.image06Url))),e.image07&&(this.image07=e.image07,e.image07UrlText&&(this.image07UrlText=e.image07UrlText,e.image07Url&&(this.image07Url=e.image07Url))),e.image08&&(this.image08=e.image08,e.image08UrlText&&(this.image08UrlText=e.image08UrlText,e.image08Url&&(this.image08Url=e.image08Url))),e.image09&&(this.image09=e.image09,e.image09UrlText&&(this.image09UrlText=e.image09UrlText,e.image09Url&&(this.image09Url=e.image09Url))),e.image10&&(this.image10=e.image10,e.image10UrlText&&(this.image10UrlText=e.image10UrlText,e.image10Url&&(this.image10Url=e.image10Url))),e.adv_height&&""!=e.adv_height&&"0"!=e.adv_height&&0!=e.adv_height&&(this.adv_height=parseInt(e.adv_height)+"px"),this.switchToReal=!0}}},z=Y,W=(i("b999"),Object(d["a"])(z,Q,F,!1,null,null,null)),K=W.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("div",{class:"CT_CREATE_USER_ACCOUNT rf-title-margin-div "+t.displays,attrs:{"no-gutters":"",id:"CT_CREATE_USER_ACCOUNT_"+t.blockInfo.id}},[i("b-row",{staticClass:"rf-title-margin",attrs:{"no-gutters":""}},[t.title?i("b-col",{staticClass:"rf-block-title rf-neutral rf-background-primary",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()],1),i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"1"}}),i("b-col",{attrs:{md:"10"}},[t.show?i("b-form",{staticClass:"mb-3",staticStyle:{"margin-top":"27px"},attrs:{id:"form_register"},on:{submit:t.onSubmit,reset:t.onReset}},[i("b-form-group",{attrs:{id:"input-group-2",label:"Personal Info","label-for":"input-2"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Name"},model:{value:t.form.input_firstname,callback:function(e){t.$set(t.form,"input_firstname",e)},expression:"form.input_firstname"}})],1),i("b-col",{attrs:{md:"6"}},[i("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"Surname"},model:{value:t.form.input_lastname,callback:function(e){t.$set(t.form,"input_lastname",e)},expression:"form.input_lastname"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-input",{attrs:{id:"input-9",required:"",placeholder:"Telephone / Mobile"},model:{value:t.form.input_mobile,callback:function(e){t.$set(t.form,"input_mobile",e)},expression:"form.input_mobile"}})],1),i("b-col",{attrs:{md:"6"}})],1)],1),i("b-form-group",{attrs:{id:"input-group-1",label:"Login Info","label-for":"input-1"}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"12"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Email"},model:{value:t.form.input_email,callback:function(e){t.$set(t.form,"input_email",e)},expression:"form.input_email"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-input",{attrs:{id:"input-6",type:"password",required:"",placeholder:"Password"},model:{value:t.form.input_password,callback:function(e){t.$set(t.form,"input_password",e)},expression:"form.input_password"}})],1),i("b-col",{attrs:{md:"6"}},[i("b-form-input",{attrs:{id:"input-7",type:"password",required:"",placeholder:"Confirm Password"},model:{value:t.form.input_confirm_password,callback:function(e){t.$set(t.form,"input_confirm_password",e)},expression:"form.input_confirm_password"}})],1)],1)],1),i("b-form-group",{attrs:{id:"input-group-4"}},[i("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[i("b-form-checkbox",{attrs:{required:"required",value:"termsAndConditions"},on:{change:function(e){return t.onCheckTermsAndConditions(e)}}},[t._v("I agree with the Terms & Conditions\n                        ")])],1),t.error_terms_and_conditions?i("div",{staticClass:"error_message"},[i("span",{staticStyle:{"font-size":"10px",color:"red"}},[t._v("You must agree with our Terms & Conditions to be able to register")])]):t._e(),t.response.status?i("div",[i("span",{staticStyle:{color:"green","font-weight":"bold"}},[t._v(t._s(t.response.message))])]):i("div",{staticStyle:{width:"96%",padding:"2%",color:"red","font-weight":"bold"}},[i("span",[t._v(t._s(t.response.message))])])],1),t.rf_loading?i("i",{staticClass:"fas fa-spinner fa-2x fa-spin"}):i("div",[i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),i("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1):t._e()],1),i("b-col",{attrs:{md:"1"}})],1)],1):i("b-row",{staticClass:"CT_CREATE_USER_ACCOUNT",attrs:{"no-gutters":""}},[t.title?i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line"},[i("p",{staticClass:"simple-paragraph"},[t._v(t._s(t.error_info))])])]):t._e(),i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-img",staticStyle:{height:"350px"}})])])],1)},J=[],Z={extends:k,data:function(){return{rf_loading:!1,form:{input_email:"",input_firstname:"",input_mobile:"",input_lastname:"",input_password:"",input_confirm_password:"",checked:[]},show:!0,error_terms_and_conditions:!1,response:{success:!0,message:null}}},methods:{processData:function(t){var e=t.properties;if(this.mapBasicBlockProperties(e),this.isAuthenticated)return this.error_info="You are already logged in. You should log out first.",!1;this.switchToReal=!0},onSubmit:function(t){var e=this;if(t.preventDefault(),this.rf_loading=!0,this.form.checked.indexOf("termsAndConditions")<0)return this.error_terms_and_conditions=!0,this.rf_loading=!1,!1;this.error_terms_and_conditions=!1,_.a.post(this.$store.state.api.userRegister,{input_email:this.form.input_email,input_lastname:this.form.input_lastname,input_firstname:this.form.input_firstname,input_mobile:this.form.input_mobile,input_password:this.form.input_password,input_confirm_password:this.form.input_confirm_password}).then((function(t){var i=t.data;i.success,e.response.success=i.success,e.response.message=i.message,e.rf_loading=!1})).catch((function(t){var i=t.response.status;403==i?console.log("User do not have access to block"):404==i?console.log("Block not found"):401==i?console.log("Unauthorized access"):console.log("Error loading block"),e.rf_loading=!1}))},onCheckTermsAndConditions:function(t){this.form.checked.indexOf("termsAndConditions")<0?this.error_terms_and_conditions=!1:this.error_terms_and_conditions=!0},onReset:function(t){var e=this;t.preventDefault(),this.form.input_email="",this.form.input_firstname="",this.form.input_lastname="",this.form.input_mobile="",this.form.input_password="",this.form.input_confirm_password="",this.form.checked=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},tt=Z,et=(i("ad86"),Object(d["a"])(tt,V,J,!1,null,null,null)),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("b-row",{class:"CT_USER_ACTIVATE_ACCOUNT "+t.displays,attrs:{id:"CT_USER_ACTIVATE_ACCOUNT_"+t.blockInfo.id}},[t.title?i("b-col",{staticClass:"rf-block-title rf-primary",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t.follow_up?i("i",{staticClass:"fas fa-spinner fa-3x fa-spin"}):t._e()]):t._e(),t.error_message?i("b-col",{staticClass:"rf-warning",attrs:{md:"12"}},[i("i",{staticClass:"fas fa-exclamation-triangle fa-3x"}),i("br"),i("br"),i("h3",{staticClass:"title"},[t._v(t._s(t.error_message))])]):t._e(),t.follow_up?i("b-col",{staticClass:"rf-secondary",attrs:{md:"12"}},[i("br"),i("br"),i("h3",{staticClass:"title"},[t._v(t._s(t.follow_up))])]):t._e(),i("br"),i("br"),i("br"),i("br")],1):i("div",{staticClass:"CT_USER_ACTIVATE_ACCOUNT"},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-text-line"},[i("p",{staticClass:"simple-paragraph"},[t._v(t._s(t.error_info))])]),i("i",{staticClass:"fas fa-spinner fa-3x fa-spin mockup-spinner"})])])],1)],1)},at=[],rt={extends:k,data:function(){return{error_message:!1,follow_up:!1}},methods:{processData:function(t){var e=this,i=t.properties;if(this.mapBasicBlockProperties(i),this.isAuthenticated)return this.error_info="You are already logged in. You should log out first.",!1;if(this.switchToReal=!0,this.$route.params.activation_token){var s=this.$route.params.activation_token;this.follow_up="Requesting your activation...",_.a.get(this.$store.state.api.userActivateAccount+"/"+s).then((function(t){var i=t.data;e.follow_up="Activating...",i.success?(e.follow_up=i.message,setTimeout(function(){this.$router.push({path:"/login",query:{success:!0}})}.bind(e),2e3)):setTimeout(function(){this.follow_up=!1,this.error_message=i.message}.bind(e),2e3)})).catch((function(t){var i=t.response.status;403==i?console.log("User do not have access to block"):404==i?console.log("Block not found"):401==i?console.log("Unauthorized access"):console.log("Error loading block"),e.error_message="An error occured during the activation of your account",console.log("Error activating the account: "+t)}))}else this.error_message="Invalid activation link"}}},ot=rt,lt=(i("d247"),Object(d["a"])(ot,st,at,!1,null,null,null)),nt=lt.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("div",{class:"CT_USER_LOGIN rf-title-margin-div "+t.displays,attrs:{id:"CT_USER_LOGIN_"+t.blockInfo.id}},[i("b-row",{staticClass:"rf-title-margin",attrs:{"no-gutters":""}},[t.title?i("b-col",{staticClass:"rf-block-title rf-neutral rf-background-secondary",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()],1),i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"1"}}),i("b-col",{attrs:{md:"10"}},[t.show?i("b-form",{staticClass:"mb-3",staticStyle:{"margin-top":"27px"},attrs:{id:"form_register"},on:{submit:t.onSubmit}},[i("b-form-group",{attrs:{id:"input-group-1",label:"Login Info","label-for":"input-1"}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"12"}},[i("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Email"},model:{value:t.form.input_email,callback:function(e){t.$set(t.form,"input_email",e)},expression:"form.input_email"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-input",{attrs:{id:"input-6",type:"password",required:"",placeholder:"Password"},model:{value:t.form.input_password,callback:function(e){t.$set(t.form,"input_password",e)},expression:"form.input_password"}})],1)],1)],1),t.rf_loading?i("b-button",{staticClass:"btn-block",attrs:{type:"button",variant:"neutral"}},[i("i",{staticClass:"fas fa-spinner fa-2x fa-spin"})]):i("div",[i("b-button",{staticClass:"btn-block",attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1)],1):t._e(),t.error_message?i("b-row",[i("b-col",{staticClass:"rf-warning",attrs:{md:"12"}},[i("p",[i("i",{staticClass:"fas fa-exclamation-triangle fa-2x"}),t._v(" "+t._s(t.error_message))])])],1):i("div"),t.follow_up?i("b-row",[i("b-col",{staticClass:"rf-success",attrs:{md:"12"}},[i("p",[t._v(t._s(t.follow_up))])])],1):i("div")],1),i("b-col",{attrs:{md:"1"}})],1)],1):i("div",{staticClass:"CT_USER_LOGIN",attrs:{"no-gutters":"",id:"MOCKUP_CT_USER_LOGIN_"+t.blockInfo.id}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-text-line"},[i("p",{staticClass:"simple-paragraph"},[t._v(t._s(t.error_info))])])]),i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-img",staticStyle:{height:"350px"}})])],1)],1)},ut=[],mt={extends:k,data:function(){return{rf_loading:!1,form:{input_email:"",input_password:""},show:!0,error_message:!1,follow_up:!1}},methods:{processData:function(t){var e=t.properties;if(this.mapBasicBlockProperties(e),this.isAuthenticated)return this.error_info="You are already logged in. You should log out first.",!1;this.switchToReal=!0},onSubmit:function(t){var e=this;t.preventDefault(),this.rf_loading=!0;var i=new FormData;i.append("email",this.form.input_email),i.append("password",this.form.input_password),_.a.post(this.$store.state.api.userLogin,i).then((function(t){var i=t.data;if(i.success){e.error_message=!1,e.follow_up="Logged In.";var s={email:i.email,token:i.token,roles:i.roles,user_id:i.user_id,user_name:i.user_name};if(e.$store.dispatch("setAuthInfo",s),e.$route.query.redirectUrl){var a=e.$route.query.redirectUrl;window.location.href=a}else window.location.href=e.$store.state.frontOfficeUrl}else e.follow_up=!1,e.error_message=i.message;e.rf_loading=!1})).catch((function(t){var i=t.response.status;403==i?(e.error_message="You do not have access to this contet",console.log("User do not have access to block: "+blockId)):404==i?(e.error_message="An error occured while trying to sign you in. ",console.log("Block not found: "+blockId)):401==i?(e.error_message="Invalid Credentials. Please contact us",console.log("Error 401 while logging: "+response.data.message)):(e.error_message="An error occured while trying to sign you in. ",console.log("Error loading block: "+blockId)),console.log("An error occured while trying to sign you in. "+t),e.error_message="An error occured while trying to sign you in. ",e.rf_loading=!1}))}}},dt=mt,gt=(i("c6ac"),Object(d["a"])(dt,ct,ut,!1,null,null,null)),pt=gt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.switchToReal?i("div",{class:"CT_USER_LOGOUT "+t.displays,attrs:{id:"CT_USER_LOGOUT_"+t.blockInfo.id}},[i("b-row",{attrs:{"no-gutters":""}},[t.title?i("b-col",{staticClass:"rf-block-title rf-primary",attrs:{md:"12"}},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))])]):t._e()],1),i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{staticClass:"rf-secondary",staticStyle:{"text-align":"center"},attrs:{md:"12"}},[t.follow_up?i("i",{staticClass:"fas fa-spinner fa-3x fa-spin"}):t._e(),i("br"),i("br"),i("h3",{staticClass:"title"},[t._v(t._s(t.follow_up))])])],1)],1):i("div",{staticClass:"CT_TEMPLATE",attrs:{id:"MOCKUP_CT_USER_LOGOUT_"+t.blockInfo.id}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"mockup-paragraph"},[i("div",{staticClass:"mockup-text-line"},[i("p",{staticClass:"simple-paragraph"},[t._v(t._s(t.error_info))])]),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"}),i("div",{staticClass:"mockup-text-line"})])])],1)],1)},ft=[],bt={extends:k,data:function(){return{}},methods:{processData:function(t){var e=this;console.log("Processing CT_USER_LOGOUT block: "+t.id),console.log(t);var i=t.properties;if(this.mapBasicBlockProperties(i),!this.isAuthenticated)return this.error_info="You are not logged in",this.follow_up=!1,!1;this.follow_up="Please wait while we try to log you out.",_.a.get(this.$store.state.api.userLogout+"?"+this.$store.getters.getUrlToken).then((function(t){var i=t.data;e.follow_up=i.message,e.$store.dispatch("removeAuthInfo"),window.location.href=e.$store.state.frontOfficeUrl})).catch((function(t){console.log("error"),console.log(t);var i=t.response.status;403==i?console.log("User do not have access to block"):404==i?console.log("Block not found"):401==i?console.log("Unauthorized access"):console.log("Error loading block"),e.error_message="An error occured during the activation of your account",console.log("Error logging out: "+t)})),this.switchToReal=!0}}},_t=bt,vt=(i("dd84"),Object(d["a"])(_t,ht,ft,!1,null,null,null)),Ct=vt.exports,kt={"rf-slot":p,CT_MENU_MAIN:U,CT_HALF_IMAGE_HALF_TEXT:A,CT_ONE_THIRD_IMAGE_TWO_THIRD_TEXT:j,CT_FULL_TEXT:q,CT_SLIDER_THUMBNAIL:K,CT_CREATE_USER_ACCOUNT:it,CT_USER_ACTIVATE_ACCOUNT:nt,CT_USER_LOGIN:pt,CT_USER_LOGOUT:Ct};function Tt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function wt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Tt(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Tt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]={components:wt({},kt),pwa:{},props:["pageInfo"],metaInfo:function(){var t=this.pageInfo.name;null!=this.pageInfo.seoTitle&&(t=this.pageInfo.seoTitle);var e=this.pageInfo.seoAllowRobot;return e=e?"index,follow":"noindex,nofollow",{title:t,titleTemplate:"%s | "+this.$store.state.siteName,meta:[{vmid:"description",name:"description",content:this.pageInfo.seoMetaDescription},{vmid:"author",name:"author",content:this.pageInfo.seoAuthor},{vmid:"keywords",name:"keywords",content:this.pageInfo.seoKeywords},{vmid:"robots",name:"robots",content:e}]}},data:function(){this.$store.dispatch("setPageInfo",this.pageInfo);this.$route.path,this.$route.params,this.$route.query;return{}}}},d247:function(t,e,i){"use strict";var s=i("b6cf"),a=i.n(s);a.a},d705:function(t,e,i){},dd84:function(t,e,i){"use strict";var s=i("b4e1"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-5c8f67a3.f215390c.js.map