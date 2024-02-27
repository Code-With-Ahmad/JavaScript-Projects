document.addEventListener("DOMContentLoaded", () => {
  ListContainer.innerHTML = localStorage.getItem("todo");
});
document.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  }
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

let input = document.querySelector("input");
let ListContainer = document.querySelector("#list-container");
function addTask() {
  let inputTask = document.querySelector("input").value;
  if (inputTask == "") {
    alert("Please Enter Any Value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveTask();
}
function saveTask() {
  localStorage.setItem("todo", ListContainer.innerHTML);
}
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

function removeAllTask() {
  ListContainer.innerHTML = "";
  saveTask();
}
