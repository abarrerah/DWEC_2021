let array_uno = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
let resultados = [];
while(array_uno.indexOf(3) != -1){
    if(array_uno.indexOf(3)){
        resultados.push(array_uno.indexOf(3));
        array_uno[array_uno.indexOf(3)] = 0;
    }
}
console.log(resultados);


let array_dos=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
let resultPair=[];
let resultImpar=[];
let result=[];
for(let i=0;i<array_dos.length;i++){
    if(array_dos[i]%2==0){
        resultPair.unshift(array_dos[i]);
    }else{
        resultImpar.push(array_dos[i]);
    }
}
resultPair.sort();
resultImpar.sort();
result=resultPair.concat(resultImpar);
console.log(result);

let array_cuatro=[232,56,33,876,32,985,729,36,184];

    var len = array_cuatro.length, max = -Infinity;
    while (len--) {
      if (array_cuatro[len] > max) {
        max = array_cuatro[len];
      }
    }

console.log(max);
