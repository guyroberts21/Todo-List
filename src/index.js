import { createTodo} from './todo';
import { createProject } from './project';
import { openModal } from './modal';
import { closeModal } from './modal';
import { clickOutside } from './modal';

// Project Modal buttons
export const projectModal = document.getElementById('projectModal');
const projectBtn = document.getElementById('addProject');
const projectClose = document.querySelector('.project-close-btn');

// Project Modal
projectBtn.addEventListener('click', () => openModal(projectModal));
projectClose.addEventListener('click', () => closeModal(projectModal));
// Listen for outside click (in window)
window.addEventListener('click', e => clickOutside(e, projectModal));

// Todo Modal buttons
export const todoModal = document.getElementById('todoModal');
const addTodoBtn = document.getElementById('addTodo');
const todoClose = document.querySelector('.todo-close-btn');

// Todo Modal
addTodoBtn.addEventListener('click', () => openModal(todoModal));
todoClose.addEventListener('click', () => closeModal(todoModal));
// Listen for outside click (in window)
window.addEventListener('click', e => clickOutside(e, todoModal));

// Add event listener to create project
document.projectForm.addEventListener('submit', createProject);

// Add event listener to create todo
document.todoForm.addEventListener('submit', createTodo);
