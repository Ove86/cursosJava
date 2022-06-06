const producto6 = {
    nombre: "Monitor",
    tamaño: "20 pulgadas",
    marca: "Samsung",
    precio: 300
}

const medidas = {
    peso: '1kg',
    altura: '50cm'
}

const resultado = Object.assign (producto6, medidas);

console.log(resultado);

// Otro metodo para unir mas rapido
const resultado2 = {...producto6, ...medidas};
console.log(resultado2);