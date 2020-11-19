
alert("Insert the info. Must be cod_parcela@nombre|apellido1|apellido2");
let info = prompt()

let cs = info.split("@");

let code = cs[0];

let codeString=code.slice(0,4);
let codeInt=code.slice(4,8);
if(typeof codeString == "string" ){
document.getElementById("demo").innerHTML=code+"<br/>";

let code2=cs[1];

let cs2=code2.split("|");

let code3=cs2[0];
document.getElementById("demo").innerHTML+=code3+"<br/>";

let code4=cs2[1];

let code5=cs2[2];

document.getElementById("demo").innerHTML+=code4+" "+code5;
}




