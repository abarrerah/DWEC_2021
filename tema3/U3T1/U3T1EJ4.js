function ampm(time) {

    console.log(time);
    if (time.value !== "") {
      let hours = time.split(":")[0];
      let minutes = time.split(":")[1];
      
      if(hours>=12){
          suffix="pm"
      }else{
          suffix="am"
      }
      hours = hours % 12 || 12;
      
      if(hours<10){
        "0"+hours;
      }else{
          hours;
      }
  
      let displayTime = hours + ":" + minutes + " " + suffix;
      
      console.log(displayTime);
    }
  }