let msg = document.querySelector("#message");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#subBtn");

submitBtn.addEventListener("click", () => {
  checkStrength();
});
password.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkStrength();
  }
});

function checkStrength() {
  let passwordValue = password.value;
  if (passwordValue == "") {
    msg.innerHTML = "Please Enter The Password";
    msg.style.color = "red";
  } else {
    let hasUpperCase = /[A-Z]/.test(passwordValue);
    let hasLowerCase = /[a-z]/.test(passwordValue);
    let hasNumbers = /\d/.test(passwordValue);
    let hasSymbols = /[$&+,:;=?@#|'<>.^*()%!-]/.test(passwordValue);

    if (
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumbers ||
      !hasSymbols ||
      passwordValue.length <= 4
    ) {
      msg.innerHTML =
        'Password is weak . "A Strong/Normal password must include (UpperCase , LowerCase , Symbols & Numbers)"';
      password.style.border = "2px solid red";
      msg.style.color = "red";
    } else if (passwordValue.length > 4 && passwordValue.length < 8) {
      msg.innerHTML =
        "Password is normal 'A Strong Password Must include more than 7 digits' ";
      password.style.border = "2px solid orange";
      msg.style.color = "orange";
    } else {
      msg.innerHTML = "Nice ! Your Password is strong ";
      password.style.border = "2px solid green";
      msg.style.color = "green";
    }
  }
}
