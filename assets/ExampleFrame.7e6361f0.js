import{d as z,a as v,b as V,e as L,w as O,_ as N,r as x,f as F,o as r,g as l,h as D,v as M,i as t,t as m,n as d,j as B,F as y,k as R,l as $,m as b,u as S,p as j,q as H,s as W,x as o}from"./index.0484a9b8.js";import{R as q}from"./index.es.a7b2b38f.js";var U="./images/Home.svg";function G(e){switch(e){case"../code/animation-dialog/example1.md":return o(()=>import("./example1.7e7d512f.js"),[]);case"../code/animation-dialog/example2.md":return o(()=>import("./example2.b1ff947c.js"),[]);case"../code/animation-dialog/example3.md":return o(()=>import("./example3.1a6705ed.js"),[]);case"../code/animation-dialog/example4.md":return o(()=>import("./example4.45782bf1.js"),[]);case"../code/mouse-menu/example1.md":return o(()=>import("./example1.34b9aa23.js"),[]);case"../code/mouse-menu/example2.md":return o(()=>import("./example2.2dc55c29.js"),[]);case"../code/mouse-menu/example3.md":return o(()=>import("./example3.ed9f860f.js"),[]);case"../code/mouse-menu/example4.md":return o(()=>import("./example4.8768210a.js"),[]);case"../code/mouse-menu/example5.md":return o(()=>import("./example5.42f6beee.js"),[]);case"../code/mouse-menu/example6.md":return o(()=>import("./example6.f9898d49.js"),[]);case"../code/mouse-menu/example7.md":return o(()=>import("./example7.846f1c74.js"),[]);case"../code/resize/example1.md":return o(()=>import("./example1.4c98cbd0.js"),[]);case"../code/resize/example2.md":return o(()=>import("./example2.5f480824.js"),[]);case"../code/resize/example3.md":return o(()=>import("./example3.07799660.js"),[]);case"../code/resize/example4.md":return o(()=>import("./example4.92fa6825.js"),[]);case"../code/resize/example5.md":return o(()=>import("./example5.cbfe9adc.js"),[]);case"../code/size-observer/example1.md":return o(()=>import("./example1.71de0a37.js"),[]);case"../code/size-observer/example2.md":return o(()=>import("./example2.98866d8e.js"),[]);case"../code/yaml-edit/example1.md":return o(()=>import("./example1.2f8cb8cb.js"),[]);default:return new Promise(function(s,p){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const J=z({name:"ExampleFrame",directives:{resize:q},props:{mainName:{type:String,default:""},readmeList:{type:Array,default:()=>[]},exampleList:{type:Array,default:()=>[]},disabledMobile:{type:Boolean,default:!1}},setup(e){const s=S(),p=j(),E=v(),u=v(""),h=v(""),_=v(!1),A=V({zIndex:9999,tipLineColor:"#889"}),a=v(!1),n=v(1),f=L(()=>{if(u.value===`${e.mainName}-readme`)return"#.README";{let i=e.exampleList.findIndex((g,T)=>u.value===`${e.mainName}-example${T+1}`);return i>-1?`${i+1}.${e.exampleList[i].name}`:""}}),w=L(()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&e.disabledMobile),P=L(()=>e.mainName.split("-").map(i=>i.slice(0,1).toUpperCase()+i.slice(1)).join(" ")),k=i=>{p.push({name:`${e.mainName}-example${i+1}`})},C=async()=>{_.value=!0;let i=await G(`../code/${e.mainName}/${u.value.replace(e.mainName+"-","")}.md`);h.value=i.default.replace(/\.\.\/\.\.\/\.\.\/\.\.\/packages/g,"@clownjs"),_.value=!1},I=i=>{let g=i.target;g&&i.resizeWidthPercent&&(g.style.width=`${i.resizeWidthPercent}%`,E.value.style.width=`${100-i.resizeWidthPercent}%`)};return O(()=>s.name,i=>{i&&typeof i=="string"&&(u.value=i,a.value=!1,n.value=1,i.includes("example")&&C())},{immediate:!0}),{tableExample:E,page:u,code:h,codeLoading:_,resizeOptions:A,navActive:a,contentActive:n,activeTitle:f,showMobileWarning:w,moduleName:P,handleNavClick:k,handleResize:I,turnToGithub(){window.open("https://github.com/UniqueCrownClown/clownjs")}}}}),c=e=>(H("data-v-7c7dcd58"),e=e(),W(),e),K={id:"example"},Q=c(()=>t("label",{class:"nav-btn",for:"navBtnActive"},[t("div",{class:"line"}),t("div",{class:"line"}),t("div",{class:"line"})],-1)),X={class:"header-tips"},Y={class:"title"},Z={class:"nav-content"},ee={class:"logo"},te=c(()=>t("svg",{class:"back",viewBox:"0 0 1024 1024"},[t("path",{d:"M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z"})],-1)),ie=c(()=>t("span",{class:"text"},"clownjs",-1)),se=[te,ie],oe={id:"moduleName"},ae=c(()=>t("p",{class:"nav-title"},"Document",-1)),ne={class:"nav-list"},re={class:"title"},le={class:"introduce"},de=c(()=>t("p",{class:"nav-title"},"Example",-1)),ce={class:"nav-list"},me=["onClick"],ue={class:"title"},_e={class:"introduce"},ve={class:"copyright"},pe={key:0,class:"content"},Ee={class:"content-nav"},he={class:"content-nav-box"},Ae=c(()=>t("p",{class:"title"},"Example",-1)),fe={key:0,class:"mobile-warning"},ge=c(()=>t("div",{class:"mobile-warning-content"}," \u63D2\u4EF6\u529F\u80FD\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\uFF0C\u8BF7\u4F7F\u7528PC\u7AEF\u6D4F\u89C8 ",-1)),Le=[ge],$e={class:"example-content"},De=c(()=>t("p",{class:"title"},"Code",-1)),ye=["innerHTML"],Re={key:1,class:"readme-content"};function be(e,s,p,E,u,h){const _=x("router-view"),A=F("resize");return r(),l("div",K,[D(t("input",{id:"navBtnActive","onUpdate:modelValue":s[0]||(s[0]=a=>e.navActive=a),type:"checkbox",style:{display:"none"}},null,512),[[M,e.navActive]]),Q,t("div",X,[t("p",Y,m(e.activeTitle),1)]),t("div",{class:d(["nav-mask",{active:e.navActive}]),onClick:s[1]||(s[1]=B(a=>e.navActive=!1,["self"]))},null,2),t("div",{class:d(["nav",{active:e.navActive}])},[t("div",Z,[t("div",ee,[t("h1",{id:"clown",onClick:s[2]||(s[2]=a=>e.$router.push("/"))},se),t("p",oe,m(e.moduleName),1)]),ae,t("ul",ne,[(r(!0),l(y,null,R(e.readmeList,(a,n)=>(r(),l("li",{key:n,class:d(["nav-listitem",{active:e.page===`${e.mainName}-readme`}]),onClick:s[3]||(s[3]=f=>e.$router.push({name:`${e.mainName}-readme`}))},[t("p",re,"#."+m(a.name),1),t("p",le,m(a.introduce),1)],2))),128))]),de,t("ul",ce,[(r(!0),l(y,null,R(e.exampleList,(a,n)=>(r(),l("li",{key:n,class:d(["nav-listitem",{active:e.page==`${e.mainName}-example${n+1}`}]),onClick:f=>e.handleNavClick(n)},[t("p",ue,m(n+1)+"."+m(a.name),1),t("p",_e,m(a.introduce),1)],10,me))),128))])]),t("div",ve,[t("img",{src:U,class:"home-img",alt:"Home",title:"Home",onClick:s[4]||(s[4]=a=>e.$router.push("/"))})])],2),e.page!==`${e.mainName}-readme`?(r(),l("div",pe,[t("div",Ee,[t("div",he,[t("div",{class:d(["content-nav-item",{active:e.contentActive===1}]),onClick:s[5]||(s[5]=a=>e.contentActive=1)}," Example ",2),t("div",{class:d(["content-nav-item",{active:e.contentActive===2}]),onClick:s[6]||(s[6]=a=>e.contentActive=2)}," Code ",2)])]),t("div",{ref:"tableExample",class:d(["example",{active:e.contentActive===1}])},[Ae,e.showMobileWarning?(r(),l("div",fe,Le)):$("",!0),t("div",$e,[b(_)])],2),D((r(),l("div",{class:d(["code",{active:e.contentActive===2}]),onResize:s[7]||(s[7]=(...a)=>e.handleResize&&e.handleResize(...a))},[De,t("div",{class:"code-box",innerHTML:e.code},null,8,ye)],34)),[[A,e.resizeOptions,"left"]])])):$("",!0),e.page===`${e.mainName}-readme`?(r(),l("div",Re,[b(_)])):$("",!0)])}var ke=N(J,[["render",be],["__scopeId","data-v-7c7dcd58"]]);export{ke as E};