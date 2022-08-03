if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then (registrado => console.log ('Se instaló OK', registrado))
        .catch (error => console.log('Error'));

} else {
    console.log ('Service Worker no soportado');
}