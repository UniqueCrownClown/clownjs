var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;sakuraContainer&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
      \u6843\u82B1\u575E\u91CC\u6843\u82B1\u5EB5\uFF0C\u6843\u82B1\u5EB5\u91CC\u6843\u82B1\u4ED9\u3002 
      \u6843\u82B1\u4ED9\u4EBA\u79CD\u6843\u6811\uFF0C\u53C8\u6458\u6843\u82B1\u5356\u9152\u94B1\u3002
      \u9152\u9192\u53EA\u5728\u82B1\u524D\u5750\uFF0C\u9152\u9189\u8FD8\u6765\u82B1\u4E0B\u7720\u3002 
      \u534A\u9192\u534A\u9189\u65E5\u590D\u65E5\uFF0C\u82B1\u843D\u82B1\u5F00\u5E74\u590D\u5E74\u3002
      \u4F46\u613F\u8001\u6B7B\u82B1\u9152\u95F4\uFF0C\u4E0D\u613F\u97A0\u8EAC\u8F66\u9A6C\u524D\u3002 
      \u8F66\u5C18\u9A6C\u8DB3\u5BCC\u8005\u8DA3\uFF0C\u9152\u76CF\u82B1\u679D\u8D2B\u8005\u7F18\u3002
      \u82E5\u5C06\u5BCC\u8D35\u6BD4\u8D2B\u8D31\uFF0C\u4E00\u5728\u5E73\u5730\u4E00\u5728\u5929\u3002 
      \u82E5\u5C06\u8D2B\u8D31\u6BD4\u8F66\u9A6C\uFF0C\u4ED6\u5F97\u9A71\u9A70\u6211\u5F97\u95F2\u3002
      \u522B\u4EBA\u7B11\u6211\u592A\u75AF\u766B\uFF0C\u6211\u7B11\u4ED6\u4EBA\u770B\u4E0D\u7A7F\u3002 
      \u4E0D\u89C1\u4E94\u9675\u8C6A\u6770\u5893\uFF0C\u65E0\u82B1\u65E0\u9152\u9504\u4F5C\u7530\u3002
    <span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent, ref, onMounted, onUnmounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> SakuraCanvas <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../../../packages/sakura/index&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> sakuraContainer = ref(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">let</span> resizeTimer;
    <span class="hljs-keyword">let</span> sakura = <span class="hljs-literal">null</span>;
    <span class="hljs-keyword">const</span> updateCanvasSize = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">let</span> container = sakuraContainer.value;
      <span class="hljs-keyword">const</span> canvasWidth = container.clientWidth || <span class="hljs-number">600</span>;
      <span class="hljs-keyword">const</span> canvasHeight = container.clientHeight || <span class="hljs-number">400</span>;
      sakura.setConfig({
        canvasWidth,
        canvasHeight,
      });
    };
    <span class="hljs-keyword">const</span> resizeHandler = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">clearTimeout</span>(resizeTimer);
      resizeTimer = <span class="hljs-built_in">setTimeout</span>(updateCanvasSize, <span class="hljs-number">500</span>);
    };

    onMounted(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> container = sakuraContainer.value;
      <span class="hljs-keyword">const</span> canvasWidth = container.clientWidth || <span class="hljs-number">600</span>;
      <span class="hljs-keyword">const</span> canvasHeight = container.clientHeight || <span class="hljs-number">400</span>;
      <span class="hljs-keyword">const</span> options = {
        <span class="hljs-attr">canvasClassName</span>: <span class="hljs-string">&quot;ec-sakura-canvas&quot;</span>, <span class="hljs-comment">// canvas classname</span>
        canvasWidth, <span class="hljs-comment">// canvas width</span>
        canvasHeight, <span class="hljs-comment">// canvas height</span>
      };
      <span class="hljs-keyword">try</span> {
        sakura = <span class="hljs-keyword">new</span> SakuraCanvas(options);
        sakura.init(); <span class="hljs-comment">// make &lt;canvas&gt; &amp; petals</span>
        container.appendChild(sakura.getCanvas()); <span class="hljs-comment">// insert canvas into document</span>
        sakura.animate(); <span class="hljs-comment">// start animation</span>
      } <span class="hljs-keyword">catch</span> (ex) {
        <span class="hljs-built_in">console</span>.log(ex.message);
      }
      <span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">&quot;resize&quot;</span>, resizeHandler, <span class="hljs-literal">false</span>);
    });
    onUnmounted(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">window</span>.removeEventListener(<span class="hljs-string">&quot;resize&quot;</span>, resizeHandler, <span class="hljs-literal">false</span>);
    });
    <span class="hljs-keyword">return</span> {
      sakuraContainer,
    };
  },
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.canvas</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">position</span>: relative;
}
<span class="hljs-selector-class">.text</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">32px</span>;
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&quot;\u82CF\u65B0\u8BD7\u67F3\u6977\u7B80&quot;</span>, <span class="hljs-string">&quot;STKaiti&quot;</span>, <span class="hljs-string">&quot;KaiTi&quot;</span>, cursive;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#7b5252</span>;
  user-select: none;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
