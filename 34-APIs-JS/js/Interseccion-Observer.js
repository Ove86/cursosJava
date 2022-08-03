// Activa un mensaje a la consola cuando pasa por un punto de scroll de la web

document.addEventListener ('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver (entries =>{
        if(entries[0].isIntersecting){
            console.log ('Ya está visible');
        }
    });

    observer.observe(document.querySelector('.premium'));

});