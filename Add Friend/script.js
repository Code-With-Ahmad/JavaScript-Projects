let flag = 0;

document.querySelector(".button").addEventListener("click", () => {
  if (flag == 0) {
    flag = 1;
    document.querySelector(".para").innerHTML = "Friends";
    document.querySelector(".para").style.color = "green";
    document.querySelector(".para").style.fontSize = "35px";
    document.querySelector("button").innerHTML = "Remove";
    document.querySelector("button").style.backgroundColor = "red";
  } else {
    document.querySelector(".para").innerHTML = "";
    document.querySelector("button").innerHTML = "Add Friend";
    document.querySelector("button").style.backgroundColor = "green";
    flag = 0;
  }
});
