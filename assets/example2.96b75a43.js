import{R as l}from"./index.es.a7b2b38f.js";import{_,d as p,a as r,f as h,o as a,g as d,i,h as v,q as f,s as u}from"./index.e4c9935d.js";const x=p({directives:{resize:l},setup(){const e=r(),t=r();return{box1:e,box3:t,options:{direction:["left","right"]},handleResize(s){console.log("resizeEvent",s);let o=s.target;s.direction==="left"?(o.style.width=`${s.resizeWidthPercent}%`,e.value.style.width=`${s.moveOffsetPercent}%`):s.direction==="right"&&(o.style.width=`${s.resizeWidthPercent}%`,t.value.style.width=`${100-s.moveOffsetPercent}%`)}}}}),z=e=>(f("data-v-14bda08d"),e=e(),u(),e),m={class:"page"},b={class:"wrapper"},g={ref:"box1",class:"box1"},$=z(()=>i("p",{class:"text"}," Set this box resize left & right ",-1)),w=[$],y={ref:"box3",class:"box3"};function R(e,t,s,o,I,P){const n=h("resize");return a(),d("div",m,[i("div",b,[i("div",g,null,512),v((a(),d("div",{class:"box2",onResize:t[0]||(t[0]=(...c)=>e.handleResize&&e.handleResize(...c))},w,32)),[[n,e.options]]),i("div",y,null,512)])])}var D=_(x,[["render",R],["__scopeId","data-v-14bda08d"]]);export{D as default};
