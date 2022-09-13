var t=`<h1 id="yaml-edit">Yaml Edit</h1>
<h2 id="\u57FA\u4E8E-element-plus-\u7684-yaml-\u6587\u4EF6\u53EF\u89C6\u5316\u7F16\u8F91">\u57FA\u4E8E element-plus \u7684 yaml \u6587\u4EF6\u53EF\u89C6\u5316\u7F16\u8F91</h2>
<h3 id="1-template-\u4F7F\u7528">1 Template \u4F7F\u7528</h3>
<p>\u652F\u6301\u4F7F\u7528sync\u5B9E\u73B0\u6E32\u67D3\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A,\u901A\u8FC7methods\u8C03\u7528\u7684\u65B9\u5F0F\u83B7\u53D6\u7F16\u8F91\u524D\u540E\u7684yaml\u683C\u5F0Fjson\u6570\u636E</p>
<pre><code class="language-html"> &lt;yaml-<span class="hljs-builtin-name">edit</span> :renderData.<span class="hljs-attribute">sync</span>=<span class="hljs-string">&quot;combineData&quot;</span> <span class="hljs-attribute">labelWidth</span>=<span class="hljs-string">&quot;120px&quot;</span> <span class="hljs-attribute">ref</span>=<span class="hljs-string">&quot;clYamlEditRef&quot;</span> /&gt;
</code></pre>
<h3 id="2-attrs-\u5C5E\u6027">2 Attrs \u5C5E\u6027</h3>
<table>
<thead>
<tr>
<th align="left">\u53C2\u6570</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u7C7B\u578B</th>
<th align="left">\u53EF\u9009\u503C</th>
<th align="left">\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td align="left">renderData</td>
<td align="left">\u6E32\u67D3\u6570\u636E</td>
<td align="left">Object</td>
<td align="left">-</td>
<td align="left">{}</td>
</tr>
<tr>
<td align="left">labelWidth</td>
<td align="left">label\u5BBD\u5EA6</td>
<td align="left">string</td>
<td align="left">-</td>
<td align="left">100px</td>
</tr>
</tbody></table>
<h3 id="3-methods-\u65B9\u6CD5">3 Methods \u65B9\u6CD5</h3>
<table>
<thead>
<tr>
<th align="left">\u65B9\u6CD5\u540D</th>
<th align="left">\u8BF4\u660E</th>
<th align="left">\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td align="left">initData</td>
<td align="left">\u521D\u59CB\u5316\u6E32\u67D3\u6570\u636E</td>
<td align="left">\u5165\u53C2:defineData: \u8868\u5355\u5B9A\u4E49\u6570\u636E, yamlData: yaml\u7684Json\u6570\u636E</td>
</tr>
<tr>
<td align="left">parseToYaml</td>
<td align="left">\u8F6C\u5316\u6E32\u67D3\u6570\u636E\u56DEyaml\u7684json\u6570\u636E</td>
<td align="left">\u5165\u53C2:renderData: \u6E32\u67D3\u6570\u636E,\u51FA\u53C2: yamlData:yaml\u7684Json\u6570\u636E</td>
</tr>
</tbody></table>
`;export{t as default};
