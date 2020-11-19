let typePalo={
    1:"Oros",
    2:"Copas",
    3:"Espadas",
    4:"Bastos"
}
let typeValue={
    8:"sota",
    9:"caballo",
    10:"rey"
}
function checkValue(valor){
    if(valor<11){
        return true;
    }else{
        return false;
    }
}
function Card(){
    this.palo="";
    this.valor="";

    this.properties=(palo,valor)=>{
        this.palo=palo;
        if(checkValue(valor)==true){
            this.valor=valor;
        }else{
            alert("WRONG NUMBER VALUE");
        }
        
    }

    this.toString=()=>{
       
       let showInfo=this.palo+" "+this.valor;
        return showInfo;
    }
    this.setPalo=(newPalo)=>{
        this.palo=newPalo;        
    }
    this.setValor=(newValor)=>{
        this.valor=newValor;
    }
    this.getPalo=()=>{
        return this.palo;
    }
    this.getValor=()=>{
        return this.valor;
    }

    this.darValor=(newPalo,newValor)=>{
        
        if(typeof newPalo=="number"){
            this.setPalo(newPalo);
        }
        if(typeof newValor=="number"){
            this.setValor(newValor);
        }

    }

}

function Baraja(){
    let cartas=[];

    this.properties=(carta)=>{
        for(let i =0;i<cartas.length;i++){
            if(cartas[i].getPalo>carta.getPalo){
                cartas.push(carta);
                cartas.sort(cartas[i].getPalo,cartas[i].getValor);
            }

        }
    }
    this.barajar=()=>{
        for(let i=0;i<cartas.length;i++){
            let j=Math.floor(Math.random()*(i+1));
            let temp=cartas[i];
            cartas[i]=cartas[j];
            cartas[j]=temp;
        }
    }
    this.toString=()=>{
        console.table(cartas);
        document.getElementById("barajada").innerHTML=cartas;
    }
}


let baraja=new Baraja();
 for(let i=1;i<5;i++){
    for(let k=0;i<10;k++){
         let newCard=new Card();
         newCard.properties(i,k);
         baraja.properties(newCard);
    }

 }

 baraja.barajar();
 baraja.toString();