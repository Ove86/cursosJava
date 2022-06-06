// Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector ('#lista-cursos');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');
const contenedorCarrito = document.querySelector ('#lista-carrito tbody');
let articulosCarrito = [];

// Funciones

cargarEventListener();
function cargarEventListener(){
//Cuando agregas un curso presionando "Agregar al garito"
    listaCursos.addEventListener('click', agregarCurso);

//Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

// Muestra los cursos del localStorage
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHtml();
    });

 // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito = []; // reseteamos el array
        limpiarHtml(); // limpiamos todo el html
    });   
}

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        // Accedemos al div que tiene el contenido del curso
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
    }
}

// Elimina un curso del carrito
function eliminarCurso (e){
    if(e.target.classList.contains('borrar-curso')){
        // identificamos el id que queremos eliminar
        const cursoId = e.target.getAttribute('data-id');
        // elimina del arreglo
        articulosCarrito = articulosCarrito.filter (curso => curso.id !== cursoId);
        
        carritoHtml(); //Actualizas la info del carrito en el HTML
    }
}

// Lee contenido HTML al darle click y extrae la informacion del curso

function leerDatosCurso(curso){
    // Crear un objeto con el contenido del curso actual

    const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe){
        //Actualizamos cantidad
        const cursos=articulosCarrito.map(curso =>{
            // revisamos que ID está duplicado
            if (curso.id === infoCurso.id){
            // añadimos la cantidad    
                curso.cantidad++;
            // cerramos el nuevo curso    
                return curso;
            }else{
            // retorna los objetos que no estan duplicados     
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // Agrega elementos al array de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    carritoHtml();
}

// Muestra el carrito en el html

function carritoHtml () {
    // Limpiar el carrito
    limpiarHtml();

    // Genera el html
    articulosCarrito.forEach ((curso) =>{
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;
        // Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar carrito a LocalStorage
    sincronizarStorage();
}
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHtml () {
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}