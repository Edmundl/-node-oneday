const http=require('http');
var server=http.createServer(function (req,res){
	// console.log('有人来了');
	switch(req.url){
		case '/aaa.html':
			res.write("hello world!");
			break;
		default:
			res.write("404");
			break;
	}
	res.end();
});
//监听---等着
//端口---数字
server.listen(9000);