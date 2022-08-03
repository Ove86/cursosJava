// Obtener datos de un TXT
const cargarTxtBtn = document.querySelector ('#cargarTxt');
cargarTxtBtn.addEventListener ('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/datos.txt')
    .then (respuesta =>{
        return respuesta.text();
    })
    .then (datos =>{
        console.log (datos);
    })
}

// Obtener datos de un JSON

const cargarJsonBtn = document.querySelector ('#cargarJSON');
cargarJsonBtn.addEventListener ('click', obtenerDatosJson);

function obtenerDatosJson (){
    const url = 'data/empleado.json';
    fetch(url)
    .then (respuesta => respuesta.json() )
    .then (resultado => mostrarHTML(resultado) )
}

function mostrarHTML ({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector ('.contenido');
    contenido.innerHTML = `
    <p> Empleado: ${nombre} </p>
    <p> Identificacion: ${id} </p>
    <p> Puesto: ${trabajo} </p>
    <p> Empresa: ${empresa} </p> `

}

// Cargar datos JSON en ARRAY

const cargarJsonArrayBtn = document.querySelector ('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener ('click', obtenerDatosJsonArray);

function obtenerDatosJsonArray (){
    const url = 'data/empleados.json';
    fetch(url)
    .then (respuesta => respuesta.json() )
    .then (resultado => console.log(resultado) )
}