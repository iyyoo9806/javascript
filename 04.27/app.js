var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/quiz', function (req, res) {
  res.sendfile("quiz.html");
});

app.get('/quizNum', function (req, res) {
  let carPriceInfo = [2100, 1300, 1500, 3500, 3200];
  let colorPriceInfo = [100, 120, 200, 130, 80];
  res.send(carPriceInfo[req.query.car]
    + colorPriceInfo[req.query.color] + "만원");
});
