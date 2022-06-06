// Filter encuentra un objeto dentro del array

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

//Coges en un margen de precio
resultado = carrito.filter (producto=> producto.precio>400);

// Con este quitas del carrito el articulo tablet
resultado = carrito.filter (producto=> producto.nombre !== 'Tablet');

//Coges solo un articulo
resultado = carrito.filter (producto=> producto.nombre === 'Tablet');


console.log (resultado);