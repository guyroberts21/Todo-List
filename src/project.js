import { projects, projectModal, populatePage } from './index';
import { closeModal } from './modal';

export const newProject = (title) => ({ 
    title,
    todos: [] 
});


export function createProject(e) {
    const projectTitle = document.querySelector('#projectTitle');
    const currentProject = document.querySelector('#main h2');
    const todoList = document.querySelector('#todos');

    // prevent page refresh on submit
    e.preventDefault();

    // create the project (using external function)
    let project = newProject(projectTitle.value);

    for (let item of projects) {
        if (item.title == project.title) return;
    }

    // add project to the projects list
    projects.push(project);

    // Update local storage
    localStorage.setItem('projects', JSON.stringify(projects))

    // display new project
    populatePage(projects);

    // show new project as current
    currentProject.textContent = project.title;

    // reset the todos
    todoList.innerHTML = "";

    // close the modal (on success)
    closeModal(projectModal);
    
    // Reset the title and desc. fields
    this.reset();
}