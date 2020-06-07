import { createTodoContent } from './DOM';
import { closeModal } from './modal';
import { todoModal } from './index';

// export single-line factory function for creating each todo list item
export const newTodo = ( title, description, dueDate, priority, completed ) => ({ title, description, dueDate, priority, completed });

export function createTodo(e) {
    const todoList = document.getElementById('todos');

    // prevent page refresh
    e.preventDefault();

    // create the todo structure
    let todo = createTodoContent();

    // append to the list
    todoList.appendChild(todo);

    // close on success
    closeModal(todoModal);

    // reset fields
    this.reset();
}