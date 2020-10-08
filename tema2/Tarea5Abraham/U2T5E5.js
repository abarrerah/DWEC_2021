function Multiplicar(nota){
    num=Number(nota);
    if(num<2 || num>10){
        console.log("Ese número es incorrecto");
        
    }else{
    console.log("Multiplicar");
        nota = parseInt(nota);
    for (let index = 0; index < 11; index++) {
        console.log(nota+" * "+index+" = "+nota*index);
        
    }
    console.log("Suma");
    var i=0;
    while (i<11) {
        console.log((Number(nota)+Number(i)));
        i++;
    }
    console.log("Resta");
    var j=0;
    do {
        console.log((Number(nota)-Number(j)));
        j++;
    } while (j<11);
    }

    
}