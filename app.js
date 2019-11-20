// events

function deleteAllBtn(e){
    let sisu = e;
    sisu = e.target;
    sisu = e.target.id;
    sisu = e.target.className;
    sisu = e.target.classList;
    sisu = e.type;
    sisu = e.clientY;
    sisu = e.clientX;
    sisu = e.offsetY;
    sisu = e.offsetX;

    console.log(sisu);

    document.querySelectorAll('li').forEach(el => el.remove()); 
};

const deleteAll = document.querySelector('.clear-tasks');
deleteAll.addEventListener('click', deleteAllBtn);