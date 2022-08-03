// Class pattern

class Persona {
    constructor (nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona ('Juan','correo@correo.com');
console.log (persona);

// Constructor pattern

class Principal {
    constructor (nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Principal {
    constructor(nombre, email){
        super(nombre,email);
    }
}

const cliente = new Cliente ('Miguel','cliente@cliente.com');
console.log (cliente);

// Singleton - Previene que se mantenga la informacion de la clase.

let instancia = null;
class Empresa {
    constructor (nombre,email){
        if (!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const empresa = new Empresa ('MS', 'info@arcmoto.com');

// Factory - Crea objetos basados en ciertas condiciones

class InputHTML {
    constructor (type,nombre){
        this.nombre = nombre;
        this.type = type;
    }

    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(tipo,nombre){
        switch(tipo){
            case 'text':
                return new InputHTML ('text', nombre)
            default:
                return;
        }
    }
}

const element = new HTMLFactory();
const inputText = element.crearElemento('text','nombre-cliente');
console.log (inputText.crearInput());