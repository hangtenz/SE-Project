var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/signUp',function(req,res){
    res.render('signUp');
});
app.get('js/jQuery.js',function(req,res){
    res.sendfile("/js/jQurey.js");
});
app.get('/', function(req, res) {
    res.render('index');
});
app.listen(3000,function(){
    console.log("listening on port 3000");
});