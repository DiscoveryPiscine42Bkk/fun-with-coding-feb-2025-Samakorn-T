function saveTasks() {
    const tasks = $('.todo-item').map(function() {
        return $(this).text();
    }).get();

    document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/`;
}

function loadTasks() {
    const cookies = document.cookie.split('; ').find(row => row.startsWith('tasks='));
    if (cookies) {
        const tasks = JSON.parse(decodeURIComponent(cookies.split('=')[1]));
        tasks.forEach(task => addTask(task, false));
    }
}

function addTask(taskText, save = true) {
    const taskDiv = $('<div>', {
        class: 'todo-item',
        text: taskText,
        click: function() {
            if (confirm('Do you want to delete this task?')) {
                $(this).remove();
                saveTasks();
            }
        }
    });

    $('#ft_list').append(taskDiv);
    if (save) saveTasks();
}

$(document).ready(function() {
    $('#new-btn').on('click', function() {
        const taskText = prompt('Enter a new TO DO:');
        if (taskText) {
            addTask(taskText);
        }
    });

    loadTasks();
});
