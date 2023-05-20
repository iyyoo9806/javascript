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

app.get('/test4', function (req, res) {
  res.sendfile("test4.html");
});

app.get('/testRanking', function (req, res) {
  let kor = Number(req.query.kor);
  let eng = Number(req.query.eng);
  let math = Number(req.query.math);
  let count = Number(req.query.count);
  let total = (kor*2)+(eng*3)+(math*5);
  let totalArr = [];
  let rank = 1;
// 먼저 클릭할 때마다 count를 올려 배열에 종합점수들을 넣고 난 후
// 기본 랭크 1을 두고 이전 숫자들과 비교했을때 크면 -1 작으면 +1 같으면 +0을 하되 그 결과가 1미만이라면 1로 값을 되돌리는 것이 목적이였으나
// 잘 안됬습니다.


  res.send("");
});
