// events

const deleteAll = document.querySelector('.clear-tasks');
deleteAll.addEventListener('click', function(e){
    console.log('on vajutatud');
    e.preventDefault();
});