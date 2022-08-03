const criptoSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector ('#formulario');
const resultado = document.querySelector ('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear Promise
const obtenerCriptos = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded',()=>{
    consultarCriptos();
    formulario.addEventListener ('submit', submitFormulario);

    criptoSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

function consultarCriptos (){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR';

    fetch(url)
        .then (respuesta => respuesta.json())
        .then (resultado => obtenerCriptos(resultado.Data))
        .then (criptomonedas =>selectCriptos(criptomonedas))
}

function selectCriptos(criptomonedas){
    criptomonedas.forEach (cripto =>{
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement ('option');
        option.value = Name;
        option.textContent = FullName;
        criptoSelect.appendChild(option);
    })
}

function leerValor (e){
    objBusqueda[e.target.name] = e.target.value;
}
function submitFormulario (e){
    e.preventDefault();
    // Validar 
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostraralerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API
    consultarAPI();
}

function mostraralerta(msg){
    const existeError = document.querySelector('.error');
    
    if (existeError){
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    // mensaje de error
    divMensaje.textContent = msg;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
    }
}

function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    fetch (url)
        .then (respuesta=>respuesta.json() )
        .then (cotizacion => {
            mostrarCotizacionHTML (cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML (cotizacion){
    limpiarHTML();

    const  {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement ('p');
    precio.classList.add ('precio');
    precio.innerHTML= `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement ('p');
    precioAlto.innerHTML= `El precio más alto del día es: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement ('p');
    precioBajo.innerHTML= `El precio más bajo del día es: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement ('p');
    ultimasHoras.innerHTML= `La variación de las últimas horas <span>${CHANGEPCT24HOUR}%</span>`;
    
    const ultimaActualizacion = document.createElement ('p');
    ultimaActualizacion.innerHTML= `Última actualización: <span>${LASTUPDATE}</span>`;



    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}