const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') { alert("kindly mention the task") }
    else {

        const checkbutton = document.createElement("button")
        checkbutton.innerHTML = 'done'
        checkbutton.classList.add("check-button")
        itemall.appendChild(checkbutton)

        const trashbutton = document.createElement("button")
        trashbutton.innerHTML = '<b>delete</b>'
        trashbutton.classList.add("del-button")
        itemall.appendChild(trashbutton)

        listtdl.appendChild(itemall)
        inputtdl.value = ''
    }
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'del-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}



buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)
