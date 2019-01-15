var express = require('express');
var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/signUp',function(req,res){
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var psw = req.body.psw;
    var repsw = req.body.repsw;

    var success = true;
    if(psw!=repsw){
        success=false;
    }
    if(success){
        res.redirect('/');
    }
    else{
        res.redirect('signUp');
    }
});

app.get('/signUp',function(req,res){
    res.render('signUp');
});

app.get('/', function(req, res) {
    res.render('index');
});
app.post('/',function(req,res){
    alert("ERROR");
});

app.listen(3000,function(){
    console.log("listening on port 3000");
});