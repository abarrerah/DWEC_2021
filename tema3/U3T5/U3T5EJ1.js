let windowVar;

onload = openWindow();

function openWindow(){

    let res= confirm("Do you want to open a window?");
    
    if(res==true){
      windowVar = open("","","height=80,width=200,location=no,toolbar=no,menubar=no,resizable=no,left=500,top=500");
       
    }

}

function closeWindow(){

    if (!windowVar) {
        alert("You must open a window");
      } else {
        if (windowVar.closed) {
          alert("is closed");
        } else {
         windowVar.close();
        }
      } 
}

function moveWindow(){
   windowVar.moveBy(10,10);
}

function position(){
   windowVar.moveTo(100,100);
}

function morePixel(){
   windowVar.resizeBy(10,10);
}

function moreWindow(){
   windowVar.resizeTo(400,200);
}

function topScroll(){
   windowVar.scrollTo(0,0);
}

function downScroll(){
   windowVar.scrollTo(0,10);
}