'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行获取root目录，默认时当前目录
var root = path.resolve(process.argv[2] || '.');

// console.log(root);

// 创建服务器
var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);

    fs.stat(filepath, function(err, stats){
        // console.log(stats.isDirectory())
        if(!err){
            console.log('200'+request.url);
            response.writeHead(200);
            if(stats.isFile()){

            }else if(stats.isDirectory()){
                filepath = filepath + 'index.html';
            }
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404'+request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
