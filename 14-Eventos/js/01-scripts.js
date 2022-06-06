//Los eventos se activan poniendo .addEventListener

//DOMContentLoaded se espera a que todo el documento se haya ejecutado,
// despues se activa

document.addEventListener('DOMContentLoaded', ()=> {
    console.log();
});

// Eventos con el raton

// 'click' se activa cuando se hace click
// 'mouseenter' se activa cuando pasas por el objeto con el raton
// 'mouseout' se activa cuando quitas el puntero de un objeto
// 'mouseup' se activa cuando sueltas el click
// 'dblclick' se activa con doble click del raton

// Eventos con teclado

// 'keydown' cuando pulsas una tecla se activa (tipico de "escribiendo");
// 'blur' ideal para validaciones. Se activa cuando sales del input
// 'input' cuando realizas cualquier accion salvo el blur. Es como un todo en 1.

// .target.value en la funcion vale para las busquedas,
// o para validad si hay un input vacio o han escrito.

// Submit

const formulario = document.querySelector ('#formulario');

formulario.addEventListener ('submit', validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log ('Consultar una api');
}

