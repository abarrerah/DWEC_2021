function nextDay(nota){
    switch(nota){
        case nota="Lunes":
            console.log("mañana es Martes");
            break;
        case nota="Martes":
            console.log("mañana es Miércoles");
            break;
        case nota="Miércoles":
            console.log('mañana es Jueves');
            break;
        case nota="Jueves":
            console.log("mañana es Viernes");
            break;
        case nota="Viernes":
            console.log('mañana es Sábado');
            break;
        case nota="Sábado":
            console.log("mañana es Domingo");
            break;
        case nota="Domingo":
            console.log("mañana es Lunes :(");
            break;	

    }
}