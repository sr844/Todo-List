// Selctors here.....
const addbutton = document.querySelector("#add");
const list = document.querySelector("#list");
const inputitem = document.querySelector("#content")


// Events here.......
addbutton.addEventListener("click",additem);
list.addEventListener("click",deleteItem);

function additem(){
    const itemall = document.createElement('div')
    itemall.classList.add('itemall');

    var listitems = document.createElement("p");
    listitems.classList.add("item");
    listitems.innerText=inputitem.value;
    itemall.appendChild(listitems);

    var checkbutton = document.createElement("button");
    checkbutton.innerHTML='<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton);

    list.appendChild(itemall);
    inputitem.value=" "

   
}
function deleteItem(e){
        const listitem = e.target
    
        // check
        if (listitem.classList[0] === 'check-button') {
            const todolist = listitem.parentElement
            todolist.classList.toggle('checklist')
        }
    
        // delete
        if (listitem.classList[0] === 'trash-button') {
            const todolist = listitem.parentElement
            todolist.remove()
        }
}

