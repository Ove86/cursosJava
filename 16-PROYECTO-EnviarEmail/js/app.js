//Variables

const btnEnviar = document.querySelector ('#enviar');
const formulario = document.querySelector ('#enviar-mail');

// Variables para los label
const email = document.querySelector ('#email');
const asunto = document.querySelector ('#asunto');
const mensaje = document.querySelector ('#mensaje');

const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

//EventListeners
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Labels del formulario. Blur se activa cuando dejas de hacer click en el label
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
    
    //Enviar email
    formulario.addEventListener ('submit',enviarEmail);

}

// Funciones

function iniciarApp (){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Validar formulario

function validarFormulario (e){
        
    if (e.target.value.length > 0){
        //elimina errores
        const error = document.querySelector("p.error"); // selecc. etiqueta P que tenga clase error
    if (error !== null) {
      error.remove();
    }
        //cambia bordes
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
        mostrarError('Todos los campos son necesarios');
    }

    if (e.target.type === 'email'){
        
        if (expresionRegular.test(e.target.value)){
            //elimina errores
            const error = document.querySelector("p.error"); // selecc. etiqueta P que tenga clase error
    if (error !== null) {
      error.remove();
    }
            //cambia bordes
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');    
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('E-mail incorrecto');      
        }
    }
    if (expresionRegular.test(email.value) && asunto.value !== '' && mensaje !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError (mensaje){
    const mensajeError = document.createElement ('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add ('border', 'border-red-500', 'background-red-100','text-red-500','p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll ('.error');
    if(errores.length === 0){
       formulario.appendChild (mensajeError); 
    }else{
        
    }

}

// Envia el mail

function enviarEmail (e){
    e.preventDefault();

    // mostrar spinner
    const spinner = document.querySelector ('#spinner');
    spinner.style.display = 'flex';
    
    //Despues de 2 segundos ocultar el spinner y mostrar mensaje
    setTimeout(() => {
        spinner.style.display = 'none';
        
        // Añade el texto despues de los dos segundos
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add ('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold');
        
        // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 4000);
    }, 2000);
}

// Resetear formulario
function resetearFormulario (){
    formulario.reset();
    iniciarApp();
}