'use strict';

var fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.readFile('sample.png', function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log(data.length + 'bytes');
//     }
// })

// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);

// try {
//     var data = fs.readFileSync('sample.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// var data = 'Hello, Node.js';
// fs.writeFile('output.txt', data, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('ok');
//     }
// })

// var data = 'Hello, Node.js!';
// fs.writeFileSync('output.txt', data);

fs.stat('sample.txt', function(err, stat){
    if(err){
        console.log(err);
    }else{
        // 是否时文件
        console.log('isFile: ' + stat.isFile());
        // 是否时目录
        console.log('isDirectory: ' + stat.isDirectory());
        if(stat.isFile()){
            // 文件大小
            console.log('size: ' + stat.size);
            // 创建时间，Date对象
            console.log('birth time: ' + stat.birthtime);
            // 修改时间，Date对象
            console.log('modified time: ' + stat.mtime);
        }
    }
})