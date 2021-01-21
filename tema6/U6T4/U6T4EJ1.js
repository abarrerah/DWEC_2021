window.addEventListener("load",iniciar);

function iniciar(){
  document.getElementById("mostrar").addEventListener("click", mostrar);
}

function mostrar(){
  let xhr=new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let alumnos = JSON.parse(this.responseText);
      let cadena = JSON.stringify(alumnos);
      document.getElementById("parrafo").innerHTML +=
         "en modo cadena es " + cadena + "<br/>";
    }
  };
  xhr.open("GET", "datosjson.php", true);
        xhr.send();
}