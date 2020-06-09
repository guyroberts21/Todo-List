import { newTodo, createTodo} from './todo';
import { newProject, createProject } from './project';
import { openModal, closeModal, clickOutside } from './modal';
import { createProjectContent, populateTodos } from './DOM';
import { format } from 'date-fns';

// trial
import { toggleComplete } from './todo-methods';
const todos = document.querySelector('#todos');
todos.addEventListener('click', toggleComplete);

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
addTodoBtn.addEventListener('click', () => {
    // reset the date to the current date value
    document.getElementById('todoDate').value = new Date().toDateInputValue();
    
    openModal(todoModal);
});
    
todoClose.addEventListener('click', () => closeModal(todoModal));
// Listen for outside click (in window)
window.addEventListener('click', e => clickOutside(e, todoModal));

// Add event listener to create project
document.projectForm.addEventListener('submit', createProject);

// Add event listener to create todo
document.todoForm.addEventListener('submit', createTodo);

// Make the date input display today's date as default
Date.prototype.toDateInputValue = (function() {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

// Function to format date properly
function formatDate(date) {
    date = date.split('-');
    let day = parseInt(date[2]);
    let month = parseInt(date[1]) - 1;
    let year = parseInt(date[0]);

    // return the formatted date using date-fns
    return format(new Date(year, month, day), 'do MMM');
}

// Create an initial project which will appear when user first enter site
let firstProject = newProject('Project 1');
let firstTodo = newTodo('Be productive', '"The way to get started is to quit talking and begin doing."', formatDate(new Date().toDateInputValue()), 'Medium', false);
firstProject.todos.push(firstTodo);

// Local Storage - either retrieve the projects from local storage or create an initial project for user
export let projects = JSON.parse(localStorage.getItem('projects')) || [firstProject];

export function populatePage(projects) {
    const projectList = document.querySelector('#projects');
    const currentProject = document.querySelector('#main h2');

    // display first project as current
    currentProject.textContent = projects[0].title;
    populateTodos(projects[0]);

    projectList.innerHTML = "";
    for (let project of projects) {
        let projectItem = createProjectContent(project);
        projectList.appendChild(projectItem);
    }
}

// Display projects on page load
populatePage(projects);