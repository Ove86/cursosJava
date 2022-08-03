// Promise siempre tiene que ir con resolve y reject
// Resolve = true y Reject = false

const aplicarDescuento = new Promise ((resolve, reject)=>{
    const descuento = true;

    if (descuento){
        resolve ('Descuento aplicado')
    }else{
        reject('No se pudo aplicar')
    }
})


// se usa then para extraer el interior de la Promise que se ha cumplido
// se usa catch para extraer el interior de la Promise no cumplida
aplicarDescuento
    .then (resultado => {
    console.log (resultado);
    })
    .catch (error =>{
        console.log (error);
    })


// Hay 3 valores posibles con un Promise
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// Pending - No se ha cumplido ni fue rechazado