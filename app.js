// events

//document.querySelector('.card-title').addEventListener('click', function(e){
//    console.log('card-title');
//});

//document.querySelector('.card-content').addEventListener('click', function(e){
//    console.log('card-content');
//});
function delfunct(e){
    console.log('kustutame');
    if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove()};
}

const delTask = document.querySelector('.delete-item');
delTask.addEventListener('click', delfunct);



















// function deleteAllBtn(e){
//    document.querySelectorAll('li').forEach(el => el.remove()); 
//};
//const deleteAll = document.querySelector('.clear-tasks');
//deleteAll.addEventListener('click', deleteAllBtn);;