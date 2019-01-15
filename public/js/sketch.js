var First_Name=$('#First_Name')[0];
var signUp=$('#SignUpForm')[0];
var email=$('#email')[0];
var psw=$('#psw')[0];
var repsw = $('#repsw')[0];
var submitBtn = $('#submitBtn');

function submitForm(){
    console.log(psw);
    console.log(repsw);
    if(psw!=repsw){
        alert("Password Don't match.");
    }
}