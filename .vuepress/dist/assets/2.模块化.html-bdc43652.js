import{_ as e,p as n,q as s,a1 as d}from"./framework-5866ffd3.js";const i={},l=d(`<h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1><h2 id="模块化基本概念" tabindex="-1"><a class="header-anchor" href="#模块化基本概念" aria-hidden="true">#</a> 模块化基本概念</h2><h3 id="_1-什么是模块化" tabindex="-1"><a class="header-anchor" href="#_1-什么是模块化" aria-hidden="true">#</a> 1.什么是模块化</h3><p><code>模块化</code>是指解决一个<strong>复杂问题</strong>时，自顶向下逐层<strong>把系统划分成若干模块的过程</strong>。对于整个系统来说，<strong>模块是可组合、分解和更换的单元</strong>。</p><p>编程领域的模块化，就是<code>遵守固定的规则</code>，把一个<code>大文件</code>拆分成<strong>独立并互相依赖</strong>的<code>多个小模块</code>。</p><p>把代码进行模块化拆分的好处：</p><ul><li>提高了代码的复用性</li><li>提高了代码的可维护性</li><li>可以实现按需加载</li></ul><h3 id="_2-模块化规范" tabindex="-1"><a class="header-anchor" href="#_2-模块化规范" aria-hidden="true">#</a> 2.模块化规范</h3><p><code>模块化规范</code>就是对代码进行模块化拆分与组合时，需要遵守的那些规则。</p><p>例如：</p><ul><li>使用什么样的语法格式来<strong>引用模块</strong></li><li>在模块中使用什么样的语法格式<strong>向外暴露需成员</strong></li></ul><p><code>模块化规范的好处</code>：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利已。</p><h2 id="node-js-中模块化" tabindex="-1"><a class="header-anchor" href="#node-js-中模块化" aria-hidden="true">#</a> Node.js 中模块化</h2><h3 id="_1-node-js-中模块的分类" tabindex="-1"><a class="header-anchor" href="#_1-node-js-中模块的分类" aria-hidden="true">#</a> 1.Node.js 中模块的分类</h3><p>Node.js中根据模块来源的不同，将模块分为了3大类，分别是：</p><ul><li><code>内置模块</code>（内置模块是由Node.js官方提供的，例如fs、path、http等）</li><li><code>自定义模块</code>（用户创建的每个.js文件,都是自定义模块）</li><li><code>第三方模块</code>（<strong>由第三方发出来的模块</strong>，并非官方提供的内置模块，也不是用户创建的自定义模块，<strong>使用前需要先下载</strong>）</li></ul><h3 id="_2-加载模块" tabindex="-1"><a class="header-anchor" href="#_2-加载模块" aria-hidden="true">#</a> 2.<code>加载</code>模块</h3><p>使用强大的require()方法，可以加载需要的<strong>内置模块、用户自定义模块、第三方模块</strong>进行使用。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.加载内置的fs模块
const fs = require(&#39;fs&#39;);

// 2.加载用户的自定义模块
const custom = require(&#39;./custom.js&#39;);

// 3.加载第三方模块
const moment = require(&#39;moment&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>注意：</code>使用require()方法加载其它的模块时，会执行被加载模块中的代码。</p><h2 id="node-js中的模块作用域" tabindex="-1"><a class="header-anchor" href="#node-js中的模块作用域" aria-hidden="true">#</a> Node.js中的模块作用域</h2><h3 id="_1-什么是模块作用域" tabindex="-1"><a class="header-anchor" href="#_1-什么是模块作用域" aria-hidden="true">#</a> 1.什么是模块作用域</h3><p>和<code>函数作用域</code>类似，在自定义模块中定义的<code>变量</code>、<code>方法</code>等成员，<strong>只能在当前模块内被访问</strong>，这种<strong>模块级别的访问限制</strong>，叫做<code>模块作用域</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 01.custom.js

// 1.在模块作用域中定义常量username
const username = &#39;张三&#39;
// 2.在模块作用域中定义函数sayHello
function sayHello() {
	console.log(&#39;大家好！我是&#39; + username)
}

// 02.test.js
const custom = require(&#39;./01.custom&#39;);
// 输出{} 空对象
// 在02.test.js模块中，无法访问到01.custom.js模块中的私有成员
console.log(custom)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-模块作用域的好处" tabindex="-1"><a class="header-anchor" href="#_2-模块作用域的好处" aria-hidden="true">#</a> 2.模块作用域的好处</h3><p>防止了全局变量污染的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// reg.js
var username = &#39;zs&#39;;

// login.js
var username = &#39;ls&#39;

// index.html
&lt;body&gt;
&lt;h1&gt;index 首页&lt;/h1&gt;

&lt;script src=&quot;./reg.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./login.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;

console.log(username) // 输出ls

&lt;/script&gt;

&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向外共享模块作用域中的成员" tabindex="-1"><a class="header-anchor" href="#向外共享模块作用域中的成员" aria-hidden="true">#</a> 向外共享模块作用域中的成员</h2><h3 id="_1-module-对象" tabindex="-1"><a class="header-anchor" href="#_1-module-对象" aria-hidden="true">#</a> 1.module 对象</h3><p>在每个.js自定义模块中都有一个module对象，它里面<code>存储了和当前模块有关的信息</code>,打印如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Module {
  id: &#39;.&#39;,
  path: &#39;/Users/xxxx/Desktop/文档/electron/node&#39;,
  exports: {},
  parent: null,
  filename: &#39;/Users/xxxx/Desktop/文档/electron/node/http.js&#39;,
  loaded: false,
  children: [],
  paths: [
    &#39;/Users/xxxx/Desktop/文档/electron/node/node_modules&#39;,
    &#39;/Users/xxxx/Desktop/文档/electron/node_modules&#39;,
    &#39;/Users/xxxx/Desktop/文档/node_modules&#39;,
    &#39;/Users/xxxx/Desktop/node_modules&#39;,
    &#39;/Users/xxxx/node_modules&#39;,
    &#39;/Users/node_modules&#39;,
    &#39;/node_modules&#39;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-module-exports" tabindex="-1"><a class="header-anchor" href="#_2-module-exports" aria-hidden="true">#</a> 2.module.exports</h3><p>在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。</p><p>外界用<code>require()方法</code>导入自定义模块时，得到的就是module.exports所指向的对象。</p><h3 id="_3-共享成员时的注意点" tabindex="-1"><a class="header-anchor" href="#_3-共享成员时的注意点" aria-hidden="true">#</a> 3.共享成员时的<code>注意点</code></h3><p>使用require()方法导入模块时，导入的结果，<code>永远以module.exports指向的对象为准</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 01.test.js
// 1.向module.exports对象上挂载属性username
module.exports.username = &#39;zs&#39;
// 2.向module.exports对象上挂载方法sayHello
module.exports.sayHello = function() {
	console.log(&#39;Hello&#39;)
}

// 3.让module.exports指向一个全新的对象
module.exports = {
	nickname: &#39;小黑&#39;,
	sayHi() {
		console.log(&#39;Hi&#39;);
	}
}

// 02.test.js
// 1.导入模块01.test.js
const m1 = require(&#39;./01.test.js&#39;);

// 输出{nickname: &#39;小黑&#39;, sayHi: [function: sayHi]}
console.log(m1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-exports对象" tabindex="-1"><a class="header-anchor" href="#_4-exports对象" aria-hidden="true">#</a> 4.exports对象</h3><p>由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了<code>exports</code>对象。<code>默认情况下，exports和module.exports指向同一个对象</code>。最终共享的结果，还是以module.exports指向的对象为准。</p><h3 id="_5-exports-和-module-exports的使用误区" tabindex="-1"><a class="header-anchor" href="#_5-exports-和-module-exports的使用误区" aria-hidden="true">#</a> 5.exports 和 module.exports的使用误区</h3><p>时刻谨记，require()模块时，得到的永远是module.exports指向的对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports.username = &#39;zs&#39;
module.exports = {
	gender: &#39;男&#39;,
	age: 22
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{gender: &#39;男&#39;, age: 22}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports.username =  &#39;zs&#39;
exports = {
	gender: &#39;男&#39;,
	age: 22
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{username: &#39;zs&#39;}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports.username = &#39;zs&#39;
module.exports.gender = &#39;男&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>{username: &#39;zs&#39;, gender: &#39;男&#39;}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exports = {
	username: &#39;zs&#39;,
	gender: &#39;男&#39;
}
module.exports = exports
module.exports.age = &#39;22&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{username: &#39;zs&#39;, gender: &#39;男&#39;, age: &#39;22&#39;}</p><h3 id="_6-node-js-中的模块化规范" tabindex="-1"><a class="header-anchor" href="#_6-node-js-中的模块化规范" aria-hidden="true">#</a> 6.Node.js 中的模块化规范</h3><p>Node.js遵循了CommonJS模块化规范，CommonJS规定了<code>模块的特性</code>和各模块之间如何相互依赖。</p><p>CommonJS规定：</p><ul><li>每个模块内部，<code>module变量</code>代表当前模块。</li><li>module变量是一个对象，它的exports属性（即<code>module.exports</code>）是对外的接口。</li><li>加载某个模块，其实是加载该模块的module.exports属性。<code>require()方法用于加载模块</code>。</li></ul>`,53),a=[l];function r(o,t){return n(),s("div",null,a)}const u=e(i,[["render",r],["__file","2.模块化.html.vue"]]);export{u as default};
