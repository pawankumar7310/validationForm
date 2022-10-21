
function validation(){
    
    
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var pass=document.getElementById("pass").value;
    var cnfpass=document.getElementById("cnfpass").value;
    var email=document.getElementById("email").value;
    
// name validation

var str=/^[A-Za-z]+$/;
if(name==""){
    document.getElementById("sname").innerHTML="please fill the name";
    return false;
}
else if((name.length<=2)||(name.length>=20)){
    document.getElementById("sname").innerHTML="name should be more than 2 characters and less than 20 & number not allowed";
    return false;
}
else if(!isNaN(name)){
    document.getElementById("sname").innerHTML="number is not allowed";
    return false;
}
else {
    document.getElementById("sname").innerHTML=" ";
}
if(name.match(str))
    true;
    else{
        document.getElementById("sname").innerHTML="only alphabet allow";
        return false;
    }

// name validation done ! 

/*******************************************************************************************************/ 

// phone validation



if(isNaN(phone)){
    document.getElementById("sphone").innerHTML="only number allow";
    return false;
}
else if(phone==""){
    document.getElementById("sphone").innerHTML="null number not allow";
    return false;
}
else if(phone.length!=10){
    document.getElementById("sphone").innerHTML="only 10 decimal allow";
    return false;
}
else{
    document.getElementById("sphone").innerHTML="";
}



// phone validation done !

/*******************************************************************************************************/ 

// password validation

if(pass==""){
    document.getElementById("spass").innerHTML="null password not allowed";
    return false;
}
else if((pass.length<=5)||(pass.length>20)){
    document.getElementById("spass").innerHTML="password length between 5 to 20 only";
    return false;
}

//confirm pass
if(cnfpass==""){
    document.getElementById("scnfpass").innerHTML="nul password";
    return false;
}
else if(pass!=cnfpass){
    document.getElementById("scnfpass").innerHTML="password not matched";
    return false;
}
else{
    document.getElementById("spass").innerHTML="";
    document.getElementById("scnfpass").innerHTML="";
}



/********************************************************************************************************/ 
// email validation
if(email==""){
    document.getElementById("semail").innerHTML="invalid email";
    return false;
}
else if(email.indexOf("@")<=0){
     document.getElementById("semail").innerHTML="@ sign invalid position";
     return false;
 }

else if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
    document.getElementById("semail").innerHTML=". sign invalid position";
    return false;
}
else{
    document.getElementById("semail").innerHTML="";
}
// email validation done !

/***********************************************************************************************************/ 



}
// main function end