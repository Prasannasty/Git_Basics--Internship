document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    function showNotification(message, color = "#2563eb") {
        const notification = document.getElementById("notification");
        notification.textContent = message;
        notification.style.background = color;
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 1800);
    }

    function updateSerialNumbers() {
        Array.from(taskList.children).forEach((item, idx) => {
            const serialSpan = item.querySelector('.serial-number');
            if (serialSpan) serialSpan.textContent = `${idx + 1}.`;
        });
    }

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const li = document.createElement("li");

        // Serial number
        const serial = document.createElement("span");
        serial.className = "serial-number";
        serial.textContent = `${taskList.children.length + 1}.`;
        li.appendChild(serial);

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed");
            if (checkbox.checked) {
                showNotification("Task marked as completed!", "#22c55e");
            }
        });

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", () => {
            const newTask = prompt("Edit your task", taskSpan.textContent);
            if (newTask && newTask.trim() !== "") {
                taskSpan.textContent = newTask.trim();
            }
        });

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(li);
            showNotification("Task removed!", "#ef4444");
            updateSerialNumbers();
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    });
});