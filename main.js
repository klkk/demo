// 'use strict';

// var greet = require('./helloworld');
// var fs = require('fs');
// var s = "Kong ";
// greet(s);


// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);

// if(fs.fileStat.isFile('./simple.txt')){
    // console.log("xiang");  
// }
// fs.fileManager.readFile({
//     filePath: 'simple.txt',
//     encoding: 'utf-8',
//     success: (result)=>{
//         console.log(result);
//     },
//     fail: ()=>{
//         console.log("error");
//     },
//     complete: ()=>{
//         console.log("complete");
//     }
// });

var http = require("http");
var url = require('url');
var server = http.createServer(function(request,response){
    console.log(request.method+":"+request.url);
    response.writeHead(200,{'Conent-Type':'text/html'});
    var a = url.parse(request.url);
    console.log(":a ="+a);
    response.end("<h1>This is a tessd</h1><br/>"+a);

});
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');