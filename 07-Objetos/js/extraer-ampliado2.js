const producto5 = {
    nombre2: "Monitor",
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

// Extraer variable de grupo de variables

const { nombre2, informacion:{fabricacion: {pais}} } = producto5;

console.log(nombre2);
console.log(pais);