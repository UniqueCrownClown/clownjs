var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>example from yamlEdit:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">yamlEdit</span> <span class="hljs-attr">:renderData.sync</span>=<span class="hljs-string">&quot;combineData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;clYamlEditRef&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { onMounted, ref, unref, defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-comment">// import YamlEdit from &quot;../../../../packages/yaml-edit/&quot;;</span>
<span class="hljs-keyword">import</span> YamlEdit <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@clownjs/yaml-edit&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">components</span>: {
    YamlEdit,
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> combineData = ref({});
    <span class="hljs-keyword">const</span> clYamlEditRef = ref();
    <span class="hljs-keyword">const</span> defineData = {
      <span class="hljs-attr">enable</span>: {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;switch&quot;</span>,
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;\u603B\u5F00\u5173&quot;</span>,
      },
      <span class="hljs-attr">resourceDef</span>: {
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;resourceDef&quot;</span>,
        <span class="hljs-attr">children</span>: {
          <span class="hljs-attr">outAdaptors</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;outAdaptors&quot;</span>,
            <span class="hljs-attr">children</span>: {
              <span class="hljs-attr">nioHttpOutAdaptor</span>: {
                <span class="hljs-attr">isArray</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;nioHttpOutAdaptor&quot;</span>,
                <span class="hljs-attr">children</span>: {
                  <span class="hljs-attr">resourceExpr</span>: {
                    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
                    <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;resourceExpr&quot;</span>,
                  },
                  <span class="hljs-attr">usageType</span>: {
                    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
                    <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;usageType&quot;</span>,
                  },
                },
              },
            },
          },
        },
      },
      <span class="hljs-attr">rules</span>: {
        <span class="hljs-attr">isArray</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">children</span>: {
          <span class="hljs-attr">resource</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;resource&quot;</span>,
          },
          <span class="hljs-attr">enable</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;enable&quot;</span>,
          },
          <span class="hljs-attr">grade</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;select&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;grade&quot;</span>,
            <span class="hljs-attr">others</span>: {
              <span class="hljs-attr">options</span>: [
                {
                  <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6162\u8C03\u7528\u6BD4\u4F8B&quot;</span>,
                  <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;0&quot;</span>,
                },
                {
                  <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5F02\u5E38\u6BD4\u4F8B&quot;</span>,
                  <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;1&quot;</span>,
                },
                {
                  <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5F02\u5E38\u6570&quot;</span>,
                  <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;2&quot;</span>,
                },
              ],
            },
          },
          <span class="hljs-attr">timeWindow</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;timeWindow&quot;</span>,
          },
          <span class="hljs-attr">count</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;count&quot;</span>,
          },
          <span class="hljs-attr">minRequestAmount</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;minRequestAmount&quot;</span>,
          },
          <span class="hljs-attr">slowRatioThreshold</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;slowRatioThreshold&quot;</span>,
          },
          <span class="hljs-attr">statIntervalMs</span>: {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;statIntervalMs&quot;</span>,
          },
        },
      },
    };
    <span class="hljs-keyword">const</span> yamlData = {
      <span class="hljs-attr">enable</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">resourceDef</span>: {
        <span class="hljs-attr">outAdaptors</span>: {
          <span class="hljs-attr">nioHttpOutAdaptor</span>: [
            {
              <span class="hljs-attr">resourceExpr</span>: <span class="hljs-string">&quot;/out/\${serviceCode}&quot;</span>,
            },
            {
              <span class="hljs-attr">resourceExpr</span>:
                <span class="hljs-string">&quot;/out/http/\${__rf.host}:\${__rf.varPort}/\${serviceCode}&quot;</span>,
              <span class="hljs-attr">usageType</span>: <span class="hljs-string">&quot;SND_RCV&quot;</span>,
            },
          ],
        },
      },
      <span class="hljs-attr">rules</span>: [
        {
          <span class="hljs-attr">resource</span>: <span class="hljs-string">&quot;\\/out\\/test&quot;</span>,
          <span class="hljs-attr">enable</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">grade</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">timeWindow</span>: <span class="hljs-number">10</span>,
          <span class="hljs-attr">count</span>: <span class="hljs-number">1000</span>,
          <span class="hljs-attr">minRequestAmount</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">slowRatioThreshold</span>: <span class="hljs-number">0.6</span>,
          <span class="hljs-attr">statIntervalMs</span>: <span class="hljs-number">10000</span>,
        },
      ],
    };
    onMounted(<span class="hljs-function">() =&gt;</span> {
      combineData.value = unref(clYamlEditRef).initData(defineData, yamlData);
    });
    <span class="hljs-keyword">return</span> {
      combineData,
      clYamlEditRef,
    };
  },
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
`;export{s as default};
