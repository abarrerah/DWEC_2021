let name=prompt("Introduce tu nombre con los apellidos","Abraham Barrera Herrera");
let x=name.replace(/ /g,"");
alert("Número de espacios: "+x.length);

alert("Nombre en Minúscula: "+name.toLowerCase());

alert("Nombre en Mayúscula: "+name.toUpperCase());

let y=name.split(" ");
alert(y);

let fullName = name.split(' ');
let final=fullName.pop(' ');
let second = fullName.pop(' '); 
let primero = fullName.pop(' ');

let lFinal=final.charAt(final.length-1);
let lPrimer=primero.charAt(0);

alert(lPrimer+second+lFinal);

let threeFirst=primero.substring(0,3);
let threeMiddle=second.substring(0,3);
let threefinal=final.substring(0,3);

alert(threeFirst+threeMiddle+threefinal);