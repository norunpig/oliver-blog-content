## gulp介绍

### 什么是gulp

gulp 是一个基于流的工具包，自动化构建工具，可帮助你自动执行开发工作流程中痛苦或耗时的任务,比如你的sass或less的编译或者模版文件的编译，好比你修改了scss文件中的一处，编译压缩打包等等一些列后面的工作就是gulp自动帮你完成。
gulp是基于Nodejs的自动任务运行器，它能自动完成前端代码的测试、检查、合并、压缩、格式化、浏览器自动发刷新、多浏览器同步、监听文件的改动等等。

### 什么是流

对于流很多没接触过的小伙伴可能比较陌生，如果有使用RXJS等语法对于流应该很清楚。流 就像名字一样 跟水流是一样有源头也会有很多大坝拦截水流发电之类的在往下游继续放直到目的地。
流中有pipe管道概念， 这里pipe可以看成是一个大坝，就是类似于大坝对水流处理在流向下一个大坝,有点类似jq中的链式操作dom.html('xxx').css(xxx).attr(xxx)...., 或者promise.then().then()前一个then返回的结果会给到第二个then的参数继续做处理直到结束。对于stream编程感兴趣可以去学习下RXJS等语法。

### gulp和webpack、grunt的对比
其实现在的webpack很强大几乎gulp能做的webpack都能，但是为啥还是有很多人使用gulp嘞，这在于两者的定位，gulp的口号就是自动化和优化你的工作，它是一个自动化帮助你完成工作中痛苦耗时的工具包，日常中的哪些任务比如：
- 用es6, typescript编写的脚本温家宝需要编译成浏览器认识的javascript
- 用scss，less编写的样式文件需要编译成浏览器认识的css
- 检查代码是否符合书写规范，跑单元测试和集成测试
- 开发环境部署代码需要压缩合并静态文件，添加文件权限（密码）...等等


## gulp安装

### 安装cli
首先需要安装一个gulp命令行工具，这个东西就是为了让gulp相关的命令可以在命令行运行。
```js
npm install -g gulp-cli
```
### 安装gulp包
接着你需要在你要使用的项目里面去安装gulp包才能使用gulp
```js
npm install --save-dev gulp
```
这里是安装到dev环境(--save-dev)，因为gulp只是我们开发代码的一个工具所有不需要到生成环境。

### 检查gulp版本
```js
gulp --version
```

## gulpfile文件

### JavaScript 和 Gulpfile
Gulp允许你使用现有JavaScript知识来书写gulpfile文件或者利用你所掌握的gulpfile经验来书写普通的JavaScript代码。虽然gulp提供了一些实用工具来简化文件系统和命令行的操作，但是你所编写的其他代码都是纯JavaScript代码。

### Gulpfile 详解
gulpfile是项目目录下名为gulpfile.js（或者首字母大写Gulpfile.js，就像Makefile一样命名）的文件，在运行gulp命令时会被自动加载。在这个文件中，你经常会看到类似src()、dest()、series() 或parallel()函数之类的gulp API，除此之外，纯JavaScript代码或Node模块也会被使用。任何导出（export）的函数都将注册到gulp的任务（task）系统中。

### Gulpfile 转译
你可以使用需要转译的编程语言来书写gulpfile文件，例如TypeScript或Babel，通过修改gulpfile.js文件的扩展名来表明所用的编程语言并安装对应的转译模块。
- 对于`TypeScript`，重命名为`gulpfile.ts`并安装`ts-node`模块。
- 对于`Babel`，重命名为`gulpfile.babel.js`并安装`@babel/register`模块。

### Gulpfile 分割
大部分用户起初是将所有业务逻辑都写到一个gulpfile文件中。随着文件的变大，可以将此文件重构为数个独立的文件。
每个任务（task）可以被分割为独立的文件，然后导入`（import）到gulpfile文件`中并组合。这不仅使事情变得井然有序，而且可以对每个任务（task）进行单独测试，或者根据条件改变组合。
Node的模块解析功能允许你将`gulpfile.js`文件替换为同样命名为`gulpfile.js`的目录，该目录中包含了一个名为`index.js`的文件，该文件被当作`gulpfile.js`使用。并且，该目录中还可以包含各个独立的任务（task）模块。

### 创建gulpfile文件
gulpfile文件是gulp的默认配置文件，利用任何个文本编辑器在项目的根目录下创建一个名为gulpfile.js的文件，并在文件中输入以下内容：
```js
function defaultTask(cb) {
    // please code for yourdefault task here
    cb();
}
exports.default = defaultTask
```
> gulpfile.js如果不放置根目录，那么需要启动gulp手动指定gulp配置文件路径 `gulp <tasks?> --gulpfile <path?>`
> 配置文件的名字也可以修改，但是修改后也是需要`--gulpfile`去指定。

在项目根目录下执行gulp命令
```js
gulp
```
如许运行多个任务（task），可以执行
```js
gulp <task> <otherTask>
```
有些可能本来之前项目有gulp，但是自己运行报错等等，记得检查gulp的一些依赖，因为gulp还是有很多其它的插件引入之类的，可以看看gulpfile中引入了哪些插件包都要一起安装
gulp 命令的参数：
>gulp [options] tasks
>Options:
>--version, -v: 打印全局和本地的版本
>--require: 在运行gulpfile之前需要一个模块，这对转发器是有用的，但也有其他应用程序。
>--gulpfile, -f: 手动设置gulpfile的路径。如果你有多个gulpfiles。这将把CWD设置为Gulpfile目录也是可以的。
>--cwd: 手动设置CWD。搜索gulpfile，所有要求的相对路径也将从这里开始。
>--verify: 将验证项目包中引用的插件。package.json插件黑名单。
>--tasks, -T: 打印加载的gulpfile的任务依赖树。
>--tasks-simple: 纯文本打印加载的gulpfile的任务列表
>--tasks-json: JSON格式打印加载的gulpfile的任务列表
>--tasks-depth, --depth: 指定任务依赖树的深度。
>--compact-tasks: 通过只打印顶级任务及其子任务来减少任务依赖树的输出。
>--sort-tasks: 将排序的首要任务的任务依赖树。
>--color: 将强制gulp和gulp插件显示颜色, 即使没有检测到颜色支持。
>--no-color: 将强制gulp和gulp插件不显示颜色, 即使检测到颜色支持。
                         
>--silent, -S: 抑制所有gulp日志记录。
>--continue: 失败后继续执行任务。
>--series: 按顺序运行CLI中给出的任务(默认为并行)
>--log-level, -L: 设置日志级别。-L表示最小verbose， - ll表示最verbose。默认为-LLL

