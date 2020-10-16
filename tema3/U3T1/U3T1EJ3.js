function myFunction(){
    let date=new Date(document.getElementById("myDate").value);
    let options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    let options2={day:'numeric',month:'numeric',year:'numeric'}
    
    console.log(date.toLocaleDateString(undefined,options2))
    console.log(date.toLocaleDateString(undefined,options));
    console.log(date.toLocaleDateString('en-EN',options));

}