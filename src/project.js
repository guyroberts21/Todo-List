import { createProjectContent } from './DOM';
import { closeModal } from './modal';

export const newProject = (title, description) => ({ 
    title,
    description,
    todos: [] 
});

const projectList = document.querySelector('#projects');

// Later => add a drop down button for the projects
// Later => create a separate file for the DOM stuff as it complicates things here
export function createProject(e) {
    // prevent page refresh on submit
    e.preventDefault();

    // warning to display if no title input
    const warning = document.getElementById('projectWarning');

    // Reset the display value of warning (if it is already displayed)
    warning.style.display = 'none';

    // Check if title is valid and alert error if so
    if (projectTitle.value == '') {
        warning.style.display = 'inline';
        return; // stop fn running
    }

    // create the project (using external function)
    let project = createProjectContent();

    // add project to the projects list
    projectList.appendChild(project);

    // close the modal (on success)
    closeModal();
    
    // Reset the title and desc. fields
    this.reset();
}