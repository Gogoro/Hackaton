var http = require("http"),
    url = require('url'),
    clc = require('cli-color');

var port = 8888;

function start(router){
    function onRequest(request, response){
        
        var pathname = url.parse(request.url).pathname;
        router(pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(port);
    console.log(clc.green('Server has started... on port: ', port));
}

exports.start = start;