const todoArray = [];
function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoArray.push(name);
    console.log(todoArray);
}
