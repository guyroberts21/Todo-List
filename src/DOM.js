import { newProject } from './project';

export function createProjectContent() {
    const currentProject = document.querySelector('#main h2');
    const projectTitle = document.querySelector('#projectTitle');
    const projectDescription = document.querySelector('#projectDescription');

    // Create the project (using the info from the modal)
    let projectItem = document.createElement('ul');
    projectItem.classList.add('project');
    let project = newProject(projectTitle.value, projectDescription.value);
    projectItem.addEventListener('click', () => currentProject.textContent = project.title);

    // config button
    let configBtn = document.createElement('button');
    configBtn.classList.add('configure');
    configBtn.textContent = '...';
    projectItem.appendChild(configBtn);

    // make title
    const projectName = document.createElement('span');
    projectName.classList.add('project-name');
    const maxDisplayLength = 11;
    projectName.textContent = project.title.length > maxDisplayLength ? 
        project.title.slice(0, maxDisplayLength) + '...' : project.title;
    projectItem.appendChild(projectName);

    // dropdown to show the todos of a project
    const projectDropdown = document.createElement('span');
    projectDropdown.classList.add('project-dropdown');
    projectDropdown.textContent = '▶︎';
    projectDropdown.addEventListener('click', () => projectDropdown.classList.toggle('dropdown-open'));
    projectItem.appendChild(projectDropdown);

    // return the final element
    return projectItem;
}
