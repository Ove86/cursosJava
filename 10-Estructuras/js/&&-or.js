// && Obliga a que IF tenga que cumplir dos condiciones
//OR una de las dos condiciones debe cumplirse, con && son obligadas las dos.

 const usuario = false;
 const puedePagar = true;

if(usuario && puedePagar){
     console.log('Eres usuario y puedes comprar');
    // La ! antes de usuario niega que no es usuario.
}else if (!usuario){
    console.log('Inicia o crea una cuenta');
 }else if (!puedePagar){
    console.log('No tienes cash');
 }else{
     console.log('No puedes pagar');
 }


const saldo = 300;
const credito = 400;
const disponible = saldo+credito;
const totalPagar= 600;

if (saldo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log ('Paga cabron');
}else{
    console.log('Largate');
}