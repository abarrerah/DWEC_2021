var answer=prompt("¿Cómo te llamas?");

var answer2=prompt("¿Cuántos años tienes?");

if(answer2<18){
    alert("Hola "+answer+" eres menor de edad y has vivido "+answer2*365+" días" );
}else{
    alert("Hola "+answer+" eres mayor de edad y has vivido "+answer2*365+" días");
}