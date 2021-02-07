document.getElementById("xmlButton").addEventListener("click", showByXml);

document.getElementById("fetchButton").addEventListener("click", showByFetch);

document.getElementById('modify').addEventListener('click',modifyData);

let objectArray=[]

function modifyData(){
    let selected = document.getElementById('Select');
    let ccaaSelected=selected.options[selected.selectedIndex].value;
    let object = {
        ccaa: ccaaSelected,
        dosisEntregadas: parseInt(document.getElementById('entregadas').value),
        dosisAdministradas:parseInt(document.getElementById('administradas').value),
        dosisPautasCompletada: parseInt(document.getElementById('pCompletadas').value),
        porcentajeEntregadas: parseFloat(document.getElementById('pEntregadas').value),
        porcentajePoblacionAdministradas: parseFloat(document.getElementById('ppa').value),
        porcentajePoblacionCompletas: parseFloat(document.getElementById('ppc').value),
      };
      console.log(object);
      fetch('actualizar_comunidad.php',{
          method:'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        
        body:JSON.stringify(object)

      }).then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });
    document.getElementById('mostrar').innerHTML="CCAA actualizada";
}


function sendData(ccaa,dE,dA,dpc,pE,ppa,ppc) {
    
    let object = {
      ccaa: ccaa,
      dosisEntregadas: dE,
      dosisAdministradas: dA,
      dosisPautasCompletada: dpc,
      porcentajeEntregadas: pE,
      porcentajePoblacionAdministradas: ppa,
      porcentajePoblacionCompletas: ppc,
    };

    objectArray.push(object);
    console.log(objectArray.length);
    if(objectArray.length>=20){
        fetch('insertar_comunidades.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            
            body:JSON.stringify(objectArray)
          
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
    

}


function showByXml() {
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status==200){

            let info=JSON.parse(xhr.responseText);
            let finalInfo=cargarJSON(info);
            document.getElementById("table").innerHTML=finalInfo;
            document.getElementById('mostrar').innerHTML="Datos cargados de la Web";
        }
    }
    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhr.send();

}
function cargarJSON(info){

    let table="<table><tr><th>CCAA</th><th>D.Entregadas</th><th>D.Admin</th><th>D.Completada</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>%Pobl.Completada</th></tr>";
    let select=document.getElementById('Select');
    for(const value of info ){
        let option =document.createElement('option');
        option.innerHTML=value.ccaa;
        select.appendChild(option);
        table+="<tr><td>"+value.ccaa+"</td>";
        table+="<td>"+value.dosisEntregadas+"</td>";
        table+="<td>"+value.dosisAdministradas+"</td>";
        table+="<td>"+value.dosisPautaCompletada+"</td>";
        table+="<td>"+value.porcentajeEntregadas+"</td>";
        table+="<td>"+value.porcentajePoblacionAdministradas+"</td>";
        table+="<td>"+value.porcentajePoblacionCompletas+"</td></tr>";

        sendData(value.ccaa,value.dosisEntregadas,value.dosisAdministradas,value.dosisPautaCompletada,value.porcentajeEntregadas,value.porcentajePoblacionAdministradas,value.porcentajePoblacionCompletas);
    }
    table+="</table>";
    return table;
}

function showByFetch(){
  fetch("https://covid-vacuna.app/data/latest.json")
    .then((response) => response.json())
    .then((data) => {
      let infoRetrieved = JSON.parse(JSON.stringify(data));
        let table="<table><tr><th>CCAA</th><th>D.Entregadas</th><th>D.Admin</th><th>D.Completada</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>%Pobl.Completada</th></tr>";
        let select=document.getElementById('Select');

        for(const value of infoRetrieved) {
            let option =document.createElement('option');
            option.innerHTML=value.ccaa;
            select.appendChild(option);
            table+="<tr><td>"+value.ccaa+"</td>";
            table+="<td>"+value.dosisEntregadas+"</td>";
            table+="<td>"+value.dosisAdministradas+"</td>";
            table+="<td>"+value.dosisPautaCompletada+"</td>";
            table+="<td>"+value.porcentajeEntregadas+"</td>";
            table+="<td>"+value.porcentajePoblacionAdministradas+"</td>";
            table+="<td>"+value.porcentajePoblacionCompletas+"</td></tr>";

            sendData(value.ccaa,value.dosisEntregadas,value.Administradas,value.dosisPautaCompletada,value.porcentajeEntregadas,value.porcentajePoblacionAdministradas,value.porcentajePoblacionCompletas);

        }
        table+="</table>";

        document.getElementById("table").innerHTML=table;
        document.getElementById('mostrar').innerHTML="Datos cargados de la Web";

    })
    .catch((err) => console.log(err));
}
