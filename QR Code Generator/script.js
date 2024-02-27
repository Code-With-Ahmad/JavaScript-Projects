let input = document.querySelector("input");

function QRCODE() {
  if (input.value !== "") {
    document.querySelector("#qr-code").src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    document.querySelector(".img-box").classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}
