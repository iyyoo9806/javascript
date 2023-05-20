var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/arr2D', function (req, res) {
  console.log("arr2D");
  res.sendfile("arr2D.html");
});

app.get('/radio', function (req, res) {
  console.log("radio");
  res.sendfile("radio.html");
});
