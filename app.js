// Inner & outer screen sizes px

let valiKorgus = window.outerHeight;
let valiLaius = window.outerWidth;
let siseKorgus = window.innerHeight;
let siseLaius = window.innerWidth;

console.log(valiKorgus);
console.log(valiLaius);
console.log(siseKorgus);
console.log(siseLaius);

// Scroll

scrolY = window.scrollY;
scrolX = window.scrollX;

console.log(scrolY);
console.log(scrolX);

// Location

let objekt = window.location;
let hostname = window.location.hostname;
let port = window.location.port;
let href = window.location.href;
let search = window.location.search;

console.log(objekt);
console.log(hostname);
console.log(port);
console.log(href);
console.log(search);

// Redirect

window.location.href = 'https://khk.ee';

// Reload

window.location.reload();