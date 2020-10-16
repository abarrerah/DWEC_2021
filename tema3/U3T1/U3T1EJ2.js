 
function myFunction() {
  

  var d = new Date(document.getElementById("myDate").value);
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  for(i=0;i<81;i++){
    var c = new Date(year + i, month, day);
    if(c.getDay()==0){
      console.log(c);
    }
  }
  
  
}
