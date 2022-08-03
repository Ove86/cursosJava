const cargarJSONArrayBtn = document.querySelector('#cargarAPI');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos (){
    const url = 'http://picsum.photos/list';

    fetch(url)
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarHTML(resultado))
}

function mostrarHTML(autores){
    const contenido = document.querySelector('.contenido');

    let html = '';
    autores.forEach (autor =>{
        const {filename,id,author,post_url}= autor;

        html += `
        <p> Archivo: ${filename} </p>
        <p> ID: ${id} </p>
        <p> Autor: ${author} </p>
        <p> Web: ${post_url} </p><br>
        `;
        });

    contenido.innerHTML = html;
}