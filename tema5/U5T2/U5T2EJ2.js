document.getElementById("showText").addEventListener("click", showText);

function showText() {

    let info =prompt("Insert text here");

    let ul=document.querySelector(".ul");	
    var h = document.createElement("li");
    var t = document.createTextNode(info);
    h.appendChild(t);
    ul.appendChild(h);
}


document.getElementById("deleteF").addEventListener("click",deleteF);

function deleteF(){

    let ul =document.querySelector(".ul");

    let hijo=ul.firstChild;

    ul.removeChild(hijo);
}

document.getElementById("deleteL").addEventListener("click",deleteL);

function deleteL(){

    let ul =document.querySelector(".ul");

    let hijo=ul.lastChild;

    ul.removeChild(hijo);
}