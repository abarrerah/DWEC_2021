function intFunction(){
    let num=document.getElementById('myNumber').value;
    num=parseInt(num);
    console.log(num.toExponential());
    console.log(num.toFixed(4));
    console.log(num.toString(2));
    console.log(num.toString(8));
    console.log(num.toString(16));
}