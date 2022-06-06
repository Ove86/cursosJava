// ForEach es ideal para recorrer arreglos

const pendientes = ['tarea','curso','ejercicios'];

pendientes.forEach ((pendiente, i) => { //la i es para que marque el numero la lista del array
    console.log (`${i} : ${pendiente}`);
})