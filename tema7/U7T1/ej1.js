
document.getElementById('save').addEventListener("click", ()=>{
    let selected = document.getElementById('select');
    let selectedOption=selected.options[selected.selectedIndex].value;
    let info="";

    if(selectedOption=="Local"){

        let key=document.getElementById('key').value;
        let value=document.getElementById('value').value;

        localStorage.setItem(key,value);

         info="La clave del objeto es: "+key+" y el valor: "+localStorage.getItem(key);

        

    }else if(selectedOption=="session"){
  
        let key=document.getElementById('key').value;
        let value=document.getElementById('value').value;

        sessionStorage.setItem(key,value);

         info="La clave del objeto es: "+key+" y el valor: "+sessionStorage.getItem(key);
    }

    document.getElementById('refresh').addEventListener("click" ,()=>{
        
        if(selectedOption=="Local"){

            document.getElementById('LocalArea').innerHTML=info;

        }else if(selectedOption=="session"){

            document.getElementById('SessionArea').innerHTML=info;
        }
        
    });

    document.getElementById('delete').addEventListener("click" ,()=>{
        
        document.getElementById('key').value="";
        document.getElementById('value').value="";

        document.getElementById('LocalArea').innerHTML="";
        document.getElementById('SessionArea').innerHTML="";
    });

    document.getElementById('compatibility').addEventListener("click",()=>{

        if(typeof(Storage) !== "undefined") {

            document.getElementById('mostrar').innerHTML = "Tu navegador es compatible con el LocalStorage y SessionStorage.";

        } else {

            document.getElementById('mostrar').innerHTML = "Tu navegador no es compatible con el LocalStorage y SessionStorage.";

        }
    });
});