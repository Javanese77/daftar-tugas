document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.setAttribute('data-index', index);
        deleteBtn.onclick = deleteTask;

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
});

function deleteTask(event) {
    const index = event.target.getAttribute('data-index');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    location.reload();
}
