// Poner 100 numeros y separarlos segun el multiplo

// Multiplos de 3 = Fizz
// Multiplos de 5 = Buzz
// Multiplos de 15 = FizzBuzz!

for (let i=1; i<100; i++) {
    if(i%3===0){
        console.log (`${i} M.3`);
    }
    if(i%5===0){
        console.log (`${i} M.5`);
    }
    if (i%15===0){
        console.log (`${i} M.15`);
    }
}