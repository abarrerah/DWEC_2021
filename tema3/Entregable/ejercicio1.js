let arrayBi=[[],[],[]];

function rellenarCarton(array){
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
           array[i][j]=Math.floor(Math.random() * Math.floor(99) + 1);
        }
    }
    return array;
}

function comenzar(){
    
    rellenarCarton(arrayBi);
    
let arr = [];
do {
  let num = Math.floor(Math.random() * 99 + 1);
  arr.push(num);
  arr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  });
} while (arr.length < 15);

compruebaLinea(arrayBi,arr);
compruebaBingo(arrayBi,arr);

}

function compruebaLinea(array,unidem){
    let aux;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            for(let k=0;k<unidem.length;k++){
                if(array[i][j]==unidem[k]){
                    aux++;
                }if(aux>5){
                    alert("Línea!");
                }
            }
        }
    }
}

function compruebaBingo(array,unidem){
    let aux;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            for(let k=0;k<unidem.length;k++){
                if(array[i][j]==unidem[k]){
                    aux++;
                }if(aux>4){
                    alert("Línea!");
                }
            }
        }
        if(aux>14){
            alert("Bingo!");
        }else{
            alert("Lo siento , has perdido");
        }
    }
}

function sacaNumeroNuevo(unidem){

}