export function toggleComplete(e) {
    if (!e.target.matches('input')) return; // stop fn running if the checkbox is not clicked
    const todo = e.target.parentNode.parentNode;
    const checked = e.target.checked;
    if (checked) {
        todo.classList.add('todo-completed');
    } else {
        todo.classList.remove('todo-completed');
    }
}
