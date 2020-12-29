window.addEventListener("load",init);

function init() {
    document.getElementById('texto').addEventListener("click",crearTexto);
    document.getElementById('pass').addEventListener("click",crearPass);
    document.getElementById('area').addEventListener("click",crearArea);
    document.getElementById('label').addEventListener("click",crearLabel);
}

function crearTexto() {
    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input=document.createElement("input");
    input.type="text";
    input.setAttribute("name",info);
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 

}

function crearPass(){

    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input=document.createElement("input");
    input.type="password";
    input.setAttribute("name",info);
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 

}

function crearArea(){

    let info=prompt("Dime el nombre del atributo name");

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
    let input = document.createElement("input");
    input.type="area";
    input.setAttribute("name",info);
    input.setAttribute("rows","5");
    input.setAttribute("cols","40");
    document.body.appendChild(input);

    for(let i =0; i <2; i++){

        let br=document.createElement("br");
        document.body.appendChild(br);
    } 
}

function crearLabel(){

    let info=prompt("Dime el que  contenido quieres para el  label");
    let info2=prompt("Dime a cual input lo quieres")

    let t=document.createElement("LABEL");
    let x=document.createTextNode(info);
    t.setAttribute("for",info2);
    t.appendChild(x);

}