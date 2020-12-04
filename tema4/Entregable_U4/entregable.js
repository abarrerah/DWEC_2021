function numeroIntentos() {
   
    let cont = getCookie("contador");
    cont++;
    setCookie("contador", cont);
    document.getElementById('intentos').innerHTML=cont;
}
function getCookie(name) {
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return unescape(dc.substring(begin, end));
        }
    }
    return null;
}

function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
        ((path == null) ? "" : "; path=" + path) +
        ((domain == null) ? "" : "; domain=" + domain) +
        ((secure == null) ? "" : "; secure");
}

function delCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path == null) ? "" : "; path=" + path) +
            ((domain == null) ? "" : "; domain=" + domain) +
            "; expires=Thu, 14-Dec-20 00:00:01 GMT";
    }
}


function myFunction() {
  document.getElementById("nombre").value= document.getElementById("nombre").value.toUpperCase();
  
}



function myFunction2() {
  document.getElementById("apellidos").value= document.getElementById("apellidos").value.toUpperCase();
  
}


function validarCampos(){

    /**
     * En este regex, primero comprobamos que que empiece por mayúscula y sea seguido desde 1 hasta 30 minúscula o que sean 30 mayúsculas.
     */
    let regexName=/(^[A-Z]+([a-z]{1,30}|[A-Z]{1,30}))/;
    
    let name=document.getElementById("nombre").value;

    if(name.includes(" ")){

        let split=name.split(" ");
        
        let fName=split[0];

        let sName=split[1];

        if(!regexName.test(fName) || !regexName.test(sName)){
            
            document.getElementById("nombre").focus();
    
            document.getElementById('errores').innerHTML="Error en el nombre compuesto <br>";
            return false;
        }
    }else{

        if(!regexName.test(name)){
            document.getElementById("nombre").focus();
            document.getElementById('errores').innerHTML="Error en el nombre <br>";
            return false;
        }

    }

    return true;
}

function validarCamposApe(){
    /**
     * En este regex, primero comprobamos que que empiece por mayúscula y sea seguido desde 1 hasta 30 minúscula o que sean 30 mayúsculas.
     */
    let regexName=/(^[A-Z]+([a-z]{1,30}|[A-Z]{1,30}))/;
    
    let name=document.getElementById("apellidos").value;

    if(name.includes(" ")){

        let split=name.split(" ");
        
        let fName=split[0];

        
        let sName=split[1];
        
        if(!regexName.test(fName) || !regexName.test(sName)){
            document.getElementById("apellidos").focus();
            document.getElementById('errores').innerHTML+="Error en los apellidos<br>";
            return false;
        }
    }else{

        if(!regexName.test(name)){
            document.getElementById("apellidos").focus();
            document.getElementById('errores').innerHTML+="Error en los apellidos<br>";
            return false;
        }

    }
    return true;
}

function validarAge(){

    let age=document.getElementById('edad').value;

    /**
     * En este regex, existen tres "o". En el primer caso comprueba los números desde el 100 hasta el 105, en segundo bloque comprueba que tenga entre 0 y 9 años, y el último o, comprueba si el valor del elemento "edad" está entre los 10 y 99 años.
     */
    let regexAge=/^([1][0][0-5]|([0-9]|[1-9][0-9]))$/;

    if(!regexAge.test(age)){

        document.getElementById("edad").focus();
        document.getElementById('errores').innerHTML+="Error en la edad<br>";
        return false;
    }
    return true;
}

function validarNIF(){

    let nif=document.getElementById('nif').value;

    /**
     * En este regex primero comprueba que el valor empiece con 8 dígitos comprendidos en el desdel 0 al 9, seguido de un guión y una letra mayúscula. El dolar del final es simplemente una comprobación de que se tiene que poner todo.
     */
    let regexNIF=/^([0-9]{8}(-)[A-Z])$/;

    if(!regexNIF.test(nif)){
        document.getElementById("nif").focus();
        document.getElementById('errores').innerHTML+="Error en la nif<br>";
        return false;
    }
    return true;
}

function validarEmail(){

    let email=document.getElementById('email').value;

    /**
     * En este regex existen 3 "O" casos hasta llegar el "@". En el primero solo comprueba si el correo solo contiene letras (y si se intercala mayúscula o minúscula), en el segundo caso si existe números, letras y letras intercaladas. 
     * En el tercer caso comprueba si tiene el correo mayúsculas,mínúsculas, números y guiones y guiones bajos (ya que he cogido por referencia el gmail, que no permite otros caractéres). 
     * Después, comprueba que es precedido por un "@", seguido de texto que puede ser el nombre corporativo del correo, el punto y dominio.
     */

    let regexEmail=/(^([a-zA-Z]|[a-zA-Z0-9]|[a-zA-Z0-9_-])+(@)([a-z]+)(.)([a-z]+))$/;

    if(!regexEmail.test(email)){

        document.getElementById("email").focus();
        document.getElementById('errores').innerHTML+="Error en la email<br>";
        return false;
    }
    return true;
}

function validarProvincia(){

    let provincia=document.getElementById('provincia').value;

    if(provincia=="0"){
        document.getElementById("provincia").focus();
        document.getElementById('errores').innerHTML+="Error en la provincia<br>";
        return false;
    }
    return true;
    

}

function validarFecha(){

    let fecha = document.getElementById('fecha').value;
    /**
     * En primer caso, comprueba que sea 3 bloques de números, siendo el primer bloque dos números, el segundo el mismo caso y el tercero que sea 4 dígitos (desde el 0000 hasta el 9999). Todo separado con barras.
     * El segundo caso comprueba lo mismo pero si está separado por guiones
     */
    let fechaRegex = /^([0-9]{1,2})(\/)([0-9]{1,2})(\/)([0-9]{4})|([0-9]{1,2})(-)([0-9]{1,2})(-)([0-9]{4})$/;

    if(!fechaRegex.test){
        document.getElementById("fecha").focus();
        document.getElementById('errores').innerHTML+="Error en la fecha<br>";
        return false;
    }
    return true;
}

function validarTelefono(){

    let telefono=document.getElementById('telefono').value;

    /**
     * Este regex obliga que empiece por 9 dígitos y sean obligatorios.
     */
    let regexTelefono =/^([0-9]{9})$/;

    if(!regexTelefono.test(telefono)){
        document.getElementById("telefono").focus();
        document.getElementById('errores').innerHTML+="Error en la telefono<br>";
        return false;
    }
    return true;


}


function validarHora(){

    let hora=document.getElementById('hora').value;

    /**
     * Este regex, comprueba el primer caso que exista números en la hora desde las 00 am hasta las 9 am  o que sea desde las 10 am hasta las 23 pm.
     * Después comprueba que contenga los dos puntos, que sea del 0 al 5 ya que no existe ningún número a partir del minuto 59
     */

    let regexHora=/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if(!regexHora.test(hora)){

        document.getElementById("hora").focus();
        document.getElementById('errores').innerHTML+="Error en la hora<br>";
        document.getElementById('errores').innerHTML+="<br>";
        return false;
    }
    return true;

}



document.getElementById("nombre").addEventListener("blur", myFunction);
document.getElementById("apellidos").addEventListener("blur", myFunction2);


function clicked(e){
    if(!confirm('Are you sure?')) {
        e.preventDefault();
    }
}



document.addEventListener("submit",(e)=>{

    clicked(e);

    if(validarCampos() && validarCamposApe() && validarAge() && validarNIF() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora()){  

        alert("Everything is sent, Picha");

    }else{
        e.preventDefault();
    }
});
