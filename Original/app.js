var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/test', function (req, res) {
  console.log("hello");
  res.sendfile("testfile.html");
});
