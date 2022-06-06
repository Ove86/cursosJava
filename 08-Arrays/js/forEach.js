const carrito = [
    {nombre: 'guantes', precio: 300},
    {nombre: 'casco', precio: 200},
    {nombre: 'mono', precio: 650},
    {nombre: 'pantalon', precio: 125},
    {nombre: 'cazadora', precio: 320}
]


// Se puede usar forEach o For, pero forEach es mas corto
carrito.forEach (function(producto){
    console.log (`El precio de ${producto.nombre} es de ${producto.precio}€. `);
});