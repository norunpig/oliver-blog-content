import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h1 id="使用express写接口" tabindex="-1"><a class="header-anchor" href="#使用express写接口" aria-hidden="true">#</a> 使用Express写接口</h1><h3 id="_1-创建基本的服务器" tabindex="-1"><a class="header-anchor" href="#_1-创建基本的服务器" aria-hidden="true">#</a> 1.创建基本的服务器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入 express 模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建express的服务器实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// write your code here...</span>

<span class="token comment">// 调用 app.listen 方法，指定端口号并启动web服务器</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Express server running at http://127.0.0.1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建api路由模块" tabindex="-1"><a class="header-anchor" href="#_2-创建api路由模块" aria-hidden="true">#</a> 2.创建API路由模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// apiRouter.js 【路由模块】</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> apiRputer <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// bind your router here...</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> apiRputer

<span class="token comment">// -------------------------------</span>

<span class="token comment">// app.js 【导入并注册路由模块】</span>
<span class="token keyword">const</span> apiRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./apiRouter.js&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> apiRouter<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-编写get接口" tabindex="-1"><a class="header-anchor" href="#_3-编写get接口" aria-hidden="true">#</a> 3.编写GET接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// apiRouter.js</span>
apiRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.获取到客户端通过查询字符串，发送到服务端</span>
    <span class="token keyword">const</span> query <span class="token operator">=</span> req<span class="token punctuation">.</span>query
    <span class="token comment">// 2.调用res.send()方法，把数据响应给客户端</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>            <span class="token comment">// 状态，0 表示成功，1 表示失败</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;GET请求成功！&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 状态描述</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> query           <span class="token comment">// 需要响应给客户端的具体数据</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function o(i,l){return s(),a("div",null,c)}const u=n(p,[["render",o],["__file","6.编写接口.html.vue"]]);export{u as default};
