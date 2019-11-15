// document methods
// multiple element selector

// class
sisu = document.getElementsByClassName('collection-item');           
console.log(sisu);
console.log(sisu[0]);
sisu[0].style.color = 'green';
sisu[2].textContent = 'Õpi AV';

//query + class
let listElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

// element
listElemendid = document.getElementsByTagName('li');

// HTML collection > array
listElemendid = Array.from(listElemendid);
// array method
listElemendid.reverse();

// array cycle
for(let i = 0; i < listElemendid.length; i++){
    console.log(listElemendid[i].className);
}

listElemendid.forEach(function(element){
    console.log(element);
    element.style.background = 'lightgray';
})

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
console.log(nimekiriPaaritu);

let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
console.log(nimekiriPaaris);