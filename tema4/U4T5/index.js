
const regexFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
const regexCocinero = /^([A-Z]{2})([#@$]?)([0-9]{4})$/
const regexDestinatario = /^([A-Z]{2,3})(_?)([a-z]+)(:?)([0-9]{4})$/
const regexGramos = /(5000)|(^[1-4]+[0-9]{3})|(^[1-9]+[0-9]{2})/
const regexComposicion = /^([0-9]+)(g?)([A-Z]{1,2}[0-9]{0,1}){2}$/
const regexNumCuenta = /^([a-z]{2})([0-9]{2})(-?)([0-9]{12})(-?)([0-9]{2})/;

let validaFecha = () => {
    let fecha = document.getElementById('fecha').value;
    if(regexFecha.test(fecha)) {
        return true;
    } else {
        return false;
    }
}

let validaCocinero = () => {
    let cocinero = document.getElementById('cocinero').value;
    if(regexCocinero.test(cocinero)) {
        return true;
    } else {
        return false;
    }
}

let validaDestinatario = () => {
    let destinatario = document.getElementById('destinatario').value;
    if(regexDestinatario.test(destinatario)) {
        return true;
    } else {
        return false;
    }
}

let validaGramos = () => {
    let gramos = document.getElementById('gramos').value;
    if(regexGramos.test(gramos)) {
        return true;
    } else {
        return false;
    }
}

let validaComposicion = () => {
    let composicion = document.getElementById('composicion').value;
    if(regexComposicion.test(composicion)) {
        return true;
    } else {
        return false;
    }
}

let validaNumCuenta = () => {
    let numCuenta = document.getElementById('cuenta').value;
    if (regexNumCuenta.test(numCuenta)) {

        return true;
    } else {
        alert("fallo aquí");
        return false;
    }
}

let validar = () => {
    if (validaFecha() && validaCocinero() && validaDestinatario() && validaGramos() && validaComposicion() && validaNumCuenta()) {
        document.getElementById('valid').style.display = "block";
    } else {
        document.getElementById('invalid').style.display = "block";
    }
}
document.getElementById("submit").addEventListener("click", validar, false);