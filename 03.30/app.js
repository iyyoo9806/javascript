var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/test', function (req, res) {
  console.log("hello");
  res.sendfile("testfile.html");
});
app.get('/test2', function (req, res) {
  console.log("hello2");
  res.sendfile("testfile2.html");
});
app.get('/test3', function (req, res) {
  console.log("hello3");
  res.sendfile("javascript.html");
});

app.get('/test4', function (req, res) {
  console.log("hello3");
  res.sendfile("javascriptprac.html");
});
