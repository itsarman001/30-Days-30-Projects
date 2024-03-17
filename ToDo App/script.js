let taskWrapper = document.querySelector(".taskWrapper")
let userInput = document.getElementById("userInput");

document.querySelector(".userInput-wrapper button").addEventListener('click', addTask);

function addTask() {
    console.log("Button Clicked")
    let userInput = document.getElementById("userInput");
    let task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `
    <label>
        <span class="container">
            <input type="checkbox">
            <div class="checkmark"></div>
        </span>
        <span class="task-desc">${userInput.value}</span>
    </label>
    <button class="trashBtn">
        <img src="assets/trash.svg" alt="trash">
    </button>
    `
    taskWrapper.appendChild(task);
    userInput.value = ""
    saveData()
}

function saveData() {
    let storeData = localStorage.setItem("tasks", taskWrapper.innerHTML)
}

function getData() {
    taskWrapper.innerHTML = localStorage.getItem("tasks")
}

taskWrapper.addEventListener('click', (e)=>{
    if(e.target.tagName === "LABLEL") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
    };
    saveData()
}, false);


getData()