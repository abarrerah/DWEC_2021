
var result=prompt("Please, enter a number","1");


var random=Math.floor(Math.random()*(100-1)+1);
var count;
var bol=false;
while(bol !=true){
  if(isNaN(result)){
    console.log("No es un número ");
    bol==false;
    break;
}else{
  console.log("Es número");
  if(result !=random && result<random ){
    console.log("No es correcto. Es menor");
    var result=prompt("Please, enter a number","1");
    count++;
    bol==false;
    break;
  }else if(result !=random && result>random){
    console.log("No es correcto. Es mayor");
    var result=prompt("Please, enter a number","1");
    count++;
    bol==false;
    break;
  }else{
    console.log("Es correcto. Turnos: "+count);
    bol==true;
  }
}
}


