// Variables

const formulario = document.querySelector ('#formulario');
const listaTweets = document.querySelector ('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners(){
    //Cuando el usuario agrega un tweet
    formulario.addEventListener('submit',agregarTweet);

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse (localStorage.getItem('tweets')) || [];
        console.log (tweets);
        crearHTML();
    });
}


// Funciones

function agregarTweet (e){
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion

    if (tweet === ''){
        mostrarError ('El tweet no puede estar vacío');
        return; //evita que se ejecute mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }
    // Añadir al arreglo de tweet
    tweets = [...tweets, tweetObj];
    console.log (tweets);

    //Una vez añadido creamos el HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}

//Funcion para mostrar el mensaje de error por tweet vacio
function mostrarError (error){
    const mensajeError = document.createElement ('p');
    mensajeError.textContent = error;
    mensajeError.classList.add ('error');
    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina el cartel de error a los 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de tweets
function crearHTML(){

    limpiarHTML();

    if (tweets.length >0){
        tweets.forEach ((tweet) =>{
            //agregar boton borrar
            const bntEliminar = document.createElement ('a');
            bntEliminar.classList.add('borrar-tweet');
            bntEliminar.innerText = 'X';

            // Funcion para eliminar
            bntEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            //crear html
            const li = document.createElement('li');
            //añadir texto
            li.innerText = tweet.tweet;
            //Asignar el boton
            li.appendChild(bntEliminar);
            // insertar en html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega los Tweets actuales al storage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

//Elimina el tweet
function borrarTweet(id){
    tweets =tweets.filter (tweet => (tweet.id) !== id);
    crearHTML();
}

//Limpiar HTML
function limpiarHTML() {
    while (listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
