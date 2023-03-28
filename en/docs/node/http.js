//导入http模块
const http = require('http');

//创建web服务器实例
const server = http.createServer();

//为服务器实例绑定request事件，即可监听客户端发送过来的网络请求：
//使用服务器实例的.on()方法，为服务器绑定一个request事件
server.on('request', (req, res) => {
	const url = req.url  // 获取请求的url地址
	let content = '<h1> 404 Not found!</h1>'  // 设置默认的内容为404 Not found 
	if (url === '/' || url === '/index.html') {
		content = '<h1>首页</h1>'  // 用户请求的是首页
	} else if (url === '/about.html') {
		content = '<h1>关于页面</h1>'  // 用户请求的是关于页面
	}

	res.setHeader('Content-Type', 'text/html; charset=utf-8')  // 设置Content-Type响应头， 防止中文乱码
	res.end(content)  // 把内容发送给客户端
})

//调用服务器实例的 .listen()方法，即可启动当前的web服务器实例：
server.listen(80, () => {
	console.log('http server running at http://127.0.0.1')
})
console.log(module)