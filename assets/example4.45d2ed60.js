import{M as s}from"./index.es.eacd233c.js";import{_ as t,d as n,f as i,h as l,o as a,g as r,i as u,t as p}from"./index.e4c9935d.js";const c=n({directives:{MouseMenu:s},setup(){return{isMobile:"ontouchstart"in window,options:{useLongPressInMobile:!0,menuWrapperCss:{background:"linear-gradient(45deg, #3439e6, #EC6EAD)",boxShadow:"0 0 10px #ccc"},menuItemCss:{labelColor:"#fff",tipsColor:"#ccc",arrowColor:"#aaa",disabledColor:"#aaa"},menuList:[{label:"\u5237\u65B0",tips:"Refresh",fn:(...e)=>console.log("open",e)},{label:"\u67E5\u770B",tips:"Check",fn:(...e)=>console.log("open",e),disabled:()=>!0},{line:!0},{label:"\u64CD\u4F5C",tips:"Operation",children:[{label:"\u6253\u5F00",tips:"Open",fn:(...e)=>console.log("open",e)},{label:"\u7F16\u8F91",tips:"Edit",disabled:()=>!0,fn:(...e)=>console.log("open",e)},{label:"\u5220\u9664",tips:"Delete",fn:(...e)=>console.log("open",e)},{label:"\u91CD\u547D\u540D",tips:"Rename",fn:(...e)=>console.log("open",e),hidden:()=>!0}]},{label:"\u8BBE\u7F6E",tips:"Setting"}]}}}}),d={class:"box"},_={class:"text"};function b(e,f,m,g,h,v){const o=i("mouse-menu");return l((a(),r("div",d,[u("p",_,p(e.isMobile?"Long press this box, but it don not support children menu":"Right click this box")+". ",1)])),[[o,e.options]])}var D=t(c,[["render",b],["__scopeId","data-v-64ff7424"]]);export{D as default};
