var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test1', function (req, res) {
  res.sendfile("test1.html");
});

app.get('/test2', function (req, res) {
  res.sendfile("test2.html");
});

app.get('/test3', function (req, res) {
  res.sendfile("test3.html");
});

app.get('/bmi', function (req, res) {
let height = Number(req.query.height);
let weight = Number(req.query.weight);

let bmi = Math.round((weight/((height/100)*(height/100)))*100)/100;
if(bmi>=30){
  res.send("BMI지수 : "+bmi+" 판정결과 : 비만");
}else if (bmi>=25) {
  res.send("BMI지수 : "+bmi+" 판정결과 : 과체중");
}else if (bmi>=20) {
  res.send("BMI지수 : "+bmi+" 판정결과 : 정상");
}else if (bmi<20) {
  res.send("BMI지수 : "+bmi+" 판정결과 : 저체중");
}
});
//res.send({bmi : bmi, result: result});

app.get('/test4', function (req, res) {
  res.sendfile("test4.html");
});

let totalArr = [];
app.get('/testRanking', function (req, res) {
  let kor = Number(req.query.kor);
  let eng = Number(req.query.eng);
  let math = Number(req.query.math);
  let total = (kor*2)+(eng*3)+(math*5);
  totalArr.push(total);
  totalArr.sort(function(a,b){
    return b-a;
  });

  for(let i=0; i<totalArr.length; i++){
    if(totalArr[i]==total){
      res.send({rank : i+1});
      break;
    }
  }
});
