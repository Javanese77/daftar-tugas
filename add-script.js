document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';

    window.location.href = 'index.html';
});
