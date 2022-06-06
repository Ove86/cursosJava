const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .find saca un objeto del arreglo y lo convierte en objeto
// Solo puede sacar un objeto, si hay con el mismo nombre o precio solo saca el primero
const resultado = carrito.find (producto => producto.nombre === 'Tablet');
console.log(resultado);