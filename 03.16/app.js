var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test',function(req,res){
  console.log("hellow world");
  res.send("hellow text");
});

app.get('/testfile',function(req,res){
  console.log("hello file");
  res.sendfile("frontend/hello.html"); // frontend 파일 안에 있는 hello.html 파일을 연다
});
