import{_ as B}from"./tslib.es6.5df10ac3.js";import{d as E,a as w,e as H,z as A,A as M,o as k,c as q,h as D,B as j,i as l,C as V,n as S,g as T,D as x,l as z,j as U,T as G,E as b,t as J,q as K,s as P}from"./index.8b12b012.js";function Q(n,a){const e=a.parentNode;e.lastChild===a?e.appendChild(n):e.insertBefore(n,a.nextSibling)}var f=E({name:"AnimationDialog",props:{width:{type:String,default:"60vw"},height:{type:String,default:"70vh"},animationMode:{type:Boolean,default:!1},animationIn:{type:String,default:"bounceIn"},animationOut:{type:String,default:"bounceOut"},time:{type:Number,default:500},timingFunction:{type:String,default:"ease-in-out"},openFromItself:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},customClass:String,customWrapperClass:String,listenWindowSizeChange:{type:Boolean,default:!1},debounceWait:{type:Number,default:200},title:{type:String},closeOnClickOutside:{type:Boolean,default:!0}},emits:["beforeClose","close"],setup(n,{emit:a}){const e=w(),o=w(),t=w(),m=H(()=>n.time/1e3);let r=null;const $=()=>{r&&clearTimeout(r),r=setTimeout(()=>B(this,void 0,void 0,function*(){const{width:s,height:d}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${s/2}px`,e.value.top=`calc(50% - ${d/2}px)`,yield b();const{top:c,left:u,width:h,height:v}=e.value.getBoundingClientRect();t.value.style.top=`${c}px`,t.value.style.left=`${u}px`,t.value.style.width=`${h}px`,t.value.style.height=`${v}px`}),n.debounceWait)};A(()=>{n.listenWindowSizeChange&&window.addEventListener("resize",$)}),M(()=>{n.listenWindowSizeChange&&window.removeEventListener("resize",$)});const p=w(!1);let i=null,g=null;const W=s=>B(this,void 0,void 0,function*(){if(n.animationMode){p.value=!0,yield b();const{width:d,height:c}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${d/2}px`,e.value.style.top=`calc(50% - ${c/2}px)`,yield b();const{top:u,left:h,width:v,height:y}=e.value.getBoundingClientRect();t.value.style.cssText=`top:${u}px; 
                                    left: ${h}px;
                                    width: ${v}px;
                                    height: ${y}px;
                                    animation: ${n.animationIn} ${m.value}s forwards`}else{p.value=!0,i=s?typeof s=="string"?document.querySelector(s):s:o.value,i.classList.add("is-open"),yield b();const{top:d,left:c,width:u,height:h}=i.getBoundingClientRect();t.value.classList.add("animating"),t.value.style.cssText=`top:${d}px; left: ${c}px;width: ${u}px;height: ${h}px;`;const{width:v,height:y}=e.value.getBoundingClientRect();e.value.style.left=`calc(50% - ${v/2}px`,e.value.style.top=`calc(50% - ${y/2}px)`,n.openFromItself&&(g=i.cloneNode(!0),i.style.visibility="hidden",Q(g,i),g.style.cssText="position:absolute;top:0;left:0;right:0;bottom:0;margin:0;width: auto;height:auto;",t.value.querySelector(".dialog-body").appendChild(g)),yield b();const{top:_,left:F,width:N,height:R}=e.value.getBoundingClientRect();t.value.style.cssText=`top:${_}px; 
                                    left: ${F}px;
                                    width: ${N}px;
                                    height: ${R}px;
                                    transition: ${m.value}s all ${n.timingFunction}`,setTimeout(()=>{t.value.classList.remove("animating")},n.time+10)}}),L=()=>{n.closeOnClickOutside&&C()},C=()=>{if(n.animationMode)t.value.style.animation=`${n.animationOut} ${m.value}s forwards`,a("beforeClose"),setTimeout(()=>{p.value=!1,a("close")},n.time-10);else{if(!i)return;const{top:s,left:d,width:c,height:u}=i.getBoundingClientRect();t.value.classList.add("animating"),t.value.style.cssText=`top:${s}px; 
                                    left: ${d}px;
                                    width: ${c}px;
                                    height: ${u}px;
                                    transition: ${m.value}s all ${n.timingFunction};`,a("beforeClose"),setTimeout(()=>{i&&(i.classList.remove("is-open"),t.value.classList.remove("animating"),p.value=!1,n.openFromItself&&(i.style.visibility="visible",t.value.querySelector(".dialog-body").removeChild(g))),a("close")},n.time+100)}};return{open:W,close:C,staticFake:e,centerFake:o,main:t,show:p,clickOutside:L}}});const I=n=>(K("data-v-1424118a"),n=n(),P(),n),X={ref:"centerFake",class:"dialog-center-fake"},Y=I(()=>l("span",{class:"line"},null,-1)),Z=I(()=>l("span",{class:"line"},null,-1)),nn=[Y,Z],tn={key:0,class:"dialog-title"},en={class:"dialog-static-title"},an={class:"dialog-body"},on={key:1,class:"dialog-footer"};function ln(n,a,e,o,t,m){return k(),q(G,{to:"body",disabled:!n.appendToBody},[D(l("div",{class:S(["animation-dialog-wrapper",n.customWrapperClass]),onClick:a[1]||(a[1]=U((...r)=>n.clickOutside&&n.clickOutside(...r),["self"]))},[l("div",{ref:"staticFake",class:"dialog-static-fake",style:V({width:n.width,height:n.height})},null,4),l("div",X,null,512),l("div",{ref:"main",class:S(["dialog",n.customClass])},[l("div",{class:"icon-close",onClick:a[0]||(a[0]=(...r)=>n.close&&n.close(...r))},nn),n.$slots.title||n.title?(k(),T("div",tn,[x(n.$slots,"title",{},()=>[l("div",en,J(n.title),1)])])):z("v-if",!0),l("div",an,[x(n.$slots,"default")]),n.$slots.footer?(k(),T("div",on,[x(n.$slots,"footer")])):z("v-if",!0)],2)],2),[[j,n.show]])],8,["disabled"])}function O(n,a){a===void 0&&(a={});var e=a.insertAt;if(!(!n||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}var sn=`.animation-dialog-wrapper[data-v-1424118a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 100001;
}
.animation-dialog-wrapper .dialog-static-fake[data-v-1424118a] {
  position: absolute;
  visibility: hidden;
}
.animation-dialog-wrapper .dialog-center-fake[data-v-1424118a] {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  visibility: hidden;
}
.animation-dialog-wrapper .dialog[data-v-1424118a] {
  position: absolute;
  background: #fff;
  cursor: default;
  box-shadow: 0 0 5px #888;
  width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.animation-dialog-wrapper .dialog .dialog-body[data-v-1424118a] {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  flex: 1;
}
.animation-dialog-wrapper .dialog .dialog-title .dialog-static-title[data-v-1424118a] {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  padding-left: 20px;
}
.animation-dialog-wrapper .dialog .dialog-title .dialog-static-title[data-v-1424118a]:after {
  content: "";
  position: absolute;
  border-left: 4px solid #88aaff;
  height: 20px;
  top: 20px;
  left: 10px;
}
.animation-dialog-wrapper .dialog.animating .dialog-body[data-v-1424118a] {
  overflow: hidden;
}
.animation-dialog-wrapper .dialog .icon-close[data-v-1424118a] {
  width: 36px;
  height: 36px;
  position: absolute;
  right: 12px;
  top: 10px;
  background: transparent;
  cursor: pointer;
  z-index: 9999;
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a] {
  display: block;
  position: absolute;
  width: 20px;
  height: 2px;
  top: 17px;
  right: 8px;
  transform-origin: center;
  border-radius: 1px;
  background: #99a;
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a]:nth-child(1) {
  transform: rotate(45deg);
}
.animation-dialog-wrapper .dialog .icon-close .line[data-v-1424118a]:nth-child(2) {
  transform: rotate(-45deg);
}
.animation-dialog-wrapper .dialog .icon-close:hover .line[data-v-1424118a] {
  background: #667;
}`;O(sn);var rn=`\r
/* Inject default animate css mode */\r
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
from,\r
  20%,\r
  40%,\r
  60%,\r
  80%,\r
  to {\r
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
20% {\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
40% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
60% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r
    transform: scale3d(1.03, 1.03, 1.03);
}
80% {\r
    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r
    transform: scale3d(0.97, 0.97, 0.97);
}
to {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1, 1, 1);\r
    transform: scale3d(1, 1, 1);
}
}
@keyframes bounceIn {
from,\r
  20%,\r
  40%,\r
  60%,\r
  80%,\r
  to {\r
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
20% {\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
40% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
60% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r
    transform: scale3d(1.03, 1.03, 1.03);
}
80% {\r
    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r
    transform: scale3d(0.97, 0.97, 0.97);
}
to {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1, 1, 1);\r
    transform: scale3d(1, 1, 1);
}
}
.animate__bounceIn {\r
  -webkit-animation-duration: calc(1s * 0.75);\r
  animation-duration: calc(1s * 0.75);\r
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\r
  animation-duration: calc(var(--animate-duration) * 0.75);\r
  -webkit-animation-name: bounceIn;\r
  animation-name: bounceIn;
}\r
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
20% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
50%,\r
  55% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
to {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
}
@keyframes bounceOut {
20% {\r
    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r
    transform: scale3d(0.9, 0.9, 0.9);
}
50%,\r
  55% {\r
    opacity: 1;\r
    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r
    transform: scale3d(1.1, 1.1, 1.1);
}
to {\r
    opacity: 0;\r
    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r
    transform: scale3d(0.3, 0.3, 0.3);
}
}
.animate__bounceOut {\r
  -webkit-animation-duration: calc(1s * 0.75);\r
  animation-duration: calc(1s * 0.75);\r
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\r
  animation-duration: calc(var(--animate-duration) * 0.75);\r
  -webkit-animation-name: bounceOut;\r
  animation-name: bounceOut;
}\r
`;O(rn);f.render=ln;f.__scopeId="data-v-1424118a";f.__file="packages/animation-dialog/animation-dialog.vue";f.install=n=>{n.component(f.name,f)};export{f as s};
