function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('.todo-item')).map(item => item.textContent);
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/`;
}

function loadTasks() {
    const cookies = document.cookie.split('; ').find(row => row.startsWith('tasks='));
    if (cookies) {
        const tasks = JSON.parse(cookies.split('=')[1]);
        tasks.forEach(task => addTask(task, false));
    }
}

function addTask(taskText, save = true) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'todo-item';
    taskDiv.textContent = taskText;

    taskDiv.addEventListener('click', () => {
        if (confirm('Do you want to delete this task?')) {
            taskDiv.remove();
            saveTasks();
        }
    });

    document.getElementById('ft_list').appendChild(taskDiv);
    if (save) saveTasks();
}

document.getElementById('new-btn').addEventListener('click', () => {
    const taskText = prompt('Enter a new TO DO:');
    if (taskText) {
        addTask(taskText);
    }
});

loadTasks();
