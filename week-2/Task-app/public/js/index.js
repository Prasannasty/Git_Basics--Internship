document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.getElementById('closeModal');
    const taskForm = document.getElementById('taskForm');
    const tasksTableBody = document.querySelector('#tasksTable tbody');

    // Show modal on Add Task button click
    addTaskBtn.addEventListener('click', () => {
        document.getElementById('modalTitle').textContent = 'Add Task';
        taskForm.reset();
        document.getElementById('taskId').value = '';
        document.getElementById('saveTaskBtn').textContent = 'Save';
        document.getElementById('saveTaskBtn').disabled = false;
        originalTitle = '';
        originalDescription = '';
        taskModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    // Submit form (Add Task)
    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const status = document.getElementById('status').value;
        const id = document.getElementById('taskId').value;

        if (id) {
            // Edit existing task
            await fetch(`/api/tasks/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, status })
            });
        } else {
            // Add new task
            await fetch('/api/tasks/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, status })
            });
        }

        taskModal.style.display = 'none';
        loadTasks();
        // Reset button for next use
        document.getElementById('saveTaskBtn').textContent = 'Save';
        document.getElementById('saveTaskBtn').disabled = false;
    });

    // Load tasks and display in table
    async function loadTasks() {
        const res = await fetch('/api/tasks/tasks');
        if (!res.ok) {
            tasksTableBody.innerHTML = '<tr><td colspan="3">Failed to load tasks</td></tr>';
            return;
        }
        const tasks = await res.json();
        if (!Array.isArray(tasks)) {
            tasksTableBody.innerHTML = '<tr><td colspan="3">No tasks found</td></tr>';
            return;
        }
        tasksTableBody.innerHTML = '';
        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>
                    <span class="status ${task.status === 'Completed' ? 'completed' : 'pending'}">
                        ${task.status || 'Pending'}
                    </span>
                </td>
                <td>
                    <button class="edit-btn" data-id="${task.id}" data-title="${task.title}" data-description="${task.description}" data-status="${task.status || 'Pending'}">Edit</button>
                    <button class="delete-btn" data-id="${task.id}">Delete</button>
                </td>
            `;
            tasksTableBody.appendChild(row);
        });
    }

    let pendingEditTask = null;
    let originalTitle = '';
    let originalDescription = '';

    tasksTableBody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit-btn')) {
            // Store task data for editing
            pendingEditTask = {
                id: e.target.dataset.id,
                title: e.target.dataset.title,
                description: e.target.dataset.description
            };
            // Show edit confirmation toast
            document.getElementById('editToast').style.display = 'block';
        }
        if (e.target.classList.contains('delete-btn')) {
            // Show delete confirmation modal
            document.getElementById('deleteModal').style.display = 'block';
            document.getElementById('confirmDeleteBtn').dataset.id = e.target.dataset.id;
        }
    });

    // Handle edit confirmation
    document.getElementById('confirmEditBtn').addEventListener('click', () => {
        if (pendingEditTask) {
            document.getElementById('modalTitle').textContent = 'Edit Task';
            document.getElementById('title').value = pendingEditTask.title;
            document.getElementById('description').value = pendingEditTask.description;
            document.getElementById('taskId').value = pendingEditTask.id;
            document.getElementById('status').value = pendingEditTask.status || 'Pending';
            document.getElementById('saveTaskBtn').textContent = 'Update';
            document.getElementById('taskModal').style.display = 'block';
            // Store original values for change detection
            originalTitle = pendingEditTask.title;
            originalDescription = pendingEditTask.description;
            // Disable update button initially
            document.getElementById('saveTaskBtn').disabled = true;
            pendingEditTask = null;
        }
        document.getElementById('editToast').style.display = 'none';
    });
    document.getElementById('cancelEditBtn').addEventListener('click', () => {
        pendingEditTask = null;
        document.getElementById('editToast').style.display = 'none';
    });

    // Enable Update button only if data is changed
    document.getElementById('title').addEventListener('input', checkIfChanged);
    document.getElementById('description').addEventListener('input', checkIfChanged);

    function checkIfChanged() {
        const currentTitle = document.getElementById('title').value;
        const currentDescription = document.getElementById('description').value;
        const isChanged = currentTitle !== originalTitle || currentDescription !== originalDescription;
        document.getElementById('saveTaskBtn').disabled = !isChanged;
    }

    // Handle delete confirmation
    document.getElementById('confirmDeleteBtn').addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        await fetch(`/api/tasks/tasks/${id}`, { method: 'DELETE' });
        document.getElementById('deleteModal').style.display = 'none';
        loadTasks();
    });
    document.getElementById('cancelDeleteBtn').addEventListener('click', () => {
        document.getElementById('deleteModal').style.display = 'none';
    });
    document.getElementById('closeDeleteModal').addEventListener('click', () => {
        document.getElementById('deleteModal').style.display = 'none';
    });

    // Initial load
    loadTasks();
});