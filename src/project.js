import { createProjectContent } from './DOM';
import { closeModal } from './modal';
import { projectModal } from './index';

export const newProject = (title, description) => ({ 
    title,
    description,
    todos: [] 
});


export function createProject(e) {
    const projectList = document.querySelector('#projects');

    // prevent page refresh on submit
    e.preventDefault();

    // create the project (using external function)
    let project = createProjectContent();

    // add project to the projects list
    projectList.appendChild(project);

    // close the modal (on success)
    closeModal(projectModal);
    
    // Reset the title and desc. fields
    this.reset();
}