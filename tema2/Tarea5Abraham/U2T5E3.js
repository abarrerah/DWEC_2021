function isPrime(num){
    for (let index = 1; index < num; index++) {
            if(num%index==0){
                return true;
            }else{
                return false;
            }
        
    }
}
var count;
for (let index = 1; index < 500; index++) {
    if(index%3==0){
        console.log(index);
    }
    if(isPrime(index)==true){
        count++;
    }
    
}
console.log(count);