import{M as i}from"./index.es.119dc6d8.js";import{_ as a,d as l,f as r,h as u,o as c,g as p,i as _,t as d}from"./index.f2d6de6d.js";const m=l({directives:{MouseMenu:i},setup(){return{isMobile:"ontouchstart"in window,options:{params:{a:1},useLongPressInMobile:!0,menuList:[{label:"\u6253\u5F00",tips:"Open",fn:(e,s,o,t)=>console.log("open",e,s,o,t)},{label:"\u7F16\u8F91",tips:"Edit",fn:(e,s,o,t)=>console.log("edit",e,s,o,t)},{label:"\u5220\u9664",tips:"Delete",fn:(e,s,o,t)=>console.log("delete",e,s,o,t)},{label:"\u91CD\u547D\u540D",tips:"Rename",fn:(e,s,o,t)=>console.log("rename",e,s,o,t)}]}}}}),f={class:"box"},v={class:"text"};function b(e,s,o,t,g,h){const n=r("mouse-menu");return u((c(),p("div",f,[_("p",v,d(e.isMobile?"Long press this box":"Right click this box")+". ",1)])),[[n,e.options]])}var M=a(m,[["render",b],["__scopeId","data-v-7f8ad0ab"]]);export{M as default};