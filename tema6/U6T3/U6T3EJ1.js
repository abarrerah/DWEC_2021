document.addEventListener("DOMContentLoaded",iniciar);

function iniciar(){
    let xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarXML(xhr);
        
      }
    };
    xhr.open("GET", "catalogo.xml", true);
    xhr.send();
}

function cargarXML(xml){

    let docXML = xml.responseXML;
    let row="<table><tr><th>title</th><th>Channel</th><th>Director</th><th>Year</th><th>Ended</th></tr>";
    let attributo;

    let serie=docXML.getElementsByTagName("serie");

    for (let i = 0; i < serie.length; i++){
        row += "<tr><td>";
        row += serie[i].getElementsByTagName("title")[0].textContent;
        row += "</td><td>";
        row += serie[i].getElementsByTagName("tv")[0].textContent;
        row += "</td><td class='cursiva'>";
        row += serie[i].getElementsByTagName("director")[0].textContent;
        row += "</td><td>";
        attributo=year(serie[i].getElementsByTagName("year")[0].textContent);
        row += "</td"+attributo+"><td>";
        row += serie[i].getElementsByTagName("ended")[0].textContent;
        row += "</td></tr>";
    }
    row+="</table>";
    document.getElementById("table").innerHTML = row;
}

function year(nodo){
    let attribut;
    let num=parseInt(nodo);

    if(num<2001){
        attribut="class ='rojo'";
    }else if(num>=2001 ||num<2011){
        attribut="class ='verde'";
    }else{
        attribut="class ='amarillo'";
    }

    return attribut;
}