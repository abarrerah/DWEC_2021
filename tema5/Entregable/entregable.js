
let column=document.getElementById('columnas').value;
let row=document.getElementById('filas').value;
document.getElementById('send').addEventListener("click",iniciar);

let header=document.getElementById('check').addEventListener("click",function(){
    for(let k=0;k<row;k++){
        let newInput=document.createElement('input');
        newInput.setAttribute('id','input'+k);
        document.getElementById('parentDiv').appendChild(newInput);
    }
});

function iniciar(){
    
    if(document.querySelector('table')!=null){
        let previousTable=document.querySelector('table');
        previousTable.remove();
    }

    let txt=document.getElementById('textoCelda').value;
    let width=document.getElementById('border').value;
    let color=document.getElementById('selected');
    let colorSelected=color.options[color.selectedIndex].value;

    let body= document.getElementsByTagName('body')[0];
    let table=document.createElement('table');
    let tBodt=document.createElement('tBody');
    let info=width+"px solid "+colorSelected;
    
    for(let i =1;i<row;i++){
        let fila=document.createElement('tr')
        fila.style.border=info;

        for(let j=0;j<column;j++){
            
            let celda=document.createElement('td');
            celda.style.border=info;
            let textCell=document.createTextNode(txt);
            celda.appendChild(textCell);
            fila.appendChild(celda);
        }
        tBodt.appendChild(fila);
    }
    table.style.border=info;
    table.appendChild(tBodt);
    let hr=document.createElement('hr');
    body.appendChild(hr);
    body.appendChild(table);

    
}





