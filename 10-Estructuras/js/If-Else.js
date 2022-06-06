const dinero = 200;
const total= 500;
const tarjeta = true;

if (dinero >= total){
    console.log ('Podemos pagar');
}else if(tarjeta){
    console.log ('Podemos pagar pero con tarjeta');
}else{
    console.log ('Saldo insuficiente');
}