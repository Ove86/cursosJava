// Forma de crear clases

class Cliente {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // Agregar metodos a clases
    mostrarInfo(){
        return `Cliente: ${this.nombre}, tú tienes ${this.edad} años.`;
    }
}

const nombreCliente = new Cliente ('Juan', 42);


console.log (nombreCliente);
console.log (nombreCliente.mostrarInfo());

