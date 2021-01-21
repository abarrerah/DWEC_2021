document.addEventListener("DOMContentLoaded",iniciar);
function iniciar(){
  document.getElementById("resultado").style.backgroundColor="white";
    miXHR= new XMLHttpRequest();
    document.getElementById("send").addEventListener("click", startChange, true);
    
}
let params=document.getElementById('texto').value;
function startChange(){
    cargaAsync("localidad.php?localidad=" +params);
}
function cargaAsync(url){
    if(miXHR){   										
        console.log(miXHR.readyState); 
        miXHR.open('GET', url, true);
        console.log(miXHR.readyState);
        document.getElementById("texto").value;     
        miXHR.onreadystatechange = estadoPeticion; 
        miXHR.open("GET", url+"?"+params, true);
        miXHR.send(null);
        console.log("justo después del send");
    }
}
function estadoPeticion() {
    console.log(miXHR.readyState);
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      if(miXHR.responseText==="SI"){
        document.getElementById("resultado").style.backgroundColor="green";
      }else{
        document.getElementById("resultado").style.backgroundColor="red";
      }
      textoDIV(document.getElementById("resultado"), miXHR.responseText);
    }
  }
  function textoDIV(nodo, texto) {
    while (nodo.firstChild) {
      nodo.removeChild(nodo.firstChild);
    }
    nodo.appendChild(document.createTextNode(texto));
    console.log(miXHR.responseText);
  }
