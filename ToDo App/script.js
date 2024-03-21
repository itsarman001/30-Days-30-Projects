let taskWrapper = document.querySelector(".taskWrapper");
let userInput = document.getElementById("userInput");

document.querySelector(".userInput-wrapper button").addEventListener('click', addTask);

function addTask() {
    let task = {
        content: userInput.value,
        completed: false
    };
    addTaskToDOM(task);
    saveData();
    userInput.value = "";
}

function addTaskToDOM(task) {
    let taskElement = document.createElement("li");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
    <label class="${task.completed ? 'checked' : ''}">
        <span class="container">
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <div class="checkmark"></div>
        </span>
        ${task.content}
    </label>
    <button class="trashBtn">
        <img src="assets/trash.svg" alt="trash">
    </button>
    `;
    taskWrapper.appendChild(taskElement);
}

function saveData() {
    let tasks = Array.from(taskWrapper.children).map(taskElement => {
        return {
            content: taskElement.querySelector('label').textContent,
            completed: taskElement.querySelector('input').checked
        };
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getData() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => addTaskToDOM(task));
    }
}

taskWrapper.addEventListener('click', (e) => {
    if (e.target.tagName === "LABEL") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
    }
    saveData();
}, false);

getData();