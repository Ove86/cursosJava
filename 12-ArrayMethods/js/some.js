const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// SOME vale para comprobar si un arreglo existe
// se usa en array de objetos

const existe = carrito.some ((producto) => producto.nombre ==='Celular');

console.log(existe);

// En un array normal

const existe2 = meses.some (mes => mes === 'Febrero')
console.log (existe2);