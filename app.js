// document methods
// creating elements
const liElement = document.createElement('li');
// add class
liElement.className = 'collection-item';
// add id
liElement.id = 'new-item';
// add attribute
liElement.setAttribute('title', 'new element');
// add text
liElement.textContent = 'Uus element';
// add link
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content'
// add attribute
link.setAttribute('href', '#');
// add icon
link.innerHTML = '<i class="fas fa-times-circle"></i>'
// add link to li
liElement.appendChild(link);
// add to DOM
ulElement = document.querySelector('ul');
ulElement.appendChild(liElement);

console.log(liElement);

