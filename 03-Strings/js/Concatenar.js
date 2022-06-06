const productos = 'Monitor 20p ';
const precios = '120€';

// Concatenar 2 variables

console.log (productos.concat(precios));

//Concatenar variable y frase

console.log (productos.concat(precios.concat(' ¡Descuento!')));
console.log (productos + "Con un precio de " + precios);

//Recomendada
console.log (`El producto ${productos} tiene un precio de ${precios} `);