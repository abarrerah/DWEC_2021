document.getElementById("btn1").addEventListener("click", () => {
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    let name = prompt("De un valor al atributo name");
    if(name != null) {
        input.setAttribute("name", name);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn2").addEventListener("click", () => {
    let input = document.createElement('input');
    input.setAttribute("type", "password");
    let name = prompt("De un valor al atributo name");
    if (name != null) {
        input.setAttribute("name", name);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn3").addEventListener("click", () => {
    let input = document.createElement('textarea');
    input.setAttribute("cols", "40");
    input.setAttribute("rows", "5");
    let name = prompt("De un valor al atributo name");
    if (name != null) {
        input.setAttribute("name", name);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn4").addEventListener("click", () => {
    let input = document.createElement('label');
    let name = prompt("De valor al label");
    let text = document.createTextNode(name);
    name = prompt("De un valor al atributo for");
    if (name != null) {
        input.setAttribute("for", name);
        input.appendChild(text);
        document.body.appendChild(input);
    }
});

document.getElementById("btn5").addEventListener("click", () => {
    let input = document.createElement('img');
    let name = prompt("De un valor al atributo src");
    if (name != null) {
        input.setAttribute("src", name);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn6").addEventListener("click", () => {
    let input = document.createElement('input');
    input.setAttribute("type","checkbox")
    let name = prompt("De un valor al atributo name");
    let value = prompt("De un valor al atributo value");
    if (name != null || value != null) {
        input.setAttribute("name", name);
        input.setAttribute("value", value);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn7").addEventListener("click", () => {
    let input = document.createElement('input');
    input.setAttribute("type","radio")
    let name = prompt("De un valor al atributo name");
    let value = prompt("De un valor al atributo value");
    if (name != null || value != null) {
        input.setAttribute("name", name);
        input.setAttribute("value", value);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});

document.getElementById("btn7").addEventListener("click", () => {
    let input = document.createElement('input');
    input.setAttribute("type","submit")
    let name = prompt("De un valor al atributo name");
    let value = prompt("De un valor al atributo value");
    if (name != null || value != null) {
        input.setAttribute("name", name);
        input.setAttribute("value", value);
        document.body.appendChild(input);
        let br = document.createElement('br');
        document.body.appendChild(br);
    }
});
