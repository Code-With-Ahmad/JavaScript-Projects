document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();

  if (task !== "") {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      saveTasks();
    });
    var label = document.createElement("label");
    label.textContent = task;
    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);
    input.value = "";
    saveTasks();
  }
}
function saveTasks() {
  var tasks = [];
  var taskElements = document.querySelectorAll("#taskList li");
  taskElements.forEach(function (taskElement) {
    var task = {
      text: taskElement.querySelector("label").textContent,
      completed: taskElement.querySelector("input[type='checkbox']").checked,
    };
    tasks.push(task);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      saveTasks();
    });
    var label = document.createElement("label");
    label.textContent = task.text;
    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);
  });
}
