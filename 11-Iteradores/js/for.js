// FOR vale para continuar una funcion mediante un tiempo
// en parentesis ponemos la variable (i=0), 
// cuando queremos que pare ( mientras i<0),
// y como queremos que sume (+1 = i++) 


//Diferenciar entre pares e impares
//for (let i=0; i<=10; i++){
//    if (i % 2 === 0){
//        console.log (`par: ${i}`);
//}else{
//    console.log (`impar: ${i}`);
//}
//}

// Ejemplo con carrito
const carrito = [
    {nombre: 'guantes', precio: 300},
    {nombre: 'casco', precio: 200},
    {nombre: 'mono', precio: 650},
    {nombre: 'pantalon', precio: 125},
    {nombre: 'cazadora', precio: 320}
]

for (let i=0; i<carrito.length; i++){
    console.log (carrito[i].nombre);
}


for (let i=0; i<=10; i++){
    if (i===5){
     console.log ('Cinco');
     continue; // Continue= continua la cuenta si solo cambia 5  - Break= corta cuando llega a 5   
    }
    console.log(`Numero: ${i} `)
}