document.addEventListener("DOMContentLoaded", () => {
  notesContainer.innerHTML = JSON.parse(localStorage.getItem("notes")) || "";
  notesNumber();
  removeElement();
});
document.addEventListener("input", () => {
  saveNotes();
});
let notesContainer = document.querySelector(".notes-container");
let createNotes = document.getElementById("create-notes");

createNotes.addEventListener("click", () => {
  let p = document.createElement("p");
  p.setAttribute("contenteditable", "true");
  p.classList.add("input-box");
  p.innerHTML = ' <img src="./images/delete.png" alt="" class="del">';
  notesContainer.appendChild(p);
  notesNumber();
  saveNotes();
  removeElement();
});
function removeElement() {
  document.querySelectorAll(".del").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      notesNumber();
      saveNotes();
    });
  });
}
function saveNotes(a) {
  localStorage.setItem("notes", JSON.stringify(notesContainer.innerHTML));
  localStorage.setItem("notesNumber", JSON.stringify(a));
}

function notesNumber() {
  let notes = document.getElementsByClassName("input-box");
  let span = document.getElementById("span");
  span.innerHTML = notes.length;
  saveNotes(notes.length);
}
