const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Enviar el total del carrito con forEach

let total = 0;
carrito.forEach ( producto => total += producto.precio);
console.log(total);

// Total con .reduce
// totalProductos es el valor con el que quieres que empiece a sumar
// El valor de totalProductos lo pones al final (0)

let resultado = carrito.reduce((totalProductos, producto) => totalProductos+producto.precio, 0)
console.log (resultado);