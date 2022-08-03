window.addEventListener ('online', actualizarEstado);
window.addEventListener ('offline', actualizarEstado);

function actualizarEstado(){
    if (navigator.onLine){
     console.log ('Conectado');   
    }else{
        console.log ('Desconectado');
    }
}