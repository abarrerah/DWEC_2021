let fecha1 = new Date();
let fecha2 = new Date('2021/06/24');

let resta = fecha2.getTime() - fecha1.getTime();

console.log((Math.round(resta/ (1000*60*60*24)))+" días");