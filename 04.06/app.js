var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/test', function (req, res) {
  console.log("test1");
  res.sendfile("testfile.html");
});

app.get('/inner', function (req, res) {
  console.log("inner");
  res.sendfile("inner.html");
});

app.get('/gugudan', function (req, res) {
  console.log("gugudan");
  res.sendfile("gugudan.html");
});

app.get('/arr', function (req, res) {
  console.log("arr");
  res.sendfile("arr.html");
});
