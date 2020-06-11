import { editProjectModal } from './index';
import { openTodo, deleteTodo } from './todo-methods';
import { deleteProject } from './project-methods';
import { openModal, clickOutside } from './modal';

export function createProjectContent(project) {
    const currentProject = document.querySelector('#main h2');

    // Create the project container
    const projectItem = document.createElement('ul');
    projectItem.classList.add('project');

    projectItem.addEventListener('click', () => {
        currentProject.textContent = project.title;
        populateTodos(project);
    }); 

    // config button
    const configBtn = document.createElement('button');
    const configContent = document.createElement('ul');
    configContent.classList.add('configure-display');
    configBtn.classList.add('configure');
    projectItem.appendChild(configBtn);

    // config edit
    const configEdit = document.createElement('li');
    configEdit.classList.add('configure-edit');
    configEdit.textContent = 'Edit'
    configEdit.addEventListener('click', () => openModal(editProjectModal));

    // close if clicked outside
    window.addEventListener('click', e => clickOutside(e, editProjectModal));

    // append to the container
    configContent.appendChild(configEdit);

    // config delete
    const configDelete = document.createElement('li');
    configDelete.textContent = 'Delete';
    configDelete.addEventListener('click', deleteProject);
    configContent.appendChild(configDelete);

    // append the config to the button
    configBtn.appendChild(configContent);

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

export function createTodoContent(todo) {
    // todo item
    const main = document.createElement('div');
    main.classList.add('todo-item');
    main.addEventListener('click', openTodo);

    // main content
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-main');

    // secondary content
    let todoSecondary = document.createElement('div');
    todoSecondary.classList.add('todo-secondary');

    // todo description
    const todoInfoContainer = document.createElement('span');
    todoInfoContainer.classList.add('todo-info');
    todoInfoContainer.textContent = "- " + todo.description;
    todoSecondary.appendChild(todoInfoContainer);

    // todo delete
    const todoDelete = document.createElement('span');
    todoDelete.classList.add('todo-delete');
    todoDelete.textContent = 'X';
    todoDelete.addEventListener('click', deleteTodo);
    todoSecondary.appendChild(todoDelete);

    // priority
    const priority = document.createElement('div');
    priority.classList.add('todo-priority-mini');
    // priority.textContent = todo.priority;
    switch (todo.priority.toLowerCase()) {
        case 'low':
            priority.style.opacity = 0.3;
            break;
        case 'medium':
            priority.style.opacity = 0.7;
            break;
        case 'high':
            priority.style.opacity = 1;
            break;
    }
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
    const todoCompleteLabel = document.createElement('label');
    todoCompleteLabel.classList.add('checkbox-label');
    const todoCompleteInput = document.createElement('input');
    todoCompleteInput.type = 'checkbox';
    const todoCompleteCheckbox = document.createElement('span');
    todoCompleteCheckbox.classList.add('checkbox-custom');
    todoCompleteLabel.appendChild(todoCompleteInput);
    todoCompleteLabel.appendChild(todoCompleteCheckbox);
    todoContainer.appendChild(todoCompleteLabel);

    // append to the main item
    main.appendChild(todoContainer);
    main.appendChild(todoSecondary);

    // return final element
    return main;
}

export function populateTodos(project) {
    const todoList = document.querySelector('#todos');
    todoList.innerHTML = "";
    if (!project) return;
    for (let i = 0; i < project.todos.length; i++) {
        let todoItem = createTodoContent(project.todos[i]);
        todoItem.dataset.index = i;
        todoList.appendChild(todoItem);
    }
}

export const todoTitle = document.getElementById('todoTitle');
export const todoDescription = document.getElementById('todoDescription');
export const todoDate = document.getElementById('todoDate');
export const todoPriority = document.getElementById('priorities')