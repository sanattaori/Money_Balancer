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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
