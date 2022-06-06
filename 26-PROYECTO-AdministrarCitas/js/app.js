// Campos de formulario
const mascotaInput = document.querySelector ('#mascota');
const propietarioInput = document.querySelector ('#propietario');
const telefonoInput = document.querySelector ('#telefono');
const fechaInput = document.querySelector ('#fecha');
const horaInput = document.querySelector ('#hora');
const sintomasInput = document.querySelector ('#sintomas');

// User Interface (UI)
const formulario = document.querySelector ('#nueva-cita');
const contenedorCitas = document.querySelector ('#citas');

class Citas {
    constructor(){
        this.citas= [];
    }
    agregarCita(cita){
        this.citas = [...this.citas, cita];

    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        //Crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add ('text-center', 'alert', 'd-block', 'col-12');
        //Agregar clase en base al tipo de error
        if (tipo === 'error'){
            divMensaje.classList.add ('alert-danger');
        }else{
            divMensaje.classList.add ('alert-success');
        }
        // Mensaje de error
        divMensaje.textContent = mensaje;
        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
        //Quitar alerta
        setTimeout(() => {
            divMensaje.remove();
        }, 4000);
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// EventListeners
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos de la cita
function datosCita(e){
citaObj [e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita
function nuevaCita(e){
    e.preventDefault();

    //Extraer info del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //Validar
    if (mascota === '' || propietario === '' || telefono=== '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

//Generar un id unico
citaObj.id= Date.now();

// Creando una nueva cita
administrarCitas.agregarCita({...citaObj});

// Reiniciar el formulario y objeto
reiniciarObjeto();
formulario.reset();

}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}