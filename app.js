// Window objects - methods - properties

//  alert
window.alert('Tere Hommikust!');


// prompt
const sisend = prompt('Sisesta oma nimi: ');
window.alert('Tere Hommikust ' + sisend);

// confirm
if(confirm('Kas oled nõus?')){
    console.log('Jah');
} else{
    console.log('Ei');
}