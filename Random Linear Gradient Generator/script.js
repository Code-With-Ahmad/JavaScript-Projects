let counter = 0;
let input = document.querySelector("input");
function RandomBgColorGenrator() {
  let hexValuesRange = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValuesRange[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

document.querySelector(".btn").addEventListener("click", () => {
  let firstColor = RandomBgColorGenrator();
  let secondColor = RandomBgColorGenrator();
  document.body.style.background = `linear-gradient(to right , ${firstColor} , ${secondColor})`;
  input.value = `linear-gradient(to right , ${firstColor} , ${secondColor})`;

  let rotate = document.querySelector(".ri-loop-right-line");
  let copy = document.querySelector(".ri-file-copy-line");

  rotate.style.display = "block";
  copy.style.display = "block";

  rotate.addEventListener("click", () => {
    counter++;
    if (counter == 1) {
      document.body.style.background = `linear-gradient(90deg , ${firstColor} , ${secondColor})`;
      input.value = `linear-gradient(90deg , ${firstColor} , ${secondColor})`;
    } else if (counter == 2) {
      document.body.style.background = `linear-gradient(180deg , ${firstColor} , ${secondColor})`;
      input.value = `linear-gradient(180deg , ${firstColor} , ${secondColor})`;
    } else if (counter == 3) {
      document.body.style.background = `linear-gradient(270deg , ${firstColor} , ${secondColor})`;
      input.value = `linear-gradient(270deg , ${firstColor} , ${secondColor})`;
    } else {
      document.body.style.background = `linear-gradient(360deg , ${firstColor} , ${secondColor})`;
      input.value = `linear-gradient(360deg , ${firstColor} , ${secondColor})`;
      counter = 0;
    }
  });
  copy.addEventListener("click", () => {
    copyGradient();
  });
});

function copyGradient() {
  let input = document.getElementById("copy");
  input.select();
  document.execCommand("copy");
  alert("copied");
}
