// document methods
// replacing elements

const oldTitle = document.querySelector('h5');
const divCardAction = document.querySelector('.card-action');

const newTitle = document.createElement('h3');
newTitle.id = 'new-title';
newTitle.textContent = 'Uued ülesanded';
// newTitle.appendChild(document.createTextNode('Uued ülesanded'))

divCardAction.replaceChild(newTitle, oldTitle);


console.log(newTitle);

/////////////////////////////////////////////////////////////////

const divCardTitle = document.querySelector('.card-content');
const oldCardTitle = document.querySelector('.card-title');

const newCardTitle = document.createElement('h4');
newCardTitle.id = 'title';
newCardTitle.textContent = 'Ülesanded';

divCardTitle.replaceChild(newCardTitle, oldCardTitle);
