// createElement crea elementos en la web.
// Entre paréntesis ponemos lo que en html sería por ejemplo <a></a>
const enlace = document.createElement ('a');

// enlace.textContent añade texto al createElement 
enlace.textContent = 'Nuevo enlace';

// .href añade donde va enlazado
enlace.href = '/nuevo-enlace';

//Seleccionamos donde lo queremos
const nav = document.querySelector('.navegacion');
//AppendChild añade el contenido que quieres a la clase navegacion
nav.appendChild(enlace);
// .insertBefore te da a elegir donde añadir <a>
nav.insertBefore (enlace, nav.children[1] );


// Crear un card

const parrafo = document.createElement ('p');
parrafo.textContent = 'Concierto';
parrafo.classList.add('categoria','concierto');

const parrafo2 = document.createElement ('p');
parrafo2.textContent = 'Concierto Rock';
parrafo2.classList.add ('titulo');

const parrafo3 = document.createElement ('p');
parrafo3.textContent = '800€ por persona';
parrafo3.classList.add ('precio');

// Crear div con la clase info
const info = document.createElement ('div');
info.classList.add ('info');
info.appendChild(parrafo)
info.appendChild(parrafo2)
info.appendChild(parrafo3)


// Crear la imagen
const imagen = document.createElement ('img');
imagen.src= 'img/hacer2.jpg';

const card= document.createElement ('div');
card.classList.add ('card');
card.appendChild (imagen);
card.appendChild (info);

// Insertar en HTML

const contenedor = document.querySelector ('.hacer .contenedor-cards');
contenedor.appendChild (card);