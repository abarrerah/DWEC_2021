
window.onload = function() {
    console.log('onload');
    document.getElementById('submit').addEventListener('click', validar);
}

let validar = () => {
    if(campo20() && validaAnyo() && validaLocalizacion()) {
        alert('Valida');
    } else {
        alert('Invalido');
    }
}

let campo20 = () => {
    let nombre = document.getElementById('nombre').value;
    let grupo = document.getElementById('grupo').value;

    if(nombre.length <= 20 && grupo.length <= 20) {

        document.getElementById('nombre').style.borderColor="green";
        document.getElementById('nombre').style.backgroundColor="green";
        document.getElementById('nombre').style.color="white";
        document.getElementById('grupo').style.borderColor="green";
        document.getElementById('grupo').style.backgroundColor="green";
        document.getElementById('grupo').style.color="white";
        return true;

    }else if(nombre.length >20 ){

        document.getElementById('nombre').style.borderColor="red";
        document.getElementById('nombre').style.backgroundColor="red";
        document.getElementById('nombre').style.color="black";
        return false;

    }else if(grupo.length >20 ){

        document.getElementById('grupo').style.borderColor="red";
        document.getElementById('grupo').style.backgroundColor="red";
        document.getElementById('grupo').style.color="black";
        return false;

    } else {
        return false;
    }
}

let validaAnyo = () => {
    const regex = /^([0-9]{4})/
    let anyo = document.getElementById('anyo').value;
    if(regex.test(anyo)) {
        document.getElementById('anyo').style.borderColor="green";
        document.getElementById('anyo').style.backgroundColor="green";
        document.getElementById('anyo').style.color="white";
        return true;
    } else {

        document.getElementById('anyo').style.borderColor="red";
        document.getElementById('anyo').style.backgroundColor="red";
        document.getElementById('anyo').style.color="black";

        return false;
    }
}

let validaLocalizacion = () => {
    let localizacion = document.getElementById('localizacion').value;
    localizacion = parseInt(localizacion);
    if (localizacion == undefined || typeof(localizacion) == "number") {

        document.getElementById('localizacion').style.borderColor="green";
        document.getElementById('localizacion').style.backgroundColor="green";
        document.getElementById('localizacion').style.color="white";
        return true;
        
    } else {

        document.getElementById('localizacion').style.borderColor="red";
        document.getElementById('localizacion').style.backgroundColor="red";
        document.getElementById('localizacion').style.color="black";
        return false;
    }
}