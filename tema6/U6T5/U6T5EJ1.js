window.addEventListener("load", inicio);

function inicio() {
    
  document.getElementById("mostrar").addEventListener("click", mostrar);
}

function mostrar() {
  console.log("FUNCIONA MARIBEL");
  let title = document.getElementById("Title").value;
  let director = document.getElementById("Director").value;
  let channel = document.getElementById("Channel").value;
  let year = parseInt(document.getElementById("Year").value);
  let end = document.getElementById("Ended").checked;

  let object = {
    titulo: title,
    director: director,
    cadena: channel,
    anyo: year,
    terminada: end,
  };

  let xhr= new XMLHttpRequest();
  let txt="";

  xhr.onreadystatechange= function(){
      if(this.readyState==4 && this.status== 200){
          console.log(this.responseText);
          let array=JSON.parse(this.responseText);

          for(x in array){
            txt += array[x].titulo+" : "+array[x].director+" : "+array[x].cadena+ " : "+array[x].anyo+" : "+array[x].year+" : "+array[x].terminada;
          }
          document.getElementById("texto").innerHTML= txt;

  
      }
  };
  let parametros= JSON.stringify(object);

  xhr.open("POST","create_serie.php",true);
  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  xhr.send("objeto=" + parametros);

}
