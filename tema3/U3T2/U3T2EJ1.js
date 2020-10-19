function mathFunction(){
    num=document.getElementById("myNumber").value;

    if(num<1 || num>4 ){
        console.log("No valid number");
    }
    switch(num){
        case '1':
            let base=prompt("Insert the base number");
            let xp=prompt("Insert the exponential number");
            console.log("the result is: "+ (Math.pow(base,xp)));
            break;
        case '2':
            let num=prompt("Insert a positive number and higher than 2");
            if(num<2){
                console.log("the number is wrong");
            }else{
                console.log(Math.sqrt(num));
            }
            break;
        case '3':
            let number=prompt("Insert a float number");
            let ceil=Math.ceil(number);
            let floor=Math.floor(number);
            console.log(ceil);
            console.log(floor);
            break;
        case '4':
            let numberAngle=prompt("Insert a number between 0 and 360");
            if(numberAngle<0 || numberAngle>360){
                console.log("the number is wrong");
            }else{
                console.log(Math.sin(numberAngle)*(180/Math.PI));
                console.log(Math.cos(numberAngle)*(180/Math.PI));
                console.log(Math.tan(numberAngle)*(180/Math.PI));
            }
            break;
               
    }
}