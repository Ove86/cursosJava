const reproductor = {
    reproducir: function (id) {
        console.log (`Reproduciendo cancion ${id} `);
    },
    borrar: function (id) {
        console.log (`Borrando cancion ${id} `);
    },
    CrearPlaylist: function (nombre) {
        console.log (`Creando Playlist ${nombre} `);
    },
    BorrarPlaylist: function (nombre) {
        console.log (`Borrando Playlist ${nombre} `);
    }
}

reproductor.reproducir(20);
reproductor.borrar(35);
reproductor.CrearPlaylist('Rock');
reproductor.BorrarPlaylist('Bachata');

// Cambiar a arrow las funciones

const reproductor2 = {
    reproducir: id => console.log (`Reproduciendo cancion ${id}`),
    borrar: id => console.log (`Borrando cancion ${id}`),
    CrearPlaylist: nombre => console.log (`Creando Playlist ${nombre}`),
    BorrarPlaylist: nombre => console.log (`Borrando Playlist ${nombre} `),
    }

reproductor2.reproducir(20);
reproductor2.borrar(35);
reproductor2.CrearPlaylist('Rock');
reproductor2.BorrarPlaylist('Bachata');