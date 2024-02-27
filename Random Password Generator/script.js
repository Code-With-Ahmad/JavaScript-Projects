let okBtn = document.querySelector(".okBtn");
let popup = document.querySelector(".popup");
let btn = document.querySelector("#btn");
let charcters =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+-*/!@#$%^&_=()|.,:;'`~<>{}[]\\";

let length = 12;

function randomPassword() {
  let password = "";
  for (let i = 0; i < length; i++) {
    password +=
      charcters[Math.floor(Math.random() * (charcters.length - 1 - 1 + 1) + 1)];
  }
  document.getElementById("password").value = password;
}
document.querySelector("#btn").addEventListener("click", () => {
  randomPassword();
});

function copyPassword() {
  let input = document.getElementById("password");
  if (input.value == "") {
    alert("Nothing To Copy");
  } else {
    input.select();
    document.execCommand("copy");
    popup.classList.add("open-popUp");
  }
}
document.querySelector("#copy").addEventListener("click", () => {
  copyPassword();
});

okBtn.addEventListener("click", () => {
  popup.classList.remove("open-popUp");
});
