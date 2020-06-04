// single-line factory function for creating each todo list item
const newTodo = ( title, description, dueDate, priority, completed ) => ({ title, description, dueDate, priority, completed });

const todoList = document.getElementById('todos');

export function createTodo() {
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo');
    let todo = newTodo('testing');
    todoItem.textContent = todo.title;
    todoList.appendChild(todoItem);
}