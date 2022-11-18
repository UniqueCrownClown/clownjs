var s=`<h1 id="sakura">sakura</h1>
<p>canvas\u7684\u82B1\u74E3\u98D8\u96F6\u6548\u679C</p>
<h2 id="usage">Usage</h2>
<pre><code class="language-JavaScript">var sakura = <span class="hljs-keyword">new</span> <span class="hljs-constructor">SakuraCanvas({OPTIONS_HERE})</span>;
sakura.init<span class="hljs-literal">()</span>;                                  <span class="hljs-comment">// make &lt;canvas&gt; &amp; petals</span>
container.append<span class="hljs-constructor">Child(<span class="hljs-params">sakura</span>.<span class="hljs-params">getCanvas</span>()</span>);      <span class="hljs-comment">// insert canvas into document</span>
sakura.animate<span class="hljs-literal">()</span>;                               <span class="hljs-comment">// start animation</span>
</code></pre>
<h2 id="options">Options</h2>
<pre><code class="language-JavaScript">{
    canvasClassName: &#x27;ec-sakura-canvas&#x27;,    // canvas classname
    canvasWidth: 800,                       // canvas <span class="hljs-attribute">width
    canvasHeight</span>: <span class="hljs-number">600</span>,                      <span class="hljs-comment">// canvas height</span>
    <span class="hljs-attribute">framerate</span>: <span class="hljs-number">20</span>,                          <span class="hljs-comment">// animation frame rate</span>
    <span class="hljs-attribute">maxChips</span>: <span class="hljs-number">24</span>,                           <span class="hljs-comment">// maximum number of petals</span>
    <span class="hljs-attribute">shadowColor</span>: <span class="hljs-string">&#x27;#DE8397&#x27;</span>,                 <span class="hljs-comment">// shadow color</span>
    <span class="hljs-attribute">shadowBlur</span>: <span class="hljs-number">2</span>,                          <span class="hljs-comment">// shadow blur</span>

    <span class="hljs-attribute">maxDepth</span>: <span class="hljs-number">250</span>,                          <span class="hljs-comment">// maximum depth of field</span>
    <span class="hljs-attribute">minDepth</span>: <span class="hljs-number">0</span>,                            <span class="hljs-comment">// minimum depth of field</span>
    <span class="hljs-attribute">baseDepth</span>: <span class="hljs-number">50</span>,                          <span class="hljs-comment">// base depth of field</span>
    <span class="hljs-attribute">baseSize</span>: <span class="hljs-number">4.5</span>,                          <span class="hljs-comment">// base size of petals</span>
    <span class="hljs-attribute">baseSpeedX</span>: <span class="hljs-number">0.8</span>,                        <span class="hljs-comment">// base horizontal speed of petals</span>
    <span class="hljs-attribute">baseSpeedY</span>: <span class="hljs-number">1.6</span>,                        <span class="hljs-comment">// base vertical speed of petals</span>
    <span class="hljs-attribute">minAlpha</span>: <span class="hljs-number">0.5</span>,                          <span class="hljs-comment">// minimum opacity (aka. alpha channel)</span>
    <span class="hljs-attribute">maxAlpha</span>: <span class="hljs-number">1</span>,                            <span class="hljs-comment">// maximum opacity</span>
    <span class="hljs-attribute">chipColor</span>: {<span class="hljs-attribute">r</span>: <span class="hljs-number">235</span>, <span class="hljs-attribute">g</span>: <span class="hljs-number">178</span>, <span class="hljs-attribute">b</span>: <span class="hljs-number">180</span>}     <span class="hljs-comment">// petals&#x27; color (rgb, [0, 255])</span>
}
</code></pre>
`;export{s as default};
