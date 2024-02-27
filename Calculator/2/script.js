let display = document.querySelector(".display");

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      display.innerHTML = eval(display.innerHTML);
    } else if (e.target.innerHTML == "DE") {
      display.innerHTML = display.innerHTML.toString().slice(0, -1);
    } else if (e.target.innerHTML == "AC") {
      display.innerHTML = "";
    } else {
      display.innerHTML += e.target.innerHTML;
    }
  });
});
