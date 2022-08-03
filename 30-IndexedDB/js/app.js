document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Crear base de datos version 1.0 -> entre parentesis hay que poner un string y luego la version que quieres
    let crmDB = window.indexedDB.open('crm',1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log ('Tu navegador no soporta IndexedDB')
    }

    // Se creó bien
    crmDB.onsuccess =  function (){
        console.log ('Base de datos creada');
    }

    // Configuracion de la base
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore ('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre','nombre',{unique:false});
        objectStore.createIndex('email','email',{unique:true});
        objectStore.createIndex('telefono','telefono',{unique:false});

        console.log ()
    }

}