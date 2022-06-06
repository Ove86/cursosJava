// Constructores

function Seguro (marca,year, tipo){
    this.marca= marca;
    this.year = year;
    this.tipo = tipo;
}
// Realiza la cotización con los datos

Seguro.prototype.cotizarSeguro = function(){
    /*
    1 = americano 35
    2 = asiatico 55
    3 = europeo 65
    */
   let cantidad;
   const base = 670;
    switch(this.marca){
        case '1':
            cantidad=base+35;
            break;
        case '2':
            cantidad=base+55;
            break;

        case '3':
            cantidad=base+65;
            break;

        default:
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear()-this.year;

    //Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3)*cantidad)/100;

    /*
    si el seguro es basico se multiplica por un 30% más
    si el seguro es completo se multiplica por un 50% más
    */

   if (this.tipo === 'basico'){
       cantidad *= 1.30;
   }else{
       cantidad *= 1.50;
   } 
   return cantidad;
}

function UI(){}

//Llenar opciones de años
UI.prototype.llenarOpciones=() =>{
    const max = new Date().getFullYear(),
    min = max -10;

    const selectYear = document.querySelector ('#year');
    for (let i = max; i>min; i--){
        let option =document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function(mensaje, tipo){
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add ('error');
    }else{
        div.classList.add ('correcto');
    }
    div.classList.add ('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector ('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}
    UI.prototype.mostrarResultado = (total,seguro) => {
        // Crear el resultado
        const div= document.createElement ('div');
        div.classList.add ('mt-10');
        div.innerHTML=`
        <p class="header">Tu resumen</p>
        <p class = "font-bold">Total: ${total}€</p>
        `;

        const resultadoDiv = document.querySelector ('#resultado');
       

        //mostrar spinner
        const spinner = document.querySelector('#cargando');
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none'; // desaparece el spinner
            resultadoDiv.appendChild(div); // se muestra el resultado
        }, 2000);

    }

// Instanciar UI
const ui = new UI();
console.log (ui);


document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones(); //Llena el select con los años
});

    eventListeners();

function eventListeners(){
    const formulario = document.querySelector ('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}
function cotizarSeguro (e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca ===''|| year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }
    ui.mostrarMensaje('Cotizando...','exito');

    //ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if  (resultados != null){
        resultados.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype
    ui.mostrarResultado (total,seguro);

}