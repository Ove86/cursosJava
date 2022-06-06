const carro = [];

const productos ={
    nombre: 'Monitor',
    precio: 200
}

const productos2 ={
    nombre: 'Tablet',
    precio: 1200
}

const productos3 ={
    nombre: 'Caja',
    precio: 500
}
const productos4 ={
    nombre: 'Boligrafo',
    precio: 2
}

carro.push(productos, productos2, productos4);
carro.unshift(productos3);

console.table(carro);

// Eliminar arreglo del inicio

carro.shift();

console.table(carro);

// Quitar alguna posicion diferente
carro.splice(1,1);
console.table(carro);



