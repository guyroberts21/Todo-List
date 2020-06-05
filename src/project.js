const projectList = document.querySelector('#projects');
const currentProject = document.querySelector('#main h2');

const newProject = (title, description) => ({ 
    title,
    description,
    projects: [] 
});

// export function createProject() {
//     let projectItem = document.createElement('li');
//     projectItem.classList.add('project');
//     let project = newProject('test');
//     projectItem.addEventListener('click', () => {
//         currentProject.textContent = project.title;
//     });
//     projectItem.textContent = project.title;
//     projectList.appendChild(projectItem);
// }

// Check if title is valid (not left blank);
// If the title is blank, alert an error message (on the modal)
// If everything is good, take the values of the title and description
// and put them into the newProject factory fn
// Output this info into an list item

// Later => add a drop down button for the projects
export function createProject() {

}