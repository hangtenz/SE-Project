var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'html');

app.get('/', function(req, res){
    res.render('index');
  });
app.listen(3000,function(){
    console.log("listening on port 3000");
});