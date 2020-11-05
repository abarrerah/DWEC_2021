
let all=prompt("Introduce all info: ","nombre:apellidos:telefono:email:codigopostal");

let cs=all.split(":");

let code=cs[4];
console.log(code);

let info=cs[1];
console.log(info);

let  email=cs[3];

let cs2=email.split("@");

let email2=cs2[1];

console.log(email2);




