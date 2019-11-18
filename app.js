// document methods
// deleting elements

const liElement = document.querySelectorAll('li');
liElement[2].remove();

const ulElement = document.querySelector('ul.collection');
ulElement.removeChild(liElement[1]);

// removing classes & attributes
const liElements = liElement[0];
const link = liElements.children[0];

let sisu = link.className;
sisu = link.classList;
link.classList.remove('secondary-content');
link.classList.add('secondary-content');

sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
link.removeAttribute('title');

sisu = link;
console.log(sisu);