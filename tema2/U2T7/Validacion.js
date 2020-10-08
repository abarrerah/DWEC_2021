function rightLetter(num){
    var aux=num%23;
    
    var letter=document.getElementById("select").value;
    var String="TRWAGMYFPDXBNJZSQVHLCKE";
    if((String.charAt(aux))==letter){
        console.log("es correcto");
    }else{
        console.log("La letra del NIF es incorrecta. Seleccionar la letra "+(String.charAt(aux)));
    }
}




function rightLength(num){
    var length=num.toString().length;
    if(length>8 ){
        console.log("El número es más largo de la cuenta");
    }else if(length<8){
        console.log("El número es más corto de la cuenta");
    }else{
        console.log("Longitud correcta");
        rightLetter(num);
    }
  
}

function isEmpty(num){
    var isEmpty=false;
    if(num.toString().length=="0"){
        isEmpty=true;
        return isEmpty;
    }else{
        return isEmpty
    }
}


function exercise(num){
   
    if(isEmpty(num)==true){
        console.log("Por favor, introduzca un número");
    }else{
        if(isNaN(num)){
            console.log("No es un número");
        }else{
            console.log("Es un número");
            rightLength(num);
        }
    }

  
}