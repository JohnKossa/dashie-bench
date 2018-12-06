const {DashieServer} = require("dashie");
let server = new DashieServer();
class HelloWorldApp{
    @server.addRoute("GET", "/hello_world")
    static async helloWorld(env, req, res){
        res.end("Hello World!");
    }
}
new HelloWorldApp();
server.listen(1337);


var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var purl = url.parse(req.url,true);
    if(purl.pathname==='/hello_world') {
        res.end('Hello World!\n');
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(1338, '127.0.0.1');

var express = require('express');
var expressApp = express();
expressApp.get('/hello_world', function(req, res){
    res.send("Hello World!");
});
expressApp.listen(1339);


var Koa = require('koa');
var koaRouter = require('koa-route');
const koaApp = new Koa();
koaApp.use(koaRouter.get('/hello_world', function(ctx){
    ctx.body = "Hello World!";
}));
koaApp.listen(1340);

http.createServer(function (req, res) {
    res.end('Hello World!\n');
}).listen(1341, '127.0.0.1');

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1337/hello_world
// 32726.62 requests per second

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1338/hello_world
// 40176.16 requests per second

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1339/hello_world
// 17076.6 requests per second

// ./wrk -t12 -c400 -d30s http://127.0.0.1:1340/hello_world
// 22766.68 requests per second

// Unrouted
// ./wrk -t12 -c400 -d30s http://127.0.0.1:1341/hello_world
// 37530.8 requests per second