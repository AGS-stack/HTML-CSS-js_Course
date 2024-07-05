const todoArray = [];
function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoArray.push(name);
    inputElement.value = '';
    console.log(todoArray);
}
const todoList = ['makedinner','wash dishes'];

renderTodoList();
function renderTodoList() {
    
    let todoListHTML = '';
    for (let i = 0; i< todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</P>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo2 () {
    const inputElement = document.querySelector('.js-name-input2');
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value = '';
    renderTodoList();
}

