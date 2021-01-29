window.addEventListener('load', () => {
        let body = document.querySelector('body');
        let form = document.createElement('form');
        body.appendChild(form);
    
        let arrayAux = ["Nombre del disco: ", "Grupo/artista: ", "Año de publicacion: ", "Tipo de musica: ", "Localizacion: ", "Prestado: "];
        let arrayOpt = ["Rock", "Pop", "Punk", "Indie"];
    
        for(let i = 0; i < 6; i++) {
            if (i == 2) {
                let label = document.createElement('label');
                let text = document.createTextNode(arrayAux[i]);
                label.appendChild(text);
                let select = document.createElement('select');
                select.setAttribute('name', "tipo")
                form.appendChild(label);
                form.appendChild(select);
                for (let j = 0; j < 4; j++) {
                    let option = document.createElement('option');
                    option.setAttribute('value', arrayOpt[j]);
                    let optText = document.createTextNode(arrayOpt[j]);
                    option.appendChild(optText);
                    select.appendChild(option);
                }
                let br = document.createElement('br');
                form.appendChild(br);
    
            } else if (i == 5) {
                let label = document.createElement('label');
                let text = document.createTextNode(arrayAux[i]);
                label.appendChild(text);
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                let br = document.createElement('br');
                form.appendChild(label);
                form.appendChild(input);
                form.appendChild(br);
            } else {
                let label = document.createElement('label');
                let text = document.createTextNode(arrayAux[i]);
                label.appendChild(text);
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                let br = document.createElement('br');
                form.appendChild(label);
                form.appendChild(input);
                form.appendChild(br);
            }
        }
        let input = document.createElement('input');
        input.setAttribute('type', 'submit')
        let text = document.createTextNode("Enviar");
        input.appendChild(text);
        form.appendChild(input);
    });