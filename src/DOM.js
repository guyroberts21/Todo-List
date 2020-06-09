export function createProjectContent(project) {
    const currentProject = document.querySelector('#main h2');

    // Create the project container
    let projectItem = document.createElement('ul');
    projectItem.classList.add('project');

    projectItem.addEventListener('click', () => {
        currentProject.textContent = project.title;
        populateTodos(project);
    }); 

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

export function createTodoContent(todo) {
    // main container
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');

    // priority
    const priority = document.createElement('div');
    priority.classList.add('todo-priority-mini');
    priority.textContent = todo.priority;
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

export function populateTodos(project) {
    const todoList = document.querySelector('#todos');
    todoList.innerHTML = "";
        for (let todo of project.todos) {
            let todoItem = createTodoContent(todo);
            todoList.appendChild(todoItem);
        }
}

export const todoTitle = document.getElementById('todoTitle');
export const todoDescription = document.getElementById('todoDescription');
export const todoDate = document.getElementById('todoDate');
export const todoPriority = document.getElementById('priorities')