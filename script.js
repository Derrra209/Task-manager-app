let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        // Toggle completed
        li.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        };

        // Delete button
        let btn = document.createElement("button");
        btn.textContent = "X";

        btn.onclick = function (e) {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Initial load
renderTasks();
