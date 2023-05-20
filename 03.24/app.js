var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test2',function(req,res){
  console.log("hellow world");
  res.sendfile("test2.html");
});

app.get('/testfile',function(req,res){
  console.log("hello file");
  res.sendfile("test.html"); // frontend 파일 안에 있는 hello.html 파일을 연다
});

app.get('/table',function(req,res){
  console.log("table");
  res.sendfile("table.html");
});

app.get('/table2',function(req,res){
  console.log("table2");
  res.sendfile("table2.html");
});

app.get('/css',function(req,res){
  console.log("css");
  res.sendfile("css.html");
});

app.get('/javascript',function(req,res){
  console.log("javascript");
  res.sendfile("javascript.html");
});

app.get('/for',function(req,res){
  console.log("for");
  res.sendfile("for.html");
});
