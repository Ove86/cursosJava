//every obliga a que todos los arreglos cumplan una condicion

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// pedir con every que sean menores a 1000
const resultado = carrito.every (producto => producto.precio <1000);
console.log(resultado);