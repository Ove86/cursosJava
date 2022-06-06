// Se inicia la funcion desde dentro de la primera funcion

function iniciarApp (){
    console.log ('Iniciando App...');
    // iniciando segunda funcion
    segndaFuncion();
}

function segndaFuncion(){
    console.log ('desde segunda funcion');
    // iniciando tercera funcion
    usuarioIdentificado ('Sergio');
}

// Puedes poner donde usuario lo que quieras e identifica
// el parametro de arriba ('Sergio')
function usuarioIdentificado(usuario){
    console.log ('Identificando usuario...');
    console.log(`Usuario identificado: ${usuario}` );

}

iniciarApp();