// events

// function deleteAllBtn(e){
//    document.querySelectorAll('li').forEach(el => el.remove()); 
//};
//const deleteAll = document.querySelector('.clear-tasks');
//deleteAll.addEventListener('click', deleteAllBtn);;

function syndmus(e){
    console.log(`Sündmuse tüüp: ${e.type}`);
    console.log(newTaskDesc.value);
    text.innerText = newTaskDesc.value;   
}

const text = document.querySelector('h5');
const card = document.querySelector('.card');
const form = document.querySelector('form');
const newTaskDesc = document.getElementById('task');
newTaskDesc.value = '';

// form send
form.addEventListener('submit', syndmus);

// keyboard
// newTaskDesc.addEventListener('keydown', syndmus);
// newTaskDesc.addEventListener('keyup', syndmus);
// newTaskDesc.addEventListener('keypress', syndmus);
// newTaskDesc.addEventListener('focus', syndmus);
// newTaskDesc.addEventListener('blur', syndmus);
// newTaskDesc.addEventListener('paste', syndmus); 
// newTaskDesc.addEventListener('cut', syndmus);
newTaskDesc.addEventListener('input', syndmus);