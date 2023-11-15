const todoListElement = document.querySelector('#todo-list');
const inputElement = document.querySelector('#todo-input');
const errorMessageElement = document.querySelector('#error-message');

let todoList = [];

function addTodo() {
    const taskName = inputElement.value.trim();

    if (taskName === '') {
        errorMessageElement.textContent = 'Please enter a task.';
        return;
    }

    if (todoList.length >= 10) {
        errorMessageElement.textContent = 'Maximum number of items reached.';
        return;
    }

    errorMessageElement.textContent = '';

    const newTodo = {
        name: taskName,
        completed: false
    };

    todoList.push(newTodo);
    updateTodoList();

    inputElement.value = '';
}

function updateTodoList() {
    todoListElement.innerHTML = '';

    for (const todo of todoList) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = `
            <span>${todo.name}</span>
            <input type="checkbox" ${todo.completed ? 'checked' : ''} >
        `;
        todoListElement.appendChild(listItem);
    }
}

















