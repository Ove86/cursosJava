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

// Herencia
class Empresa extends Cliente {
    //añadir atributos extra
    constructor(nombre, edad, telefono, categoria){
        //Super se usa para heredar de un constructor
        super(nombre,edad);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}

const nombreCliente = new Cliente ('Juan', 42);
const empresa = new Empresa ('ARC', 120, 964710357, 'textil');
console.log (empresa.mostrarInfo());
console.log (empresa);