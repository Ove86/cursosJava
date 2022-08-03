const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener ('load', () =>{
    formulario.addEventListener ('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    //validar campos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad ===''|| pais ===''){
        mostrarError ('Ambos campos son obligatorios');
        return;
    }


    //consultar API
    consultarAPI(ciudad,pais);

}

function mostrarError (mensaje){
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta){
        const alerta = document.createElement('div');

    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
        <strong class="font-bold">Error! </strong>
        <span class="block"> ${mensaje} </span> 
    `;
    container.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
    }
}

function consultarAPI (ciudad,pais){
    const appId= '2b0fcc3c5bfc95055710a769317bcc3b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then (respuesta => respuesta.json())
        .then (datos => {
            limpiarHTML();
            
            if(datos.cod === "404"){
                mostrarError ('Ciudad no encontrada');
                return; 
            }

            // Imprimir la respuesta en html

        mostrarClima(datos);
        })   
}

function mostrarClima (datos){
    const {name,main:{temp,temp_max,temp_min}} = datos;
    const cent = temp-273.15;
    const min = temp_min-273.15;
    const max = temp_max-273.15;

    const nombreCiudad = document.createElement ('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add ('font-bold','text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${cent.toFixed(0)}&#8451;`;
    actual.classList.add ('font-bold', 'text-6xl');
    
    const temp_minima = document.createElement ('p');
    temp_minima.innerHTML = `Min: ${min.toFixed(0)}&#8451;`;
    temp_minima.classList.add ('text-xl');

    const temp_maxima = document.createElement ('p');
    temp_maxima.innerHTML = `Max: ${max.toFixed(0)}&#8451;`;
    temp_maxima.classList.add ('text-xl');

    const resultadoDiv = document.createElement ('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(temp_minima);
    resultadoDiv.appendChild(temp_maxima);

    resultado.appendChild(resultadoDiv);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}