const pendientes = ['tarea','curso','ejercicios'];

const carrito = [
    {nombre: 'guantes', precio: 300},
    {nombre: 'casco', precio: 200},
    {nombre: 'mono', precio: 650},
    {nombre: 'pantalon', precio: 125},
    {nombre: 'cazadora', precio: 320}
]

for (let pendiente of pendientes){
    console.log (pendiente);
}

for (let producto of carrito){
    console.log(producto.nombre);
}