window.addEventListener("load",init);


function init(){


    
        let input=document.createElement("input");
        input.type="text";
        
        let t=document.createElement("LABEL");
        let x=document.createTextNode("Nombre del disco: ");
        t.setAttribute("for","maruja");
        t.appendChild(x);
        document.body.appendChild(t);
        document.body.appendChild(input);
        let br=document.createElement("br");
        document.body.appendChild(br);
        let br2=document.createElement("br");
        document.body.appendChild(br2);

        let input2=document.createElement("input");
        input2.type="text";
        let tt=document.createElement("LABEL");
        let xx=document.createTextNode("Grupo de música: ");
        tt.setAttribute("for","maruja");
        tt.appendChild(xx);
        document.body.appendChild(tt);
        document.body.appendChild(input2);
        let br3=document.createElement("br");
        document.body.appendChild(br3);
        let br4=document.createElement("br");
        document.body.appendChild(br4);

        let input3=document.createElement("input");
        input3.type="date";
        let ttt=document.createElement("LABEL");
        let xxx=document.createTextNode("fecha de lanzamiento: ");

        ttt.setAttribute("for","maruja");
        ttt.appendChild(xxx);
        document.body.appendChild(ttt);
        document.body.appendChild(input3);


}
