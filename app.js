// node
let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item');
console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

nimekirjaElement = nimekiri.childNodes;
console.log(nimekirjaElement);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
sisu = nimekiri.childNodes[0].nodeName;
sisu = nimekiri.childNodes[3].nodeType;     
// nodeTypes - 1=element, 2=attribute, 3=text, 8=kommentaar, 9=document, 10= doctype
sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'Õpi rohkem JSi';
sisu = nimekiri.children[2].children[0].id = 'katse';
sisu = nimekiri.firstChild;
sisu = nimekiri.firstElementChild;
sisu = nimekiri.lastChild;
sisu = nimekiri.lastElementChild;
sisu = nimekiri.childElementCount;

nimekirjaElement = document.querySelector('li.collection-item:nth-child(2)');
sisu = nimekirjaElement.parentNode;
sisu = nimekirjaElement.parentElement;
sisu = nimekirjaElement.parentElement.parentElement;
sisu = nimekirjaElement.nextSibling;
sisu = nimekirjaElement.nextElementSibling;
sisu = nimekirjaElement.previousElementSibling;
console.log(sisu);

