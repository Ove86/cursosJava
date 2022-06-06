function sumar (a,b){
    return (a+b);
}

// La funcion devuelve (return) un valor que luego puede utilizarse
const resultado = sumar(2,3);
console.log (resultado);


// Ejemplo mas avanzado

// el carrito empieza con 0€
let total = 0;

//Indicamos que se sume el precio de los productos
function agregarCarrito (precio){
    return total += precio;
}
//Calculamos el iva y sumamos al total
function calcularIva (total){
    return total * 1.21;
}

// Añadimos los productos (entre parentesis el precio)
total= agregarCarrito(300);
total= agregarCarrito(100);
total= agregarCarrito(50);

// creamos la constante que nos diga el resultado total
const TotalPagar = calcularIva(total);
console.log (`El total a pagar es ${TotalPagar}€`)
