function imc(){
    let w=document.getElementById('weight').value;
    let h=document.getElementById('height').value;

    let result=w/(h*h);
    alert(result);
}

function fmc(){
    let a=document.getElementById('age').value;

    let result=220-(a*0.73);

    alert(result);
}

