const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-es', {
        style:'currency',
        currency: 'EUR'
    });
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad,plazo) => {
    let total;
    //Mientras mayor es la cantidad, menor es el interés
    if(cantidad<500){
        total= cantidad*1.5;
    }else if (cantidad >= 500 && cantidad <1000){
        total= cantidad*1.4;
    }else if (cantidad >= 1000 && cantidad <3000){
        total= cantidad*1.3;
    }else{
        total= cantidad*1.2;
    }

    //Plazo - Más plazo = Mayor interés
    if(plazo===6){
        total*= 1.1;
    }else if (plazo===12){
        total*= 1.2;
    }else{
        total*= 1.3;
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}