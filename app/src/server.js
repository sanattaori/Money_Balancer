var express = require('express');
var morgan = require('morgan');
var path = require('path');



var app = express();
app.use(morgan('combined'));
//your routes here

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'main.js'));
});

app.get('/js/enjoyhintsetup.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'enjoyhintsetup.js'));
});

app.get('/js/enjoyhintsetup1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'enjoyhintsetup1.js'));
});


app.get('/screen1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'screen1.html'));
});


app.get('/counter', function (req, res){
    counter = counter +1;
    res.send (counter.toString());
    
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


