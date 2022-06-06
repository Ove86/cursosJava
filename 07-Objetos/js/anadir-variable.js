const producto2 = {
    nombre: "Monitor",
    tamaño: "20 pulgadas",
    marca: "Samsung",
    precio: 300,
    disponible: true
}

// Añadir variable
producto2.imagen = "imagen.jpg";

// Eliminar variable
delete producto2.disponible;


console.log(producto2);