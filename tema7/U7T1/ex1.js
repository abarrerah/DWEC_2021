
document.getElementById('save').addEventListener("click",()=>{
    let side=document.getElementById('select').value;
    
    let keys=document.getElementById('keyStorage').value;

    let keyValues=document.getElementById('valueStorage').value;

    if(keys !== "" && keyValues !== ""){
        if(side.includes("local")){
            localStorage.setItem(keys,keyValues);
            refresh();
        }else if(side.includes("session")){
            sessionStorage.setItem(keys,keyValues);
            refresh();
        }
    }else{
        alert("inputs are empty.");
    }

});

document.getElementById('delete').addEventListener("click",()=>{

    let keys=document.getElementById('keyStorage').value;

    if(keys=== ""){
        alert("key is empty.")
    }

    if(document.getElementById('select').value.includes("local")){
        localStorage.removeItem(keys);
        refresh();   
    }else if(document.getElementById('select').value.includes("session")){
        sessionStorage.removeItem(keys);
        refresh();
    }

});

document.getElementById('refresh').addEventListener("click",refresh);

function refresh(){
    let localArea=document.getElementById("localArea");
    let sessionArea=document.getElementById("sessionArea");

    localArea.innerHTML="";
    sessionArea.innerHTML="";

    if(localStorage.length>0 && document.getElementById('select').value.includes("local")){
        Object.keys(localStorage).forEach(function(key){
            localArea.innerHTML+="the localStorage with key: "+key+" has a value of: "+localStorage.getItem(key)+"\n";
         });
    }
    if(sessionStorage.length>0 && document.getElementById('select').value.includes("session")){
        Object.keys(sessionStorage).forEach(function(key){
            sessionArea.innerHTML+="the localStorage with key: "+key+" has a value of: "+sessionStorage.getItem(key)+"\n";
        })
    }
}

document.getElementById('check').addEventListener("click",()=>{
    if(typeof Storage !== "undefined"){
        alert("Is compatible with your browser");
    }else{
        alert("Is not compatible with your browser");
    }

});