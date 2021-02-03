window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("XML").addEventListener("click", xml);
    document.getElementById("fetch").addEventListener("click", fetch);
}

function xml(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let info=JSON.parse(this.responseText);
            
            console.log(info);
        }
    }
    xhr.open("GET", "listar_armas.php", true);
    xhr.send();
    
}

function fetch(){
    fetch("http://localhost:8090/tema6/Entregable/listar_armas.php")
    .then((response) => response.json())
    .then((data) => {
        let alumnos = JSON.parse(JSON.stringify(data));
        let bando="<table><tr><th>idArma</th><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>bando</th></tr></table>"
        for (const value of alumnos) {
            bando+="<tr><td>";
            bando+=value.idArma;
            bando+="</td><td>";
            bando+=value.nombre;
            bando+="</td><td>";
            bando+=value.descripcion;
            bando+="</td><td>";
            bando+=value.imagen;
            bando+="</td><td>";
            bando+=value.bando;
            bando+="</td></tr>";
          }
        bando+="</table>";
        console.log(bando);
    })
    .catch((err) => console.log(err));
    
}