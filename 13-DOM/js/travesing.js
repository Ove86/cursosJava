const card = document.querySelector('.card');

// Cambiamos con textContent el titulo de la card

card.children[1].children[1].textContent = 'Nuevo heading';

// cambiar imagen

card.children[0].src= 'img/hacer3.jpg';

console.log (card.children[1].children[1].textContent);

// Traversing de children al padre

console.log (card.parentElement.parentElement.parentElement);

// Cambiar del primer al segundo card

console.log (card.nextElementSibling);

// Cambiar del sgundo al primer card

console.log (card.previousElementSibling);