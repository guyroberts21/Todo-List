import { closeModal } from './modal';

const projectList = document.querySelector('#projects');
const currentProject = document.querySelector('#main h2');

const newProject = (title, description) => ({ 
    title,
    description,
    todos: [] 
});

// Later => add a drop down button for the projects
// Later => create a separate file for the DOM stuff as it complicates things here
export function createProject(e) {
    // prevent page refresh on submit
    e.preventDefault();

    const warning = document.getElementById('projectWarning');
    const projectTitle = document.querySelector('#projectTitle');
    const projectDescription = document.querySelector('#projectDescription');

    // Reset the display value of warning (if it is already displayed)
    warning.style.display = 'none';

    // Check if title is valid and alert error if so
    if (projectTitle.value == '') {
        warning.style.display = 'inline';
        return; // stop fn running
    }

    // Create the project (using the info from the modal)
    let projectItem = document.createElement('li');
    projectItem.classList.add('project');
    let project = newProject(projectTitle.value, projectDescription.value);
    projectItem.addEventListener('click', () => currentProject.textContent = project.title);
    projectItem.textContent = project.title;
    projectList.appendChild(projectItem);
    closeModal();
    
    // Reset the title and desc. fields
    this.reset();
}