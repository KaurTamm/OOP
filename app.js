// document methods
// deleting elements

const liElement = document.querySelectorAll('li');
liElement[2].remove();

const ulElement = document.querySelector('ul.collection');
ulElement.removeChild(liElement[1]);

console.log(liElement);
console.log(ulElement);