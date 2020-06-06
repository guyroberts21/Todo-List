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
    let projectItem = document.createElement('ul');
    projectItem.classList.add('project');
    // Find the index of the new project and make a data key
    // projectItem.dataset.project = `${projectsList.childNodes.length - 1}`;
    let project = newProject(projectTitle.value, projectDescription.value);
    projectItem.addEventListener('click', () => currentProject.textContent = project.title);

    // configure button
    const configureBtn = document.createElement('button');
    configureBtn.classList.add('configure');
    configureBtn.textContent = '...';
    projectItem.appendChild(configureBtn);

    // span for the title
    const projectName = document.createElement('span');
    projectName.classList.add('project-name');
    const maxDisplayLength = 11;
    projectName.textContent = project.title.length > maxDisplayLength ? project.title.slice(0, maxDisplayLength) + '...' : project.title;
    projectItem.appendChild(projectName);

    // dropdown to show the todos of a project
    const projectDropdown = document.createElement('span');
    projectDropdown.classList.add('project-dropdown');
    projectDropdown.textContent = '▶︎';
    projectDropdown.addEventListener('click', () => projectDropdown.classList.toggle('dropdown-open'));
    projectItem.appendChild(projectDropdown);

    // append the config and title to the projects list
    projectList.appendChild(projectItem);

    closeModal();
    
    // Reset the title and desc. fields
    this.reset();
}