window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("XML").addEventListener("click", xml2);
    document.getElementById("fetch").addEventListener("click", fetch2);

    
}

function xml2(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let info=JSON.parse(this.responseText);
            let finalInfo=cargarJSON(info);
            document.getElementById("mostrar").innerHTML=finalInfo;
            
        }
    }
    xhr.open("GET", "listar_armas.php", true);
    xhr.send();
    
}

function cargarJSON(JSONData){
    let side=document.getElementById('side');
    let sideSelected=side.options[side.selectedIndex].value;
    let bando="<table><tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>bando</th></tr>";

    for(let i=0; i<JSONData.length;i++){

        if(sideSelected=="Aliados" && JSONData[i].bando== "1"){
            
            bando+="<td>"+JSONData[i].nombre+"</td>";
            bando+="<td>"+JSONData[i].descripcion+"</td>";
            bando+="<td><img src='armas/";
            bando+=JSONData[i].imagen;
            bando+="'></td>";
            bando+="<td>"+JSONData[i].bando+"(ALIADO)</td></tr>";
        }else if(sideSelected=="Eje" && JSONData[i].bando== "2"){
  
            bando+="<td>"+JSONData[i].nombre+"</td>";
            bando+="<td>"+JSONData[i].descripcion+"</td>";
            bando+="<td><img src='armas/";
            bando+=JSONData[i].imagen;
            bando+="'></td>";
            bando+="<td>"+JSONData[i].bando+" (EJE)</td></tr>";
        }
        
    }
    bando+="</table>";

    return bando;

}


function fetch2(){
    fetch("listar_armas.php")
    .then((response) => response.json())
    .then((data) => {
        let alumnos = JSON.parse(JSON.stringify(data));
        let bando="<table><tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>bando</th></tr>";
        let side=document.getElementById('side');
        let sideSelected=side.options[side.selectedIndex].value;
        for (const value of alumnos) {
            if(sideSelected=="Aliados" && value.bando== "1"){
                bando+="<tr>";
    
                bando+="<td>";
                bando+=value.nombre;
                bando+="</td><td>";
                bando+=value.descripcion;
                bando+="</td>";
                bando+="<td><img src='armas/";
                bando+=value.imagen;
                bando+="'></td>";
                bando+="<td>";
                bando+=value.bando;
                bando+="(ALIADO)</td></tr>";
            }else if(sideSelected=="Eje" && value.bando== "2"){

                bando+="<tr>";
                bando+="<td>";
                bando+=value.nombre;
                bando+="</td><td>";
                bando+=value.descripcion;
                bando+="</td>";
                bando+="<td><img src='armas/";
                bando+=value.imagen;
            bando+="'></td>";
                bando+="<td>";
                bando+=value.bando;
                bando+="(EJE)</td></tr>";
            }
            
          }
        bando+="</table>";
        document.getElementById("mostrar").innerHTML=bando;
    })
    .catch((err) => console.log(err));
    
}