const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".f-btn");

let tasks = [];
let currentFilter = "all";

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false,
  });

  taskInput.value = "";
  render();
});

function render() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
                <input type="checkbox" aria-label="Mark task as completed">
                <span class="task-text">${task.text}</span>
                <button type="button" class="delete-btn" aria-label="Delete task">🗑</button>
    `;
    taskList.appendChild(li);
  });
}
 