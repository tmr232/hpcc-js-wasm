import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.DdIfLAqJ.js";const E=JSON.parse('{"title":"Interface: Image","description":"","frontmatter":{},"headers":[],"relativePath":"graphviz/src/graphviz/interfaces/Image.md","filePath":"graphviz/src/graphviz/interfaces/Image.md","lastUpdated":null}'),t={name:"graphviz/src/graphviz/interfaces/Image.md"},h=e(`<p><a href="/hpcc-js-wasm/README.html"><strong>@hpcc-js/wasm-root</strong></a> • <strong>Docs</strong></p><hr><h1 id="interface-image" tabindex="-1">Interface: Image <a class="header-anchor" href="#interface-image" aria-label="Permalink to &quot;Interface: Image&quot;">​</a></h1><p>Example: Passing a web hosted Image to GraphViz:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Graphviz } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@hpcc-js/wasm-graphviz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> graphviz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Graphviz.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> svg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graphviz.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;digraph { a[image=&quot;https://.../image.png&quot;]; }&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   images: [{ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://.../image.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;272px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;92px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> svg;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><blockquote><p><strong>path</strong>: <code>string</code></p></blockquote><p>Full URL to image</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/graphviz/src/graphviz.ts#L34" target="_blank" rel="noreferrer">graphviz/src/graphviz.ts:34</a></p><hr><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><blockquote><p><strong>width</strong>: <code>string</code></p></blockquote><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/graphviz/src/graphviz.ts#L35" target="_blank" rel="noreferrer">graphviz/src/graphviz.ts:35</a></p><hr><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><blockquote><p><strong>height</strong>: <code>string</code></p></blockquote><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/graphviz/src/graphviz.ts#L36" target="_blank" rel="noreferrer">graphviz/src/graphviz.ts:36</a></p>`,21),n=[h];function p(r,l,k,d,o,g){return i(),a("div",null,n)}const f=s(t,[["render",p]]);export{E as __pageData,f as default};
