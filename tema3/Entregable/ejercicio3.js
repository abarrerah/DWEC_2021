function airport() {
    this.name="";
    this.city="";
    this.number="";
    this.amountFly=[];

    this.properties = function (name,city,number) {
        this.name = name;
        this.city = city;
        this.number = number;
    }

    this.showInfo=function () {
        alert("NAME: "+this.name+" CITY: "+this.city+" NUMBER"+ this.number+" Number of fly: "+this.amountFly.length);
    }

    this.airport=function(dailyFly){
        this.amountFly.push(dailyFly);
    }
    this.getFly=function(){
        for(var i=0;i<10;i++){
            return this.amountFly[i];
        }
    }
}

function fly(){
    this.hourArr="";
    this.hourExit="";
    this.code="";

    this.addProperties= function (hourArr,hourExit,code){
        this.hourArr=hourArr;
        this.hourExit=hourExit;
        this.code=code;
    }
    this.info=function(){
        alert("HOURARR: "+this.hourArr+" HOUREXIT: "+this.hourExit+" code"+ this.code);
    }
    this.checkHour=function(){
        if(hourArr<hourExit){
            alert("Correct hour");
        }else{
            alert("False");
        }
    }
    this.setNewHourArr=function(newHourArr){
        this.hourArr=newHourArr;
    }
    this.setNewHourExit=function(newHourExit){
        this.hourExit=newHourExit;
    }
    
}
let air=new airport();

air.properties("Adolfo Suarez","Madrid",1);
for(let i=0;i<10;i++){
    let fly1=new fly();
    let dateStart=new Date('August 19, 2020 11:10:25');
    let dateEnd=new Date('August 20, 2020 12:10:25');
    fly1.addProperties(dateStart,dateEnd,55);
    air.airport(fly1);
}
air.showInfo();




