import{_ as s,d as m,r as _,o as d,g as i,m as c,a as u,z as p,x as e,u as E}from"./index.e4c9935d.js";import{R}from"./ReadmeFrame.dfd71f81.js";function l(a){switch(a){case"../../packages/animation-dialog/README.md":return e(()=>import("./README.09e76863.js"),[]);case"../../packages/mouse-menu/README.md":return e(()=>import("./README.834b5a30.js"),[]);case"../../packages/resize/README.md":return e(()=>import("./README.36fff010.js"),[]);case"../../packages/shared/README.md":return e(()=>import("./README.dd82c228.js"),[]);case"../../packages/size-observer/README.md":return e(()=>import("./README.3eaf5b3f.js"),[]);case"../../packages/standard-tabs/README.md":return e(()=>import("./README.ade51c40.js"),[]);case"../../packages/yaml-edit/README.md":return e(()=>import("./README.bb9f5f48.js"),[]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+a)))})}}const f=m({name:"PageReadme",components:{ReadmeFrame:R},setup(){const t=E().name.replace("-readme",""),r=u("");return p(async()=>{const o=await l(`../../packages/${t}/README.md`);r.value=o.default}),{readme:r}}}),v={id:"Readme"};function D(a,t,r,o,A,k){const n=_("readme-frame");return d(),i("div",v,[c(n,{readme:a.readme},null,8,["readme"])])}var P=s(f,[["render",D]]);export{P as default};
