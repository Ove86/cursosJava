const metodoPago = 'efectivo';

switch(metodoPago){
    // Los SWITCH siempre van con CASE
    case 'efectivo':
        console.log (`Pagaste con ${metodoPago}`);
        // Break detiene este paso
        break;
    // Default es similar al else
    default:
        console.log ('Aún no has seleccionado un metodo de pago');
        break;
}