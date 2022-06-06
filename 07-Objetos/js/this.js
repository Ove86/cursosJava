// THIS en este caso sirve para que no se confunda el nombre y
// precio de los dos objetos.

const producto8 = {
    nombre: "Monitor",
    tamaño: "20 pulgadas",
    marca: "Samsung",
    precio: 300,
    mostrarInfo: function(){
        console.log (`El ${this.nombre} tiene un precio de ${this.precio}€.`)
    }    
}
const producto9 = {
    nombre: "Pantalla",
    tamaño: "40 pulgadas",
    marca: "Samsung",
    precio: 3000,
    mostrarInfo: function(){
        console.log (`La ${this.nombre} tiene un precio de ${this.precio}€.`)
    }
}

producto8.mostrarInfo();
producto9.mostrarInfo();