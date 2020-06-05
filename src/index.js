import { createTodo} from './create-todo';
import { createProject } from './project';
import { openModal } from './modal';
import { closeModal } from './modal';
import { clickOutside } from './modal';

// Make new todo (on a given project)
const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', createTodo);

const submitProject = document.getElementById('submitProject');
submitProject.addEventListener('click', createProject);

// Modal buttons
const projectBtn = document.getElementById('addProject');
const projectClose = document.querySelector('.project-close-btn');

// Listen for open click
projectBtn.addEventListener('click', openModal);
// Listen for close click
projectClose.addEventListener('click', closeModal);
// Listen for outside click (in window)
window.addEventListener('click', clickOutside);