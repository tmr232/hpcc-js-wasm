import{_ as e,c as s,o as a,a2 as t}from"./chunks/framework.DdIfLAqJ.js";const m=JSON.parse('{"title":"Class: Zstd","description":"","frontmatter":{},"headers":[],"relativePath":"zstd/src/zstd/classes/Zstd.md","filePath":"zstd/src/zstd/classes/Zstd.md","lastUpdated":null}'),i={name:"zstd/src/zstd/classes/Zstd.md"},r=t(`<p><a href="/hpcc-js-wasm/README.html"><strong>@hpcc-js/wasm-root</strong></a> • <strong>Docs</strong></p><hr><h1 id="class-zstd" tabindex="-1">Class: Zstd <a class="header-anchor" href="#class-zstd" aria-label="Permalink to &quot;Class: Zstd&quot;">​</a></h1><p>The Zstandard WASM library, provides a simplified wrapper around the Zstandard c++ library.</p><p>See <a href="https://facebook.github.io/zstd/" target="_blank" rel="noreferrer">Zstandard</a> for more details.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Zstd } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@hpcc-js/wasm-zstd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zstd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zstd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  Generate some &quot;data&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Uint8Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ length: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compressed_data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zstd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> decompressed_data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zstd.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decompress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(compressed_data);</span></span></code></pre></div><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>WasmLibrary</code></li></ul><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="load" tabindex="-1">load() <a class="header-anchor" href="#load" aria-label="Permalink to &quot;load()&quot;">​</a></h3><blockquote><p><code>static</code> <strong>load</strong>(): <code>Promise</code>&lt;<a href="/hpcc-js-wasm/zstd/src/zstd/classes/Zstd.html"><code>Zstd</code></a>&gt;</p></blockquote><p>Compiles and instantiates the raw wasm.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In general WebAssembly compilation is disallowed on the main thread if the buffer size is larger than 4KB, hence forcing <code>load</code> to be asynchronous;</p></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="/hpcc-js-wasm/zstd/src/zstd/classes/Zstd.html"><code>Zstd</code></a>&gt;</p><p>A promise to an instance of the Zstd class.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L42" target="_blank" rel="noreferrer">zstd/src/zstd.ts:42</a></p><hr><h3 id="unload" tabindex="-1">unload() <a class="header-anchor" href="#unload" aria-label="Permalink to &quot;unload()&quot;">​</a></h3><blockquote><p><code>static</code> <strong>unload</strong>(): <code>void</code></p></blockquote><p>Unloades the compiled wasm instance.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L54" target="_blank" rel="noreferrer">zstd/src/zstd.ts:54</a></p><hr><h3 id="version" tabindex="-1">version() <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version()&quot;">​</a></h3><blockquote><p><strong>version</strong>(): <code>string</code></p></blockquote><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>The Zstd c++ version</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L61" target="_blank" rel="noreferrer">zstd/src/zstd.ts:61</a></p><hr><h3 id="compress" tabindex="-1">compress() <a class="header-anchor" href="#compress" aria-label="Permalink to &quot;compress()&quot;">​</a></h3><blockquote><p><strong>compress</strong>(<code>data</code>, <code>compressionLevel</code>): <code>Uint8Array</code></p></blockquote><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>data</strong>: <code>Uint8Array</code></p><p>Data to be compressed</p><p>• <strong>compressionLevel</strong>: <code>number</code> = <code>...</code></p><p>Compression v Speed tradeoff, when omitted it will default to <code>zstd.defaultCLevel()</code> which is currently 3.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Uint8Array</code></p><p>Compressed data.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>A note on compressionLevel: The library supports regular compression levels from 1 up o 22. Levels &gt;= 20, should be used with caution, as they require more memory. The library also offers negative compression levels, which extend the range of speed vs. ratio preferences. The lower the level, the faster the speed (at the cost of compression).</p></div><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L74" target="_blank" rel="noreferrer">zstd/src/zstd.ts:74</a></p><hr><h3 id="decompress" tabindex="-1">decompress() <a class="header-anchor" href="#decompress" aria-label="Permalink to &quot;decompress()&quot;">​</a></h3><blockquote><p><strong>decompress</strong>(<code>compressedData</code>): <code>Uint8Array</code></p></blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>compressedData</strong>: <code>Uint8Array</code></p><p>Data to be compressed</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Uint8Array</code></p><p>Uncompressed data.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L95" target="_blank" rel="noreferrer">zstd/src/zstd.ts:95</a></p><hr><h3 id="defaultclevel" tabindex="-1">defaultCLevel() <a class="header-anchor" href="#defaultclevel" aria-label="Permalink to &quot;defaultCLevel()&quot;">​</a></h3><blockquote><p><strong>defaultCLevel</strong>(): <code>number</code></p></blockquote><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><p>Default compression level (see notes above above).</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L119" target="_blank" rel="noreferrer">zstd/src/zstd.ts:119</a></p><hr><h3 id="minclevel" tabindex="-1">minCLevel() <a class="header-anchor" href="#minclevel" aria-label="Permalink to &quot;minCLevel()&quot;">​</a></h3><blockquote><p><strong>minCLevel</strong>(): <code>number</code></p></blockquote><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L123" target="_blank" rel="noreferrer">zstd/src/zstd.ts:123</a></p><hr><h3 id="maxclevel" tabindex="-1">maxCLevel() <a class="header-anchor" href="#maxclevel" aria-label="Permalink to &quot;maxCLevel()&quot;">​</a></h3><blockquote><p><strong>maxCLevel</strong>(): <code>number</code></p></blockquote><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hpcc-systems/hpcc-js-wasm/blob/15665b1fde66796592c6046fea63dded1efe25f7/packages/zstd/src/zstd.ts#L127" target="_blank" rel="noreferrer">zstd/src/zstd.ts:127</a></p>`,81),n=[r];function d(o,l,h,c,p,k){return a(),s("div",null,n)}const f=e(i,[["render",d]]);export{m as __pageData,f as default};
