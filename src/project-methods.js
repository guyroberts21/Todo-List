import { projects, populatePage, todos } from './index';
import { closeModal } from './modal';
import { populateTodos } from './DOM';

// find the current project
export function findProject(projects) {
    const currentProject = document.querySelector('#main h2').textContent;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == currentProject) {
            return projects[i];
        }
    };
    throw new Error('Project doesn\'t exist');
}

export function editProject(e) {
    // prevent page refresh
    e.preventDefault();

    // find the current project
    const project = findProject(projects);
    const newTitle = document.querySelector('#editProjectTitle').value;

    // check if title already exists
    for (let item of projects) {
        if (item.title == newTitle) return;
    }

    // update title
    project.title = newTitle;

    // Update local storage
    localStorage.setItem('projects', JSON.stringify(projects));

    populatePage(projects);

    closeModal(editProjectModal);

    this.reset();

    console.log(project);
}

export function deleteProject(e) {
    const projectIdx = projects.indexOf(findProject(projects));
    projects[projectIdx].todos = [];
    projects.splice(projectIdx, 1);

    // Update local storage
    localStorage.setItem('projects', JSON.stringify(projects));
    
    populatePage(projects);
}