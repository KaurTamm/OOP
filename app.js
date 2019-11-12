// document methods
// single element selector
sisu = document.getElementById('title');             // HTML sisu id järgi
id = document.getElementById('title').id;            // id
klass = document.getElementById('title').className;  // id klassid

// style change
sisu.style.background = '#333';
document.getElementById('title').style.background = '#333';
sisu.style.color = '#fff';
sisu.style.padding = '5px'

// content change
sisu.textContent = 'Minu ülesanded';
sisu.innerText = 'Just minu ülesanded';
sisu.innerHTML = '<span style="color:green;">Vabad ülesanded</span>';

console.log(sisu);