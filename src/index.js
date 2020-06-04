import { createTodo} from './create-todo';
import { createProject } from './project';

// Make new project
const addProject = document.getElementById('addProject');
addProject.addEventListener('click', createProject);

// Make new todo (on a given project)
const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', createTodo);