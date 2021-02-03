document.addEventListener("DOMContentLoaded",iniciar);

function iniciar(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let info=JSON.parse(this.responseText);
            let finalInfo=cargarJSON(info);
            document.getElementById("ms").innerHTML+=finalInfo;
        }
    }
    xhr.open("GET", "datosjson.php", true);
    xhr.send();
}

function cargarJSON(JSONData){

    let table="<table>";
    table+="<tr><th>TITULO</th><th>CADENA</th><th>DIRECTOR</th><th>ANYO</th><th>TERMINADA</th></tr>";
    let cata=JSONData.CATALOG;
    console.log(cata);

    for(let i=0; i<cata.length; i++){
        table+="<td><td>"+JSONData.CATALOG[i].TITULO+"</td>";
        table+="<td>"+JSONData.CATALOG[i].CADENA+"</td>";
        table+="<td>"+JSONData.CATALOG[i].DIRECTOR+"</td>";

        if(JSONData.CATALOG[i].ANYO<2000){
        table+="<td class='rojo'>"+JSONData.CATALOG[i].ANYO+"</td>";
        }else if(JSONData.CATALOG[i].ANYO>2000 && JSONData.CATALOG[i].ANYO<2010) {
            table+="<td class='amarillo'>"+JSONData.CATALOG[i].ANYO+"</td>";
        }else {
            table+="<td class='green'>"+JSONData.CATALOG[i].ANYO+"</td>";
        }
        if(JSONData.CATALOG[i].TERMINADA=== "Si"){
            table+="<td ><img src='https://i.pinimg.com/originals/e8/90/be/e890bec9935409a1bceedc5ab6f68e88.gif'></td></tr>";
        }else{
            table+="<td ><img src='https://i.pinimg.com/originals/da/eb/26/daeb26a70a817fbeef6f8e3b5c9baee1.gif'></td></tr>";
        }
        

    }
    table+="</table>";
    document.getElementById("parrafo").innerHTML=table;
}