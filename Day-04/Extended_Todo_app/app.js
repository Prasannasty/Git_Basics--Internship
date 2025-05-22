document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed");
        });

        // Task text
        const span = document.createElement("span");
        span.textContent = taskText;
        span.style.marginLeft = "8px";
        span.style.marginRight = "8px";

        ///edit button
        //extra add prompt and at the prompt we have to pass the value ..then it can be changed 
        const edit=document.createElement("button");
        edit.textContent="Edit";
        edit.className="edit-btn";
        edit.addEventListener("click",function(){
               const newtask=prompt("Edit your task",span.textContent);
               //check if the newtask is not null and not empty
               if(newtask!==null && newtask.trim()!==""){
                span.textContent=newtask.trim();
               }
        });


        // Remove button

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        

        taskInput.value = '';
    });
});