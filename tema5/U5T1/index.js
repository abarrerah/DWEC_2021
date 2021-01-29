let info = document.getElementById('info');

let parrafos = document.querySelectorAll('p');
info.innerHTML = parrafos.length;

info.innerHTML += "<br>";
info.innerHTML += parrafos[1].textContent;

info.innerHTML += "<br>";
let enlaces = document.querySelectorAll('a');
info.innerHTML += enlaces.length;

info.innerHTML += "<br>";
info.innerHTML += enlaces[0];

info.innerHTML += "<br>";
info.innerHTML += enlaces[enlaces.length - 2];

info.innerHTML += "<br>";
let cont = 0;
for(let i = 0; i < enlaces.length; i++) {
    if(String(enlaces[i]).includes("/wiki/Municipio")) {
        cont++;
    }
}
info.innerHTML += cont;

info.innerHTML += "<br>";
let enlacesP = parrafos[0].querySelectorAll('a');
info.innerHTML += enlacesP.length;