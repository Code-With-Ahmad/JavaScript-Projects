// Errors (Reference ):-
let name_Error = document.getElementById("name-error");
let phone_Error = document.getElementById("phone-error");
let email_Error = document.getElementById("email-error");
let message_Error = document.getElementById("message-error");
let submit_Error = document.getElementById("submit-error");

// Inputs (Reference ):-

let name_Input = document.getElementById("NameInput");
let email_Input = document.getElementById("EmailInput");
let message_Input = document.getElementById("MessageInput");
let phone_Input = document.getElementById("PhoneInput");
let submit_Button = document.getElementById("SubmitBtn");

name_Input.addEventListener("keyup", (e) => {
  let name = name_Input.value;
  if (name == "") {
    name_Error.innerHTML = "Name Should not be empty";
    submit_Error.innerHTML =
      "Please Fix All the Errors before Submitting the form";
    return false;
  }
  //   This will check the both digit will be alphabets
  else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    name_Error.innerHTML = "Enter Both first and last name";
    submit_Error.innerHTML =
      "Please Fix All the Errors before Submitting the form";
    return false;
  } else {
    name_Error.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
    return true;
  }
});

phone_Input.addEventListener("keyup", (e) => {
  let phone = phone_Input.value.trim();
  if (phone == "") {
    phone_Error.innerHTML = "Phone No. Should not be empty";
    submit_Error.innerHTML =
      "Please Fix All the Errors before Submitting the form";
    return false;
  } else if (phone.length < 13) {
    phone_Error.innerHTML = "length must be equal to 13 digits";
    submit_Error.innerHTML =
      "Please Fix All the Errors before Submitting the form";
    return false;
  } else if (phone.length > 13) {
    phone_Error.innerHTML = "length must be equal to 13 digits";
    submit_Error.innerHTML =
      "Please Fix All the Errors before Submitting the form";
    return false;
  } else {
    phone_Error.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
    return true;
  }
});
