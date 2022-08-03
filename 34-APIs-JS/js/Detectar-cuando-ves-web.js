document.addEventListener('visibilitychange', ()=>{
    if (document.visibilityState ==='visible'){
        console.log ('Reproducir video');
    }else{
        console.log ('Pausar el video'); 
    }
});