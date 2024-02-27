let submitBtn = document.querySelector(".btn");
let okBtn = document.querySelector(".okBtn");
let popup = document.querySelector(".popup");

submitBtn.addEventListener("click", () => {
  popup.classList.add("open-popUp");
});
okBtn.addEventListener("click", () => {
  popup.classList.remove("open-popUp");
});
