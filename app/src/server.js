var express = require('express');
var app = express();

//your routes here
app.get('/', function (req, res) {
    res.send("Testing webapp");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
