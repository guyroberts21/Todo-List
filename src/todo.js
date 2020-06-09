import { todoTitle, todoDescription, todoDate, todoPriority, populateTodos } from './DOM';
import { closeModal } from './modal';
import { projects, todoModal } from './index';
import { format } from 'date-fns';

// export single-line factory function for creating each todo list item
export const newTodo = ( title, description, dueDate, priority, completed ) => ({ title, description, dueDate, priority, completed });

export function createTodo(e) {
    const currentProject = document.querySelector('#main h2').textContent;

    // prevent page refresh
    e.preventDefault();

    // Format the date using date-fns module
    const date = todoDate.value.split('-');
    let day = parseInt(date[2]);
    let month = parseInt(date[1]) - 1;
    let year = parseInt(date[0]);
    const formattedDate = format(new Date(year, month, day), 'do MMM');

    // create the todo structure
    let todo = newTodo(todoTitle.value, todoDescription.value, formattedDate, todoPriority.value, false);

    // add the todo to current project
    for (let project of projects) {
        if (project.title == currentProject) {
            project.todos.push(todo);
            populateTodos(project);
        }
    };

    // Update local storage
    localStorage.setItem('projects', JSON.stringify(projects))

    // close on success
    closeModal(todoModal);

    // reset fields
    this.reset();
}