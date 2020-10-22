let info=prompt("Insert your password");

if(info.length>8 || info.length<17){
    alert("Correct Length");
}else{
    alert("Incorrect Length");
}
if(info.toUpperCase() != info){
    alert("Your password contains a lower case");
}else{
    alert("Your password doesnt contain a lower case");
}
if(info.toLowerCase()!=info){
    alert("Your password contains a upper case");
}else{
    alert("Your password doesnt contains a upper case");
}
if(/\d/.test(info)){
    alert("Contains a number");
}else{
    alert("Doesnt contains a number");
}
let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
if(format.test(info)==true){
    alert("Your password contains a special character");
}else{
    alert("Your password doesnt contains a special character");
}








