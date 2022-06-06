const monitores = {
    nombre: "Monitor",
    precio: 300  
}

//Object Constructor

function Monitores (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const monitores2 = new Monitores('pantalla', 200);

console.log(monitores2);