window.addEventListener("load", inicio);

function inicio() {
  document.getElementById("show").addEventListener("click", mostrar);
  document.getElementById("Enviar").addEventListener("click", send);
}
function mostrar() {
  fetch("http://localhost:8090/tema6/U6T6/listar_series.php")
    .then((response) => response.json())
    .then((data) => {
        let alumnos = JSON.parse(JSON.stringify(data));
        let series="<table><tr><th>Title</th><th>Channel</th><th>Director</th><th>Year</th><th>Ended</th></tr></table>"
        for (const value of alumnos) {
            series+="<tr><td>";
            series+=value.titulo;
            series+="</td><td>";
            series+=value.director;
            series+="</td><td>";
            series+=value.cadena;
            series+="</td><td>";
            series+=value.anyo;
            series+="</td><td>";
            series+=value.terminada;
            series+="</td></tr>";
          }
        series+="</table>";
        document.getElementById("mostrar").innerHTML=series;
    })
    .catch((err) => console.log(err));
    
}
function send() {
  let object = {
    titulo: document.getElementById("Title").value,
    director: document.getElementById("Director").value,
    cadena: document.getElementById("Channel").value,
    anyo: parseInt(document.getElementById("Year").value),
    terminada: document.getElementById("Ended").checked,
  };
  fetch('create_serie.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:"objeto="+JSON.stringify(object)
})
.then(function (response) {
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});


}
