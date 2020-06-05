import { closeModal } from './modal';

const projectList = document.querySelector('#projects');
const projectModalContent = document.querySelector('.modal-content');
const currentProject = document.querySelector('#main h2');

const newProject = (title, description) => ({ 
    title,
    description,
    todos: [] 
});

// export function createProject() {
//     let projectItem = document.createElement('li');
//     projectItem.classList.add('project');
//     let project = newProject('test');

// }

// Check if title is valid (not left blank);
// If the title is blank, alert an error message (on the modal)
// If everything is good, take the values of the title and description
// and put them into the newProject factory fn
// Output this info into an list item

// Later => add a drop down button for the projects
// Later => create a separate file for the DOM stuff as it complicates things here
export function createProject() {
    const warning = document.getElementById('projectWarning');
    const projectTitle = document.querySelector('#projectTitle');
    const projectDescription = document.querySelector('#projectDescription');

    // Reset the display value of warning (if it is already displayed)
    warning.style.display = 'none';

    // Create a warning message 
    // const warning = document.createElement('span');
    // warning.id = 'project-warning';
    // warning.textContent = 'Enter a valid title';
    // warning.style.color = '#E85A4F';
    // warning.style.fontStyle = 'italic';
    // warning.style.marginLeft = '1em';
    // warning.style.display = 'none';
    // projectModalContent.insertBefore(warning, projectTitle);

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
    projectTitle.value = '';
    projectDescription.value = '';
}