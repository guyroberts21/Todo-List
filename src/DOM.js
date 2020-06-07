import { newProject } from './project';
import { newTodo } from './todo';
import { format, parse } from 'date-fns';

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

export function createTodoContent() {
    const todoTitle = document.getElementById('todoTitle');
    const todoDescription = document.getElementById('todoDescription');
    const todoDate = document.getElementById('todoDate');

    // Format the date using date-fns module
    const date = todoDate.value.split('-');
    let day = parseInt(date[2]);
    let month = parseInt(date[1]) - 1;
    let year = parseInt(date[0]);
    const formattedDate = format(new Date(year, month, day), 'do MMM');

    // create the todo (using info from modal)
    let todo = newTodo(todoTitle.value, todoDescription.value, formattedDate, 1, false);

    // main container
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');

    // priority
    const priority = document.createElement('div');
    priority.classList.add('todo-priority-mini');
    todoContainer.appendChild(priority);

    // todo title
    const todoTitleText = document.createElement('span');
    todoTitleText.classList.add('todo-title');
    todoTitleText.textContent = todo.title;
    todoContainer.appendChild(todoTitleText);

    // todo date
    const todoDateDisplay = document.createElement('span');
    todoDateDisplay.classList.add('todo-date');
    todoDateDisplay.textContent = todo.dueDate;
    todoContainer.appendChild(todoDateDisplay);

    // mark as completed
    const todoComplete = document.createElement('input');
    todoComplete.type = 'checkbox';
    todoContainer.appendChild(todoComplete);

    // return final element
    return todoContainer;
}