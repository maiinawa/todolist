const list = document.getElementById('list');
const item = document.getElementById('item');
const form = document.querySelector('form');

//add item
form.addEventListener('submit', (e) => {
    e.preventDefault();
        list.innerHTML += `<li class="px-3">${item.value}</li>`
        item.value ='';
        storage();
    });

//remove item
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')){
        e.target.remove()
    }else {
        e.target.classList.add('checked')
    }
    storage();
});


//storage session
const storage = () => {
    window.localStorage.todoList = list.innerHTML;
}

const getvalues = () => {
    const storageContent = window.localStorage.todoList;
    if(!storageContent){
        list.innerHTML='<li class="px-3">Double click to delete your task</li>'
    } else {
        list.innerHTML=storageContent
    }
}
getvalues()