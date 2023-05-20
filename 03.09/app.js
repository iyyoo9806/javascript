var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
app.get('/test', function (req, res) {
  res.send("hellow worldasd");
});


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();

connection.query("UPDATE student SET NAME ='안녕' WHERE NO = 2;", function (error, results, fields) {
   console.log(results);
  if (error) throw error;
});

connection.query('SELECT * FROM student;', function (error, results, fields) {
   console.log(results);
  if (error) throw error;
});

// connection.query('SELECT * FROM student', function (error, results, fields) {
//   console.log(results);
//   if (error) throw error;
// });
app.get('/testfile1', function (req, res) {
  res.sendfile("test.html");
});

app.get('/testfile2', function (r1, r2) {
  console.log(r2);
  r2.sendfile("test2.txt");
});
