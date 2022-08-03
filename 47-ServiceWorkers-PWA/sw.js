const nombreCache = 'apv-v2';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
    './manifest.json',
];

// Instalar el Service Worker
self.addEventListener ('install', e => {
    console.log ('Instalando Service Worker');
    e.waitUntil(
        caches.open(nombreCache)
            .then (cache =>{
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});


// Activar el Service Worker
self.addEventListener ('activate', e => {
    console.log ('Service Worker acivado');
    // Actualizar version
    e.waitUntil(
        caches.keys()
            .then (keys =>{
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key) )//Borra versiones anteriores
                )
            })
    )
});

// Evento fetch para descargar archivos estatico
self.addEventListener ('fetch', e => {
    console.log ('Fetch...',e);
    e.respondWith(
        caches.match(e.request)
            .then (respuestaCache =>{
                return respuestaCache
            })
            .catch (()=> caches.match ('./error.html') )
    )
});