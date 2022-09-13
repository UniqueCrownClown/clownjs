import{d as ie,a as b,e as ae,w as N,A as oe,o as l,c as I,g as c,F as T,k as D,n as L,j as q,h as z,B as E,G as _e,l as f,i as x,t as F,C as $,T as ue,E as V,H as se,I as de}from"./index.8b12b012.js";import{_ as G}from"./tslib.es6.5df10ac3.js";function re(e,_,n){let a=document.createElement(e);return a.setAttribute("class",_),n&&(a.innerText=n),a}const Y=function(e){let _=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?_[n]=Y(e[n]):_[n]=e[n]);return _};var g=ie({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const _=b(0),n=b(0),a=b(!1),s=b(0),p=b(0),t=b(!1),h=b(null),r=b([]),k=ae(()=>e.menuList.some(o=>o.children&&o.children.length>0)),y=b(10),M=b();N(t,o=>G(this,void 0,void 0,function*(){var u,d;if(o){yield V();let m=M.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(v=>{m.style.setProperty(`--menu-${v}`,e.menuWrapperCss&&e.menuWrapperCss[v])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(v=>{m.style.setProperty(`--menu-item-${v}`,e.menuItemCss&&e.menuItemCss[v])});let i=(d=(u=e.menuItemCss)===null||u===void 0?void 0:u.arrowSize)===null||d===void 0?void 0:d.match(/\d+/);i?y.value=~~i[0]||10:y.value=10,m.style.setProperty("--menu-item-arrowRealSize",y.value/2+"px")}}));const K=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&o.fn(e.params,h.value,e.el,u),t.value=!1)},Q=(o,u)=>{o.disabled||(o.fn&&typeof o.fn=="function"&&!o.disabled&&(o.fn(e.params,h.value,e.el,u),a.value=!1),t.value=!1)},Z=(o,u)=>{if(u.children&&!u.disabled){a.value=!0;const d=o.currentTarget;if(!d)return;const{offsetWidth:m}=d,i=d.querySelector(".__menu__sub__wrapper");if(!i)return;const{offsetWidth:v,offsetHeight:S}=i,{innerWidth:te,innerHeight:j}=window,{top:R,left:H}=d.getBoundingClientRect();H+m+v>te-5?_.value=H-v+5:_.value=H+m,R+S>j-5?n.value=j-S:n.value=R+5}},A=(o,u,d,m)=>o.map(i=>(i.children&&(i.children=A(i.children,u,d,m)),i.label&&typeof i.label=="function"&&(i.label=i.label(m,u,d)),i.tips&&typeof i.tips=="function"&&(i.tips=i.tips(m,u,d)),i.icon&&typeof i.icon=="function"&&(i.icon=i.icon(m,u,d)),i.hidden&&typeof i.hidden=="function"&&(i.hidden=i.hidden(m,u,d)),i.disabled&&typeof i.disabled=="function"&&(i.disabled=i.disabled(m,u,d)),i)),ee=(o=0,u=0)=>G(this,void 0,void 0,function*(){if(h.value=document.elementFromPoint(o-1,u-1),e.menuHiddenFn?t.value=!e.menuHiddenFn(e.params,h.value,e.el):t.value=!0,!t.value)return;r.value=Y(e.menuList),r.value=A(r.value,h.value,e.el,e.params),yield V();const{innerWidth:d,innerHeight:m}=window,v=M.value.offsetHeight,S=e.menuWidth||200;p.value=o+S+1>d?d-S-5:o+1,s.value=u+v+1>m?m-v-5:u+1}),ne=()=>{t.value=!1},P=o=>{M.value&&!M.value.contains(o.currentTarget)&&(t.value=!1,document.oncontextmenu=null)};return N(()=>e.injectCloseListener,o=>{o?document.addEventListener("mousedown",P):document.removeEventListener("mousedown",P)},{immediate:!0}),oe(()=>{document.removeEventListener("mousedown",P)}),{subLeft:_,subTop:n,hoverFlag:a,menuTop:s,menuLeft:p,showMenu:t,clickDomEl:h,calcMenuList:r,arrowSize:y,hasSubMenu:k,MenuWrapper:M,handleMenuItemClick:K,handleSubMenuItemClick:Q,handleMenuMouseEnter:Z,show:ee,close:ne}}});const me=["onMousedown","onMouseenter"],le={key:0,class:"__menu__item-icon"},ce=["innerHTML"],ve={class:"__menu__item-label"},be={class:"__menu__item-tips"},he={class:"__menu__item-arrow-after"},fe=["onMousedown"],pe={class:"__menu__sub__item-label"},we={class:"__menu__sub__item-tips"};function ge(e,_,n,a,s,p){return l(),I(ue,{to:"body",disabled:!e.appendToBody},[e.showMenu?(l(),c("div",{key:0,ref:"MenuWrapper",class:L(["__menu__wrapper",e.customClass]),style:$({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(l(!0),c(T,null,D(e.calcMenuList,(t,h)=>(l(),c(T,null,[!t.hidden&&!t.line?(l(),c("div",{key:h,class:L(["__menu__item",t.disabled&&"disabled",t.customClass]),onMousedown:q(r=>e.handleMenuItemClick(t,r),["stop"]),onMouseenter:r=>e.handleMenuMouseEnter(r,t)},[e.hasIcon?(l(),c("div",le,[e.iconType==="font-icon"?z((l(),c("i",{key:0,class:L(t.icon)},null,2)),[[E,t.icon]]):e.iconType==="svg-icon"?z((l(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:t.icon},null,8,ce)),[[E,t.icon]]):e.iconType==="vnode-icon"?(l(),I(_e(t.icon),{key:2})):f("v-if",!0)])):f("v-if",!0),x("span",ve,F(t.label),1),x("span",be,F(t.tips||""),1),e.hasSubMenu?(l(),c("span",{key:1,class:L(["__menu__item-arrow",{show:e.hasSubMenu&&t.children}]),style:$({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[z(x("span",he,null,512),[[E,e.hasSubMenu&&t.children]])],6)):f("v-if",!0),t.children&&t.children.length>0?z((l(),c("div",{key:2,class:"__menu__sub__wrapper",style:$({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(l(!0),c(T,null,D(t.children,(r,k)=>(l(),c(T,null,[!r.hidden&&!r.line?(l(),c("div",{key:k,class:L(["__menu__sub__item",r.disabled&&"disabled",r.customClass]),onMousedown:q(y=>e.handleSubMenuItemClick(r,y),["stop"])},[x("span",pe,F(r.label),1),x("span",we,F(r.tips||""),1)],42,fe)):f("v-if",!0),r.line?(l(),c("div",{key:k,class:"__menu__line"})):f("v-if",!0)],64))),256))],4)),[[E,e.hoverFlag]]):f("v-if",!0)],42,me)):f("v-if",!0),!t.hidden&&t.line?(l(),c("div",{key:h,class:"__menu__line"})):f("v-if",!0)],64))),256))],6)):f("v-if",!0)],8,["disabled"])}function ye(e,_){_===void 0&&(_={});var n=_.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Ce=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;ye(Ce);g.render=ge;g.__scopeId="data-v-3d21bc0a";g.__file="packages/mouse-menu/mouse-menu.vue";g.install=e=>{e.component(g.name,g)};function U(e){var _;const n="__mouse__menu__container";let a;document.querySelector(`.${n}`)?a=document.querySelector(`.${n}`):a=re("div",n);const s=se(g,e);return de(s,a),document.body.appendChild(a),(_=s.component)===null||_===void 0?void 0:_.proxy}let C,W,O,w;function Me(e,_,n=500){O=a=>{C&&C.close(),a.preventDefault(),W&&clearTimeout(W),W=window.setTimeout(()=>{_(a)},n)},w=()=>{clearTimeout(W)},e.addEventListener("touchstart",O),e.addEventListener("touchmove",w),e.addEventListener("touchend",w),e.addEventListener("touchcancel",w)}function J(e){e.removeEventListener("touchstart",O),e.removeEventListener("touchmove",w),e.removeEventListener("touchend",w),e.removeEventListener("touchcancel",w)}let B,X;const Se=(e,_)=>{const{value:n}=_;if(n.menuList.length>0)B=a=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;a.preventDefault();const s=U(Object.assign({el:e},n)),{x:p,y:t}=a;s.show(p,t)},e.removeEventListener("contextmenu",B),e.addEventListener("contextmenu",B),n.useLongPressInMobile&&"ontouchstart"in window&&(X=a=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;a.preventDefault(),C=U(Object.assign({el:e},n));const{touches:s}=a,{clientX:p,clientY:t}=s[0];C.show(p,t),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>C.close(),e.onmousedown=()=>C.close()},500)},J(e),Me(e,X,n.longPressDuration||500));else throw new Error("At least set one menu list!")},Le=e=>{e.removeEventListener("contextmenu",B),"touchstart"in window&&J(e)},Te={mounted:Se,unmounted:Le};export{Te as M};
