var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

// app.get('/test', function (req, res) {
//     connection.query('SELECT * from student;', function (error, results, fields) {
//       if(error) throw error;
//       res.send(results);
//     });
// });


app.get('/test', function (req, res) {
  res.sendfile("testfile.html");
});


app.get('/dbtest', function (req, res) {
let name = req.query.name;
let birth = Number(req.query.birth);
// console.log(name + birth);
connection.query(`INSERT INTO student(NAME,birth) VALUES("${name}",${birth});`, function (error, results, fields) {
  if(error) throw error;
  res.send(results);
});

});


app.get('/test2', function (req, res) {
  res.sendfile("testfile2.html");
});


app.get('/dbtest2', function (req, res) {
  connection.query(`SELECT * FROM post ORDER BY NO DESC;`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});

app.get('/dbtest3', function (req, res) {
  let no = Number(req.query.no);
  console.log(no);
  connection.query(`DELETE FROM post WHERE no=${no};`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});
