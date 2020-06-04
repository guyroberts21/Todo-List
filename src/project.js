const projectList = document.querySelector('#projects');
const currentProject = document.querySelector('#main h2');

const newProject = (title) => ({ 
    title,
    projects: [] 
});

export function createProject(val) {
    let projectItem = document.createElement('li');
    projectItem.classList.add('project');
    let project = newProject('test');
    projectItem.addEventListener('click', () => {
        currentProject.textContent = project.title;
    });
    projectItem.textContent = project.title;
    projectList.appendChild(projectItem);
}