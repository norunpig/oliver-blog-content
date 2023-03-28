import{_ as t,M as c,p as o,q as i,R as s,t as n,N as p,a1 as a}from"./framework-5866ffd3.js";const l={},u=a('<h1 id="初识-express" tabindex="-1"><a class="header-anchor" href="#初识-express" aria-hidden="true">#</a> 初识 Express</h1><h2 id="express简介" tabindex="-1"><a class="header-anchor" href="#express简介" aria-hidden="true">#</a> Express简介</h2><h3 id="_1-什么是express" tabindex="-1"><a class="header-anchor" href="#_1-什么是express" aria-hidden="true">#</a> 1.什么是Express</h3><p>官方给出的概念：Express是<code>基于Node.js平台</code>，<strong>快速、开放、极简</strong>的<code>Web开发框架</code>。 通俗的理解：Express的作用和Node.js内置的http模块类似，<code>是专门用来创建Web服务器的。</code><code>Express的本质</code>：就是一个npm上的第三方包，提供了快捷创建Web服务器的便捷方法。</p>',4),r={href:"http://www.expressjs.com.cn",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="_2-进一步理解express" tabindex="-1"><a class="header-anchor" href="#_2-进一步理解express" aria-hidden="true">#</a> 2.进一步理解Express</h3><p>思考：不使用Express能否创建Web服务器？ 答案：能，使用Node.js提供的原生http模块即可。</p><p>思考：即生瑜何生亮（有了http内置模块，为什么还有用Express）？ 答案：http内置模块用起来很复杂，开发效率低；Express是基于内置的http模块进一步 封装出来的，能够极大的提高开发效率。</p><p>思考：http内置模块与Express是什么关系 答案：类似于浏览器中Web Api和jQuery的关系。后者是基于前者进一步封装出来的。</p><h3 id="_3-express能做什么" tabindex="-1"><a class="header-anchor" href="#_3-express能做什么" aria-hidden="true">#</a> 3.Express能做什么</h3><p>对于前端程序员来说，最常用的<code>两种服务器</code>，分别是：</p><ul><li><code>Web网站服务器</code>：专门对外提供Web网页资源的服务器。</li><li><code>API接口服务器</code>：专门对外提供API接口的服务器 使用Express，我们可以方便，快捷的创建<code>Web网站</code>的服务器或<code>Api接口</code>的服务器。</li></ul><h2 id="express的基本使用" tabindex="-1"><a class="header-anchor" href="#express的基本使用" aria-hidden="true">#</a> Express的基本使用</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h3><p>在项目所处的目录中，运行如下的终端命令，即可将express安装到项目中使用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i express # 目前版本是<span class="token number">4.17</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-创建基本的web服务器" tabindex="-1"><a class="header-anchor" href="#_2-创建基本的web服务器" aria-hidden="true">#</a> 2.创建基本的Web服务器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入 express</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2.创建web服务器</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 3.调用app.listen(端口号，启动成功的回调函数)，启动服务器</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;express server runing at http://127.0.0.1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-监听get请假" tabindex="-1"><a class="header-anchor" href="#_3-监听get请假" aria-hidden="true">#</a> 3.监听GET请假</h3><p>通过app.get()方法，可以监听客户端的GET请求，具体的语法格式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 参数1:客户端请求的URL地址</span>
<span class="token comment">// 参数2：请求对应的处理函数</span>
<span class="token comment">// req：请求对象（包含了与请求相关的属性与方法）</span>
<span class="token comment">// res：响应对象（包含了与响应相关的属性与方法）</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;请求URl&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*处理函数*/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-监听app-post-方法-可以监听客户端的post请求-具体的语法格式如下" tabindex="-1"><a class="header-anchor" href="#_4-监听app-post-方法-可以监听客户端的post请求-具体的语法格式如下" aria-hidden="true">#</a> 4.监听app.post()方法，可以监听客户端的POST请求，具体的语法格式如下：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 参数1：客户端请求的URL地址</span>
<span class="token comment">// 参数2：请求对应的处理函数</span>
<span class="token comment">// req：请求对象（包含了与请求相关的属性与方法）</span>
<span class="token comment">// res：响应对象（包含了与响应相关的属性与方法）</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;请求URL&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*处理函数*/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-把内容响应给客户端" tabindex="-1"><a class="header-anchor" href="#_5-把内容响应给客户端" aria-hidden="true">#</a> 5.把内容<code>响应</code>给客户端</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 向客户端发送 JSON对象</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 向客户端发送文本内容</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;请求成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-获取url中携带的查询参数" tabindex="-1"><a class="header-anchor" href="#_6-获取url中携带的查询参数" aria-hidden="true">#</a> 6.获取URL中携带的查询参数</h3><p>通过<code>req.query</code>对象，可以访问到客户端通过<code>查询字符串</code>的形式，发送到服务器的参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// req.query 默认是一个空对象</span>
    <span class="token comment">// 客户端使用 ?name=zs&amp;age=20 这种查询字符串形式，发送到服务器的参数</span>
    <span class="token comment">// 可以通过req.query对象访问到，例如：</span>
    <span class="token comment">// req.query.name  req.query.age</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-获取url中的动态参数" tabindex="-1"><a class="header-anchor" href="#_7-获取url中的动态参数" aria-hidden="true">#</a> 7.获取URL中的<code>动态参数</code></h3><p>通过<code>req.params</code>对象，可以访问到URL中，通过<code>:</code>匹配到的<code>动态参数</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// URL 地址中，可以通过 : 参数名的形式，匹配动态参数值</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// req.params 默认是一个空对像</span>
    <span class="token comment">// 里面存放着通过 : 动态匹配到的参数值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="托管静态资源" tabindex="-1"><a class="header-anchor" href="#托管静态资源" aria-hidden="true">#</a> 托管静态资源</h2><h3 id="_1-express-static" tabindex="-1"><a class="header-anchor" href="#_1-express-static" aria-hidden="true">#</a> 1.express.static()</h3><p>express提供了一个非常好用的函数，叫做express.static(),通过它，我们可以非常方便地创建一个静态资源服务器，例如，通过如下代码就可以将public目录下的图片、css文件、JavaScript文件对外开放访问了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，你就可以访问public目录中的所有文件了</p><p><code>注意：</code>Express在<code>指定的</code>静态目录中查找文件，并对外提供资源的访问路径。因此，<code>存放静态文件的目录名不会出现在URL中</code>。</p><h3 id="_2-托管多个静态资源目录" tabindex="-1"><a class="header-anchor" href="#_2-托管多个静态资源目录" aria-hidden="true">#</a> 2.托管多个静态资源目录</h3><p>如果要托管多个静态资源目录，请多次调用express.static()函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;files&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：访问静态资源文件时，express.static()函数会根据目录多天假顺序查找所需的文件。</p><h3 id="_3-挂载路径前缀" tabindex="-1"><a class="header-anchor" href="#_3-挂载路径前缀" aria-hidden="true">#</a> 3.挂载<code>路径前缀</code></h3><p>如果希望在托管的<code>静态资源访问路径</code>之前，<code>挂载路径前缀</code>，则可以使用如下的方式:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/public&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，你就可以通过带有**/public**前缀地址来访问public目录中的文件了：</p><h3 id="_4-nodemon" tabindex="-1"><a class="header-anchor" href="#_4-nodemon" aria-hidden="true">#</a> 4.nodemon</h3>`,41),k=s("strong",null,"为什么要使用nodemon",-1),v={href:"https://www.npmjs.com/package/nodemon",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><strong>安装nodemon</strong> 在终端中，运行如下命令，即可将nodemon安装为全局可用的工具：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用nodemon</strong> 当基于Node.js编写了一个网站应用的时候，传统的方式，是运行<code>node app.js</code>命令，来启动项目。这样做的坏处是：代码被修改了后，需要手动启动项目。</p><p>现在，我们可以将node命令替换为nodemon命令，使用<code>nodemon app.js</code>来启动项目。这样做的好处是：代码被修改之后，会被nodemon监听到，从而实现自动重启项目的效果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>node app<span class="token punctuation">.</span>js
# 将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
nodemon app<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由的概念" tabindex="-1"><a class="header-anchor" href="#路由的概念" aria-hidden="true">#</a> 路由的概念</h2><h3 id="_1-什么是路由" tabindex="-1"><a class="header-anchor" href="#_1-什么是路由" aria-hidden="true">#</a> 1.什么是路由</h3><p>广义上来讲，路由就是映射关系。</p><h3 id="_2-express中的路由" tabindex="-1"><a class="header-anchor" href="#_2-express中的路由" aria-hidden="true">#</a> 2.Express中的路由</h3><p>在Express中，路由指的是<code>客户端的请求</code>与<code>服务器处理函数</code>之间的<strong>映射关系</strong>。 Express中的路由分3部分组成，分别是<code>请求的类型</code>、<code>请求的URL地址</code>、<code>处理函数</code>，格式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># <span class="token constant">METHOD</span>可以是post、<span class="token keyword">get</span>、put<span class="token operator">...</span>
app<span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">,</span> <span class="token constant">HANDLER</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-express中的路由的例子" tabindex="-1"><a class="header-anchor" href="#_3-express中的路由的例子" aria-hidden="true">#</a> 3.Express中的路由的例子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匹配GET请求，且请求URL为 /</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配POST请求，且请求URL为 /</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Got a POST request&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-路由的匹配过程" tabindex="-1"><a class="header-anchor" href="#_4-路由的匹配过程" aria-hidden="true">#</a> 4.路由的匹配过程</h3><p>每当一个请求到达服务器之后，<code>需要先经过路由的匹配</code>，只有匹配成功之后，才会调用对应的处理函数。 在匹配时，会按照路由的顺序进行匹配，如果<code>请求类型</code>和<code>请求的URL</code>同时匹配成功，则Express会将这次请求，转交给对应的function函数进行处理。</p><p>路由匹配的注意点：</p><ul><li>按照定义的<code>先后顺序</code>进行匹配</li><li><code>请求类型</code>和<code>请求的URL</code>同时匹配成功，才会调用对应的处理函数</li></ul><h2 id="路由的使用" tabindex="-1"><a class="header-anchor" href="#路由的使用" aria-hidden="true">#</a> 路由的使用</h2><h3 id="_1-最简单的用法" tabindex="-1"><a class="header-anchor" href="#_1-最简单的用法" aria-hidden="true">#</a> 1.最简单的用法</h3><p>在Express中使用路由最简单的方式，就是把路由挂载到app上，示例代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建web服务器，命名为app</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 挂载路由</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World.&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World.&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 启动web服务器</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server running at: http://127.0.0.1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-模块化路由" tabindex="-1"><a class="header-anchor" href="#_2-模块化路由" aria-hidden="true">#</a> 2.<code>模块化</code>路由</h3><p>为了<strong>方便对路由进行模块化的管理</strong>，Express<code>不建议</code>将路由直接挂载到app上，而是<code>推荐将路由抽离为单独的模块</code>。 将路由抽离为单独模块的步骤如下：</p><ul><li>创建路由模块对应的.js文件</li><li>调用<code>express.Router()</code>函数创建路由对象</li><li>向路由对象上挂载具体的路由</li><li>使用<code>modules.exports</code>向外共享路由对象</li><li>使用<code>app.use()</code>函数注册路由模块</li></ul><h3 id="_3-创建路由模块" tabindex="-1"><a class="header-anchor" href="#_3-创建路由模块" aria-hidden="true">#</a> 3.创建路由模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1.导入express</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 2.创建路由对象</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/list&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 3.挂载获取用户列表的路由</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Get user list.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user/add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 4.挂载添加用户的路由</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Add new user.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router            <span class="token comment">// 5.向外导出路由对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-注册路由模块" tabindex="-1"><a class="header-anchor" href="#_4-注册路由模块" aria-hidden="true">#</a> 4.注册路由模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入路由模块</span>
<span class="token keyword">const</span> userRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/user.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2.使用app.use()注册路由模块</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>userRouter<span class="token punctuation">)</span> <span class="token comment">// app.use()的作用，就是来注册全局中间件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-为路由模块添加前缀" tabindex="-1"><a class="header-anchor" href="#_5-为路由模块添加前缀" aria-hidden="true">#</a> 5.为路由模块<code>添加前缀</code></h3><p>类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.导入路由模块</span>
<span class="token keyword">const</span> userRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/user.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//2.使用app.use()注册路由模块，并添加统一的访问前缀/api</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> userRouter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function h(b,g){const e=c("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("Express的中文官网："),s("a",r,[n("http://www.expressjs.com.cn"),p(e)])]),d,s("p",null,[k,n(" 在编写调试Node.js项目的时候，如果修改了项目的代码，则需要频繁的手动close掉，然后在重新启动，非常繁琐。 现在，我们可以使用nodemon("),s("a",v,[n("https://www.npmjs.com/package/nodemon"),p(e)]),n(")这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon会自动帮我们重启项目，极大方便了开发和调试。")]),m])}const f=t(l,[["render",h],["__file","5.Express.html.vue"]]);export{f as default};
