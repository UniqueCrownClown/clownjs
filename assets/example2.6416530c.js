import{s as g}from"./index.es.122cb768.js";import{b as u}from"./global.c22c387c.js";import{_ as f,d as v,a as d,r as h,o as t,g as o,i as s,F as r,k as m,m as k,y,t as w}from"./index.4270ec1d.js";const D=v({components:{AnimationDialog:g},setup(){const e=d(),l=d(0);return{dialog:e,imgList:Array.from({length:9},(n,a)=>`${u}images/img/${a+1}.jpg`),active:0,handleShowDialog(n,a){l.value=a+1,e.value.open(n.currentTarget)}}}}),$={class:"wrapper"},C=["onClick"],x=["src"],A={class:"dialog-content"};function L(e,l,n,a,b,B){const _=h("AnimationDialog");return t(),o(r,null,[s("div",$,[(t(!0),o(r,null,m(e.imgList,(i,c)=>(t(),o("div",{key:c,class:"box",onClick:p=>e.handleShowDialog(p,c)},[s("img",{src:i,alt:"image"},null,8,x)],8,C))),128)),(t(),o(r,null,m(9,i=>s("div",{key:"fake"+i,class:"fake"})),64))]),k(_,{ref:"dialog","open-from-itself":!0,"listen-window-size-change":!0},{default:y(()=>[s("div",A," #"+w(e.active),1)]),_:1},512)],64)}var V=f(D,[["render",L],["__scopeId","data-v-003e52d3"]]);export{V as default};