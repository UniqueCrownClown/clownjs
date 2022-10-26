var s=`<h1 id="typer">typer</h1>
<h2 id="\u8BF4\u660E">\u8BF4\u660E</h2>
<p>typer \u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u63D2\u4EF6, \u7528\u4E8E\u5B9E\u73B0\u9875\u9762\u6587\u5B57\u7684\u6253\u5B57\u673A\u6548\u679C. \u5B83\u4F7F\u7528\u8D77\u6765\u975E\u5E38\u7B80\u5355, \u53EA\u9700\u8981\u51E0\u884C\u4EE3\u7801\u5C31\u80FD\u5B9E\u73B0\u9AD8\u5927\u4E0A\u7684\u6253\u5B57\u673A\u6548\u679C.\u800C\u4E14\u5BF9 MVVM \u6846\u67B6\u652F\u6301\u5B8C\u7F8E\uFF0C\u8FD8\u517C\u5BB9\u539F\u751F JS.</p>
<h2 id="\u4F7F\u7528">\u4F7F\u7528</h2>
<ol>
<li>\u666E\u901A\u4F7F\u7528</li>
</ol>
<pre><code class="language-ts"><span class="hljs-keyword">import</span> Typer <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@clownjs/typer&quot;</span>;
<span class="hljs-keyword">const</span> typing = <span class="hljs-keyword">new</span> Typer(
  obj,
  <span class="hljs-string">\`\u843D\u971E\u4E0E\u5B64\u9E5C\u9F50\u98DE\uFF0C\u79CB\u6C34\u5171\u957F\u5929\u4E00\u8272\u3002\`</span>,
  <span class="hljs-function">(<span class="hljs-params">instance</span>) =&gt;</span> {
    <span class="hljs-comment">// \u56DE\u8C03\u51FD\u6570</span>
    <span class="hljs-comment">// \u6B64\u56DE\u8C03\u4E00\u822C\u7528\u4E8E\u83B7\u53D6\u65B0\u7684\u6570\u636E\u7136\u540E\u5FAA\u73AF\u8F93\u51FA</span>
    <span class="hljs-comment">// instance { \u5B9E\u4F8BTyper }</span>
    <span class="hljs-built_in">console</span>.log(instance); <span class="hljs-comment">// \u6253\u5370\u51FA\u5B9E\u4F8B\u5BF9\u8C61</span>
  },
  <span class="hljs-function">(<span class="hljs-params">output, instance</span>) =&gt;</span> {
    <span class="hljs-comment">// \u94A9\u5B50\u51FD\u6570</span>
    <span class="hljs-comment">// output { \u5F53\u524D\u5E27\u7684\u8F93\u51FA\u5185\u5BB9 }</span>
    <span class="hljs-comment">// instance { \u5B9E\u4F8BTyper }</span>
    <span class="hljs-comment">// \u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u52A8\u6001\u66F4\u65B0dom\u5143\u7D20</span>
    <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;output&quot;</span>).innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${output}</span>\`</span>;
  }
);
</code></pre>
<ol start="2">
<li>vue \u4F7F\u7528</li>
</ol>
<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  // \u52A8\u6001\u7ED1\u5B9A
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ obj.output }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> Typer <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@clownjs/typer&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;home&quot;</span>,
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">obj</span>: {
        <span class="hljs-attr">output</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-comment">// \u5176\u4ED6\u53C2\u6570\u7701\u7565\uFF0C\u5B9E\u9645\u4F60\u9700\u8981\u5B8C\u6574\u914D\u7F6E\u54E6T^T</span>
      },
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> typed = <span class="hljs-keyword">new</span> Typer(<span class="hljs-built_in">this</span>.obj, <span class="hljs-string">\`\u6211\u5C06\u8981\u88AB\u6253\u5B57\u673A\u8F93\u51FA\`</span>);
  },
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
