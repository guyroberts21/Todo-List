import { projects } from './index';
import { findProject } from './project';
import { populateTodos } from './DOM';

export function toggleComplete(e) {
    if (!e.target.matches('input')) return; // stop fn running if the checkbox is not clicked
    const todo = e.target.parentNode.parentNode.parentNode;
    const checked = e.target.checked;
    if (checked) {
        todo.classList.add('todo-completed');
    } else {
        todo.classList.remove('todo-completed');
    }
}

export function openTodo(e) {
    // stop fn running if the main div is not clicked
    if (e.target.nodeName !== 'DIV') return;
    this.classList.toggle('todo-item-open');
}

export function deleteTodo(e) {
    let todo = e.target.parentNode.parentNode;
    let idx = todo.dataset.index;
    
    // find current project
    let currentProject = findProject(projects);

    // remove todo
    currentProject.todos.splice(idx, 1);

    localStorage.setItem('projects', JSON.stringify(projects));
    populateTodos(currentProject);
}