import{R as s}from"./ReadmeFrame.1bc0c097.js";import{_ as l,d as i,r,o as t,g as c,m as p}from"./index.8b12b012.js";var n=`<p><strong>\u4E00\u4E2A\u5305\u542B Javascript \u63D2\u4EF6\u3001Vue3 \u7EC4\u4EF6\u3001Vue3 \u6307\u4EE4\u7684\u8F7B\u91CF\u5DE5\u5177\u7EC4\u4EF6\u5E93</strong><br><em>A universal component packages of javascript plugins or tools</em></p>
<h2 id="link">Link</h2>
<ul>
<li><a href="https://github.com/UniqueCrownClown/clownjs" target="_blank">\u26A1Github</a></li>
<li><a href="https://www.npmjs.com/search?q=%40clownjs" target="_blank">\u{1F4BE}NPM</a></li>
</ul>
<hr>
<h2 id="\u7EC4\u4EF6">\u7EC4\u4EF6</h2>
<ol>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/animation-dialog">@clownjs/animation-dialog</a></strong><br>\u2728 \u52A8\u753B\u6A21\u6001\u6846 Vue3 \u7EC4\u4EF6</p>
</li>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/standard-tabs">@clownjs/standard-tabs</a></strong><br>\u2728 \u79FB\u52A8\u7AEF\u6807\u7B7E\u9875 Vue3 \u7EC4\u4EF6</p>
</li>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/mouse-menu">@clownjs/mouse-menu</a></strong><br>\u2728 \u81EA\u5B9A\u4E49\u53F3\u952E\u83DC\u5355 Vue3 \u7EC4\u4EF6</p>
</li>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/yaml-edit">@clownjs/yaml-edit</a></strong><br>\u2728yaml \u7F16\u8F91 Vue3 \u7EC4\u4EF6</p>
</li>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/resize">@clownjs/resize</a></strong><br>\u2728 \u901A\u8FC7\u62D6\u62FD\u66F4\u6539\u5143\u7D20\u5C3A\u5BF8\u63D2\u4EF6</p>
</li>
<li><p><strong><a href="https://uniquecrownclown.github.io/clownjs/size-observer">@clownjs/size-observer</a></strong><br>\u2728 \u76D1\u542C\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u63D2\u4EF6</p>
</li>
</ol>
<hr>
<h2 id="\u5F00\u59CB\u4F7F\u7528">\u5F00\u59CB\u4F7F\u7528</h2>
<h3 id="\u5B89\u88C5">\u5B89\u88C5</h3>
<pre><code class="language-cmd">
<span class="hljs-built_in">npm</span> i -S @clownjs/XXX
</code></pre>
<h3 id="\u4F7F\u7528">\u4F7F\u7528</h3>
<ul>
<li>\u65B0\u7248\u8FDB\u884C\u4E86\u5206\u5305\uFF0C\u53EF\u6309\u9700\u5B89\u88C5\u76F8\u5E94\u7684\u5206\u5305</li>
<li>\u65B0\u7248\u7684 Vue \u7EC4\u4EF6\u53EA\u53EF\u5728 Vue3 \u4E2D\u4F7F\u7528\uFF0C\u800C\u6307\u4EE4\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u53EF\u540C\u65F6\u5728 Vue2.X \u4E2D\u4F7F\u7528</li>
<li>\u591A\u6570\u5305\u662F\u57FA\u4E8E\u539F\u751F JS \u7F16\u5199\u7684\uFF0C\u57FA\u672C\u53EF\u76F4\u63A5\u539F\u751F\u4F7F\u7528\uFF0C\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u63D0\u4F9B\u4E86 VUE \u6307\u4EE4\u7684\u5C01\u88C5\u5F62\u5F0F</li>
</ul>
<h2 id="\u5173\u4E8E\u9879\u76EE">\u5173\u4E8E\u9879\u76EE</h2>
<h3 id="packages">Packages</h3>
<ul>
<li>\u4F7F\u7528<code>lerna</code>\u8FDB\u884C\u5206\u5305\u7BA1\u7406\uFF0C\u6267\u884C<code>npm run bootstrap</code>\u9879\u76EE\u521D\u59CB\u5316</li>
<li>\u4F7F\u7528<code>rollup</code>\u8FDB\u884C\u6253\u5305\uFF0C \u6267\u884C<code>npm run build:pkg</code>\u6253\u5305\u5404 Packages\uFF0C\u5305\u542B cjs\u3001es \u548C\u5176 d.ts \u6587\u4EF6</li>
</ul>
<h3 id="\u5C55\u793A\u7AD9\u70B9">\u5C55\u793A\u7AD9\u70B9</h3>
<ul>
<li>\u5F00\u53D1\u73AF\u5883\u53CA\u5C55\u793A\u7AD9\u70B9\u4F7F\u7528<code>vite</code>\u642D\u5EFA\uFF0Clerna \u521D\u59CB\u5316\u3001\u5B89\u88C5\u4F9D\u8D56\u3001\u6253\u5305 Packages\uFF0C\u5B8C\u6210\u540E\u6267\u884C<code>npm run example</code>\u542F\u52A8</li>
<li>\u7AD9\u70B9\u8DEF\u7531\u6587\u4EF6\u4F7F\u7528<code>import.meta.glob</code>\u8BFB\u53D6\u6587\u4EF6\u76EE\u5F55<strong>\u81EA\u52A8\u751F\u6210</strong>\uFF0C\u539F\u5219\u4E0A\u4E0D\u9700\u66F4\u6539\u8DEF\u7531\u6587\u4EF6</li>
</ul>
<h3 id="\u8D21\u732E\u4E0E\u672C\u5730\u5F00\u53D1">\u8D21\u732E\u4E0E\u672C\u5730\u5F00\u53D1</h3>
<ol>
<li>\u65B9\u6CD5 1</li>
</ol>
<p>\u5728\u9879\u76EE\u521D\u59CB\u5316\u540E\uFF0C\u6267\u884C<code>npm run backup-package-json &amp;&amp; npm run example</code>\u53EF\u4F7F\u5C55\u793A\u7AD9\u70B9\u76F4\u63A5\u5F15\u7528\u9879\u76EE\u4E2D Packages \u7684\u4EE3\u7801\u5E76\u5B9E\u73B0\u70ED\u66F4\u65B0\uFF0C\u4F46\u6CE8\u610F\u5F00\u53D1\u5B8C\u540E\u8981\u6267\u884C<code>npm run reset-package-json</code>\u6062\u590D\u5404\u5305\u7684<strong>package.json</strong>\u3002</p>
<p>\u539F\u7406\u662F\u66F4\u6539<code>package.json</code>\u7684 main \u5B57\u6BB5\u6307\u5411\u5F00\u53D1\u7684\u6E90\u6587\u4EF6\uFF0C\u800C\u53D1\u5305\u7684\u65F6\u5019\u518D\u5C06 main \u5B57\u6BB5\u5165\u53E3\u6587\u4EF6\u6307\u5411\u6253\u5305\u540E\u7684<code>index.js</code>\uFF0C\u540E\u7EED\u6709\u53EF\u80FD\u628A\u8FD9\u79CD\u65B9\u5F0F\u66F4\u6539\u4E3A\u8F6F\u8FDE\u63A5\u7684\u65B9\u5F0F\u3002</p>
<ol start="2">
<li>\u65B9\u6CD5 2</li>
</ol>
<p>\u5728\u5BF9\u5E94\u7684 packages \u76EE\u5F55\u4E0B\u6267\u884C npm link
\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C npm link @clownjs/ + packageName \u5373\u53EF\u751F\u6210\u5BF9\u5E94\u7684\u8F6F\u94FE\u63A5</p>
<p>\u76F4\u63A5\u6267\u884C npm run example \u5373\u53EF\u8FDB\u884C\u6240\u6709\u7EC4\u4EF6\u7684\u8C03\u8BD5</p>
<ol start="3">
<li>\u521B\u5EFA\u65B0\u7684\u7EC4\u4EF6\u5305</li>
</ol>
<pre><code class="language-shell">npm <span class="hljs-builtin-name">run</span> gen -- <span class="hljs-attribute">--name</span>=name
</code></pre>
<h3 id="\u53C2\u8003\u8D44\u6599">\u53C2\u8003\u8D44\u6599</h3>
<p><a href="https://github.com/leon-kfd/howdyjs">howdyjs</a></p>
`;const e={}.VITE_ROUTER_MODE==="hash",u=i({name:"Home",components:{ReadmeFrame:s},setup(){return{readme:e?n.replace(/https:\/\/uniquecrownclown.github.io\/clownjs/g,e?"./#":"."):n}}}),d={id:"Home"};function m(o,h,g,w,b,j){const a=r("readme-frame");return t(),c("div",d,[p(a,{readme:o.readme},null,8,["readme"])])}var _=l(u,[["render",m]]);export{_ as default};
