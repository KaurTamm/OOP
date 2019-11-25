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
}
const allTasks = JSON.parse(localStorage.getItem('tasks'));

// function deleteAllBtn(e){
//    document.querySelectorAll('li').forEach(el => el.remove()); 
//};
//const deleteAll = document.querySelector('.clear-tasks');
//deleteAll.addEventListener('click', deleteAllBtn);;