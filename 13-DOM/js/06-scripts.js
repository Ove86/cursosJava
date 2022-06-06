const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Los eventos son cuando un objeto reaccion al realizarse
// una accion. En este caso un click

btnFlotante.addEventListener ('click', mostrarOcultarFooter);

// contains es para saber si contiene alguna palabra 
function mostrarOcultarFooter (){
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}