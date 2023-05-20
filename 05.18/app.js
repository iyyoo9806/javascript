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

// app.get('/test2', function (req, res) {
//   res.sendfile("testfile2.html");
// });
//
//
// app.get('/dbtest2', function (req, res) {
//   connection.query(`SELECT * FROM post ORDER BY NO DESC;`, function (error, results, fields) {
//     if(error) throw error;
//     res.send(results);
//   });
// });

// app.get('/dbtest3', function (req, res) {
//   let no = Number(req.query.no);
//   console.log(no);
//   connection.query(`DELETE FROM post WHERE no=${no};`, function (error, results, fields) {
//     if(error) throw error;
//     res.send(results);
//   });
// });


app.get('/test', function (req, res) {
  res.sendfile("answer.html");
});


app.get('/test3', function (req, res) {
  res.sendfile("testfile3.html");
});


app.get('/getList', function (req, res) {
  connection.query(`SELECT * FROM post ORDER BY NO DESC;`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});

app.get('/deletePost', function (req, res) {
  let no = Number(req.query.no);
  console.log(no);
  connection.query(`DELETE FROM post WHERE no=${no};`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});


app.get(`/detailPage?`, function (req, res) {
  res.sendfile("detailPage.html");
});


app.get('/viewList', function (req, res) {
  let no = Number(req.query.no);
  connection.query(`SELECT title,content FROM post WHERE no=${no};`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});


app.get(`/modifyPage?`, function (req, res) {
  res.sendfile("modifyPage.html");
});


app.get('/modifyList', function (req, res) {
  let no = Number(req.query.no);
  let title = req.query.title;
  let content = req.query.content;
  connection.query(`UPDATE post SET title = "${title}", content = "${content}" WHERE no=${no};`, function (error, results, fields) {
    if(error) throw error;
    res.send(results);
  });
});
