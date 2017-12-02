const {DashieServer} = require("dashie");
let server = new DashieServer();
class HelloWorldApp{
    @server.addRoute("GET", "/hello_world")
    static async helloWorld(env, req, res){
        res.write("Hello World!");
        res.end();
    }
}

new HelloWorldApp();
server.listen(1337);

var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var purl = url.parse(req.url,true);
    if(purl.pathname==='/hello_world') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World!\n');
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(1338, '127.0.0.1');

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1337/hello_world
// 27340 requests per second

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1338/hello_world
// 31648 requests per second