// Define variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener("DOMContentLoaded", getTasks);
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear all tasks event
    clearBtn.addEventListener("click", clearTasks);
    // Filter task events
    filter.addEventListener("keyup", filterTasks);
}

// Get tasks from local storage
function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task) {
        // Create li element
        const li = document.createElement("li");
        // Add class
        li.className = "collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement("a");
        // Add class
        link.className = "delete-item secondary-content";
        // Add icon html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add task
function addTask(e) {
    if (taskInput.value === "") {
        alert("Add a task");
    } else {
        // Create li element
        const li = document.createElement("li");
        // Add class
        li.className = "collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement("a");
        // Add class
        link.className = "delete-item secondary-content";
        // Add icon html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Store in local storage
        storeTaskInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = "";
    }
    // Prevent form submission, which is the default behaviour of submit
    e.preventDefault();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
    // e.target = what's clicked on
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            // get i element, then a element, then li and remove from DOM
            const listItem = e.target.parentElement.parentElement;
            listItem.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(listItem);
        }
    }
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks(e) {
    // taskList.innerHTML = "";

    // Faster; clear from DOM
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from local storage
    clearTasksFromLocalStorage();
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach
    (function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
