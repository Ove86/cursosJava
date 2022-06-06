const meses2 = ['enero2', 'febrero2', 'marzo2'];

meses2[3] = 'Abril';

// MEJOR METODO Para colocar en la posicion que quieres

//Para ponerlo al final
meses2.push('Mayo');

//Para ponerlo al inicio
meses2.unshift('Junio');

console.log(meses2);

// Ejemplo carrito de compras vacio que llenamos

const carrito = [];

const producto = {
    nombre: "Monitor",
    precio: 300
}

carrito.push(producto);




console.log(carrito);