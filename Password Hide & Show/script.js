let counter = 0;
document.querySelector("img").addEventListener("click", () => {
  if (counter == 0) {
    document.querySelector("img").src = "./Images/eye-open.png";
    document.querySelector("#password").type = "text";
    counter = 1;
  } else {
    document.querySelector("img").src = "./Images/eye-close.png";
    document.querySelector("#password").type = "password";
    counter = 0;
  }
});
