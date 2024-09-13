// alert('page is workking')
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//     const todoInput = document.getElementById("todoInput");
//     const addTodoBtn = document.getElementById("addTodoBtn");
//     const todoList = document.getElementById("todoList");

//     addTodoBtn.addEventListener('click', addTodo);
//     todoInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             addTodo();
//         }
//     });

//     function addTodo() {
//         const todoText = todoInput.value.trim();
//         if (todoText !== '') {
//             const li = document.createElement('li');
//             li.textContent = todoText;
//             todoList.appendChild(li);
//             todoInput.value = ''; // Clear the input field
//         }
//     }
// });

