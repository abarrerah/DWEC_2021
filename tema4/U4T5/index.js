document.getElementById("button").addEventListener('click',init,false);

function init() {
  dateValidation();

}

dateValidation=()=>{
  const date_regex= /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
  if(date_regex.test(document.getElementById("fecha").value)){
    alert("YES!");
  }
  else{
    alert("Nope");
  }
}

chefValidation=()=>{
  const chef_regex=/(^[A-z]{2})[!@#\$%]?([0-9]{4})$/
}

destinationValidation=()=>{
  const dest_regex=/((^[A-Z]{2,3})(_)([a-z]+)(:)([0-9]{4})$)$/;
}

gramsValidations=()=>{
  const grams_regex=/^([1-9][0-9][0-9])$|^([1-4][0-9][0-9][0-9])$|5000/
}

compValidation=()=>{
  const comps_regex=/(((^[0-9][1-9][1-9]|^[1-4][0-9][0-9][0-9]|[5000])([g]|[G])(([a-zZ-h]{1,2})+([0-9]*)){2}$))$/
}

usaValidations=()=>{
  const usa_regex=/(^([a-zA-Z]{2}?)(([1-9]{2})|[0-9][1-9])(-)([0-9]{12})(-)([0-9]{2}))$/
}