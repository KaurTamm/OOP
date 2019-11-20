// events

// function deleteAllBtn(e){
//    document.querySelectorAll('li').forEach(el => el.remove()); 
//};

function syndmus(e){
    console.log(`Sündmuse tüüp: ${e.type}`);
    text.textContent = `HiirX: ${e.offsetX} HiirY: ${e.offsetY}`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}

const text = document.querySelector('h5');

const card = document.querySelector('.card');
//card.addEventListener('mouseenter', syndmus);
//card.addEventListener('mouseleave', syndmus);
//card.addEventListener('mouseover', syndmus);
//card.addEventListener('mouseout', syndmus);
card.addEventListener('mousemove', syndmus);

const deleteAll = document.querySelector('.clear-tasks');
deleteAll.addEventListener('click', syndmus);
// deleteAll.addEventListener('mouseup', syndmus);
// deleteAll.addEventListener('mousedown', syndmus);
// deleteAll.addEventListener('dblclick', syndmus);