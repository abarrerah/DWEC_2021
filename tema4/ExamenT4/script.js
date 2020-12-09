let name = document.getElementById("nombre");

let year = document.getElementById("year");

let yearRegex = /^(([7-9][0-9][0-9])|([1-7][0-9][0-9][0-9])|([8][0][0][0]))$/;

let skills = document.getElementById("habilidades");
let select=document.getElementById('roles');
/**
 * Compruebo si existe uno de los casos que exige el ejercicio. Demasiados OR pero no se me ocurría otra cosa.
 */
let skillsRegex = /^(([M])|([WS])|([BS])|([S])|([T])|([W])|([A])|([Ld])|([Sv]))$/;

let shot = document.getElementById("tirada");
/**
 * Comprueba que empice por F mayúscula, seguido de los carácteres que se pide , continuado por una R mayúscula y finalizado por dos números comprendidos del 0 al 9.
 */
let shotRegex = /^([F]([x2>=<])[R][0-9][0-9])$/;

let pass = document.getElementById("password");
/**
 * Valida que empiece por 2 mayúsculas, seguido de que no sea alfanumérico ( no he logrado sacar los dos puntos), continuado por el asterísco , y dos números
 */
let passRegex = /^(([A-Z]{2})(\W)([A-Za-z]{8,})(#)([0-9]{2}))$/;

function putValue() {
  let value = getCookie("tirada");
  document.getElementById("lastShot").innerHTML += value;
}

function setCookie(nombre, valor, expiracion) {
  let date = new Date();
  date.setTime(date.getTime() + expiracion * 24 * 60 * 60 * 5000);
  expiracion = "expires=" + d.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}


function getCookie(nombre) {
  let nom = nombre + "=";
  let array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    console.log(c);
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nom) == 0) {
      return c.substring(nom.length);
    }
  }
  return "";
}
function createCookie() {
  let nombre = "tirada";
  let value=parseInt(generateRandomNumber());
  let expiracion = 5;
  setCookie(nombre, value, expiracion);

}

function validateName() {
  if (name.value.length > 0) {
    console.log(name.value);
    name.style.borderColor = "green";

    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      "<br> Error en el nombre<br/>";
    name.style.borderColor = "red";
    name.focus();
    return false;
  }
}

function validateYear() {
  if (yearRegex.test(year.value)) {
    console.log(year.value);
    year.style.borderColor = "green";

    return true;
  } else {
    document.getElementById("errores").innerHTML += " Error en el Año<br/>";
    year.style.borderColor = "red";
    year.focus();
    return false;
  }
}

function validateSKills() {
  if (skillsRegex.test(skills.value)) {
    console.log(skills.value);
    skills.style.borderColor = "green";
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      " Error en la habilidad<br/>";
    skills.style.borderColor = "red";
    skills.focus();
    return false;
  }
}

function validateShots() {
  if (shotRegex.test(shot.value)) {
    console.log(shot.value);
    shot.style.borderColor = "green";
    return true;
  } else {
    document.getElementById("errores").innerHTML += " Error en la tirada<br/>";
    shot.style.borderColor = "red";
    shot.focus();
    return false;
  }
}

function validatePassword() {
  if (passRegex.test(pass.value)) {
    pass.style.borderColor = "green";
    return true;
  } else {
    document.getElementById("errores").innerHTML +=
      " Error en la contraseña<br/>";
    pass.style.borderColor = "red";
    pass.focus();
    return false;
  }
}

function validateSelect(){

  if(select.value=="0"){
      document.getElementById("roles").focus();

      document.getElementById('errores').innerHTML+="Error en los roles<br>";
      select.style.borderColor="red";
      return false;
  }
  return true;
  

}

function generateRandomNumber() {
  let number = Math.floor(Math.random() * 6 + 1);
  return number;
}

document.addEventListener("submit", (e) => {
  generateRandomNumber();

  if (
    validateName() &&
    validateYear() &&
    validateSKills() &&
    validateShots() &&
    validatePassword() && validateSelect()
  ) {
    createCookie();
    putValue();
    alert("Enviado");
  } else {
    createCookie();
    putValue();
    e.preventDefault();
  }

  

});
