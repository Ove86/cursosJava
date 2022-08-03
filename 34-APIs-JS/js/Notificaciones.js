// Este codigo vale para que el ciente pueda recibir notificaciones

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener ('click', ()=>{
    Notification
    .requestPermission()
    .then (resultado => {
        console.log ('El resultado es ',resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener ('click', ()=>{
    // Granted es que el usuario ha aceptado recibir notificaciones
    if (Notification.permission === 'granted'){
        const notificacion = new Notification ('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Notificando que es gerundio'
        });
        notificacion.onclick = function (){
            window.open('https://www.arcmoto.com')
        }
    }
});