
let nif=document.getElementById('dni');

let nombre=document.getElementById('nombre');

let fecha=document.getElementById('fecha');

let hijos=document.getElementById('hijos').value;

let email=document.getElementById('email').value;

let web=document.getElementById('web').value;

let password=document.getElementById('cont').value;

let nifRegex=/^([0-9]{2}(.)([0-9]{3})(.)([0-9]{3})(-)([A-Z]))$/;

let nombreRegex=/^(?![\s.]+$)[a-zA-Z\s.]*$/

function validarDni(){
    

    if(nifRegex.test(this.value)){
        console.log("correct");
        nif.style.backgroundColor="white";
    }else{
        nif.style.backgroundColor="red";
        nif.focus();
    }
     
}

function validarNombre(){

    if(nombreRegex.test(this.value)){
        console.log("correct");
        nombre.style.backgroundColor="white";
    }else{
        nombre.style.backgroundColor="red";
        nombre.focus();
    }
}

function validarFecha(){
    if(){

    }else{
        
    }
}


nif.addEventListener("keyup",validarDni,false);
nombre.addEventListener("keyup",validarNombre,false);