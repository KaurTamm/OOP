// localstorage

//localStorage.setItem('nimi', 'Kaur');
//localStorage.setItem('perekonnanimi', 'Tamm');
//localStorage.removeItem('test');

//const eesNimi = localStorage.getItem('nimi');
//const pereNimi = localStorage.getItem('perekonnanimi');

//console.log(eesNimi);
//console.log(pereNimi);

//localStorage.clear();

document.querySelector('form').addEventListener('submit', saveTask);

function saveTask(e){
    const newTask = document.getElementById('task').value;
    let allTasks;

    if(localStorage.getItem('tasks') === null){
        allTasks = [];
    }else{
        allTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    allTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    e.preventDefault();
}

const allTasks = JSON.parse(localStorage.getItem('tasks'));





// function deleteAllBtn(e){
//    document.querySelectorAll('li').forEach(el => el.remove()); 
//};
//const deleteAll = document.querySelector('.clear-tasks');
//deleteAll.addEventListener('click', deleteAllBtn);;