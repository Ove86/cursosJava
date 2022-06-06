const primerEnlace = document.querySelector ('a');
// quitar elemento directamente
primerEnlace.remove();

// quitar desde el padre
const navegacion = document.querySelector ('.navegacion');

navegacion.removeChild (navegacion.children[2] );