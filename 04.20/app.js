var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/radio', function (req, res) {
  console.log("radio");
  res.sendfile("radio.html");
});
app.get('/ajax', function (req, res) {
  console.log("ajax");
  res.sendfile("ajax.html");
});

app.get('/ajaxTest', function (req, res) {
  console.log("ajaxTest");
  res.send("ajax response");
});

app.get('/requestTest1', function (req, res) {
  res.send("response1");
});

app.get('/requestTest2', function (req, res) {
  res.send("response2");
});

app.get('/requestTest3', function (req, res) {
  res.send("response3");
});

app.get('/getFile', function (req, res) {
  res.sendfile("requestTest.html");
});

app.get('/qs', function (req, res) {
  // console.log(req.query.key1);
  // console.log(req.query.key2);
  // console.log(req.query.key3);
  res.sendfile("qs.html");
});

app.get('/qsSum', function (req, res) {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  let num3 = Number(req.query.num3);
  console.log(req.query);
  let resultNum = num1 * num2 * num3;
  res.send(""+resultNum);
});

app.get('/quiz', function (req, res) {
  res.sendfile("quiz.html");
});

app.get('/quizNum', function (req, res) {
  let price = (req.query.price);
  console.log(req.query);
  let item = [1000,5000,10000,30000,50000,100000,500000];
  let answer ="";
  for(let i=0; i<item.length; i++){
    if(price<item[0]){
      answer = "구매불가";
    }else if(price>=item[i]){
      answer = `item${i+1}`;
    }
  }
  res.send(""+answer);
});
