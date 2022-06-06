// Variables
const marca = document.querySelector ('#marca');
const year = document.querySelector ('#year');
const pmin = document.querySelector ('#minimo');
const pmax = document.querySelector ('#maximo');
const puertas = document.querySelector ('#puertas');
const transmision = document.querySelector ('#transmision');
const color = document.querySelector ('#color');

const resultado = document.querySelector ('#resultado');

const anoMax = new Date().getFullYear();
const anoMin = anoMax-10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    pmax: '',
    pmin: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos(autos); //muestra los automoviles al cargar

    // Llenar años
    llenarSelect();
})

// EventListener par los select de busqueda
marca.addEventListener('change',(e) =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change',(e) =>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
pmax.addEventListener('change',(e) =>{
    datosBusqueda.pmax = e.target.value;
    filtrarAuto();
});
pmin.addEventListener('change',(e) =>{
    datosBusqueda.pmin = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change',(e) =>{
    datosBusqueda.puertas = parseInt (e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change',(e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change',(e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

//Funciones

function mostrarAutos(autos) {
    limpiarHtml(); // Elimina el HTML previo

    autos.forEach (auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - ${precio}€ - Color: ${color}
        `;

        // insertar en HTML
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
 function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
 }

// Genera los años del select
function llenarSelect (){
    for (let i=anoMax; i >= anoMin; i--){
        const opcion = document.createElement('option'); // Crea opciones en el slide 
        opcion.value = i; // le da valor a i (años se convierten en numeros)
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega cada opcion al select
    }
}

// Funcion que filtra en base a la busqueda

function filtrarAuto(){
    limpiarHtml();
    const resultado = autos.filter (filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTrans).filter(filtrarColor);
   
    
    if (resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca (auto){
    const {marca} = datosBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear (auto){
    const {year} = datosBusqueda;
    if (year){
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarMin (auto){
    const {pmin} = datosBusqueda;
    if (pmin){
        return auto.precio >= pmin;
    }
    return auto;
}
function filtrarMax (auto){
    const {pmax} = datosBusqueda;
    if (pmax){
        return auto.precio <= pmax;
    }
    return auto;
}
function filtrarPuertas (auto){
    const {puertas} = datosBusqueda;
    if (puertas){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTrans (auto){
    const {transmision} = datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor (auto){
    const {color} = datosBusqueda;
    if (color){
        return auto.color === color;
    }
    return auto;
}