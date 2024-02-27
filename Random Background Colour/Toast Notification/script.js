let successMsg = `<i 
class="ri-checkbox-circle-fill"></i> Successfully Completed `;
let ErrorMsg = `<i class="ri-close-circle-fill"></i> Error Message `;
let InvalidMsg = `<i class="ri-error-warning-fill"></i> Invalid Input`;

function showToast(msg) {
  let div = document.createElement("div");
  div.setAttribute("data-aos", "fade-left");
  div.classList.add("toast");
  div.innerHTML = msg;
  document.querySelector(".toast-box").appendChild(div);
  if (msg.includes("Error")) {
    div.classList.add("error");
  } else if (msg.includes("Invalid")) {
    div.classList.add("invalid");
  }
  setTimeout(() => {
    div.remove();
  }, 6000);
}
