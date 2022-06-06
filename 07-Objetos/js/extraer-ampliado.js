const producto4 = {
    nombre: "Monitor",
    tamaño: "20 pulgadas",
    marca: "Samsung",
    precio: 300,
    disponible: true,
    informacion:{
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion:{
            pais: 'China'
        }       
    
    }
}

// Estraer variable dentro de un grupo de variable
console.log(producto4.informacion.fabricacion.pais);