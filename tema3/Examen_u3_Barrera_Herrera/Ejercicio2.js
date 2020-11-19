let info=prompt("Insert the string");

let newInfo=info.replace(/\s/g,'')

let finalInfo="";
for(let i =0;i<newInfo.length;i++){
    let randomN=Math.floor(Math.random()*10);
    if(randomN>5){
        let charAtUpper=newInfo.slice(i,(i+1)).toUpperCase();
        finalInfo+=charAtUpper;
    }else{
        let charAtLower=newInfo.slice(i,(i+1)).toLowerCase();
        finalInfo+=charAtLower
    }
    
}
let newFinalInfo="";
for(let i=0;i<finalInfo.length;i++){
    let hyphen=finalInfo.slice(i,(i+1));
    newFinalInfo+=hyphen+"-";
    if(i==finalInfo.length-1){
        newFinalInfo+=hyphen;
    }

}


document.getElementById("demo").innerHTML=newFinalInfo;


