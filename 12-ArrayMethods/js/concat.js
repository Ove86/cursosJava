// concat vale para unir dos arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

const resultado = meses.concat(meses2, meses3);

console.log (resultado);

//Hacerlo con spread operator

const resultado2 = [...meses, ...meses2, ...meses3];
console.log (resultado2);

