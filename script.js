const list = document.querySelector('#list')
const taskInput = document.querySelector('#input')




function addTusk() {
   
    if (taskInput.value !== '') {
        let li = document.createElement('li');
        li.textContent = taskInput.value;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        
        list.appendChild(li);

        taskInput.value = '';
    }
}


const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        completed: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        completed: false
    }
]

list.innerHTML = `
${todos.map(todo => {
    return `<li>
    <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <span> ${todo.text}</span>
    `
})}`