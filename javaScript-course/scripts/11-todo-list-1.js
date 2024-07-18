const todoList = [{name: 'make dinner', dueDate: '2024-07-03'}, {name: 'wash dishes', dueDate: '2024-07-25'}];

renderTodoList();
function renderTodoList() {
    
    document.querySelector('.js-todo-list').innerHTML = '';
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;// this is destructuring , this takes the name property out of the object and puts it ina variable also called name , this is the short cut of the comment lines above , we can also use multiple properties.
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();   
            " class="delete-todo-button">Delete
        </button>`;
        document.querySelector('.js-todo-list').innerHTML += html;
    }
}


function addTodo () {
    const name = document.querySelector('.js-name-input').value;
    const dueDate = document.querySelector('.js-due-date-input').value;
    todoList.push ({name,dueDate});
    inputElement.value = '';
    renderTodoList();
}
