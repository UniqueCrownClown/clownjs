var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ obj.output }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, reactive, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> typer <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../../../packages/typer/index&quot;</span>;
<span class="hljs-comment">// import typer from &quot;@clownjs/typer/index.ts&quot;;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// \u8BA1\u7B97\u5C5E\u6027</span>
    <span class="hljs-keyword">const</span> obj = reactive({
      <span class="hljs-attr">output</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">isEnd</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">speed</span>: <span class="hljs-number">100</span>,
      <span class="hljs-attr">singleBack</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">sleep</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;normal&quot;</span>,
      <span class="hljs-attr">backSpeed</span>: <span class="hljs-number">40</span>,
      <span class="hljs-attr">sentencePause</span>: <span class="hljs-literal">true</span>
    });

    <span class="hljs-comment">// \u5B9E\u4F8B\u5316</span>
    onMounted(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> typed = <span class="hljs-keyword">new</span> typer(obj, <span class="hljs-string">\`\u843D\u971E\u4E0E\u5B64\u9E5C\u9F50\u98DE\uFF0C\u79CB\u6C34\u5171\u957F\u5929\u4E00\u8272\u3002\`</span>);
    });

    <span class="hljs-keyword">return</span> {
      obj,
    };
  },
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
