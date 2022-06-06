const nombre = prompt ('Cual es tu nombre');
//.contenido lo coge de index.html y con ${nombre} usa el nombre que ponen en prompt
document.querySelector('.contenido').innerHTML= `${nombre} está aprendiendo JS`;
