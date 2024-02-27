setInterval(() => {
  let date = new Date();
  document.querySelector("#h").innerHTML =
    (date.getHours() < 10 ? "0" : "") + date.getHours();
  document.querySelector("#m").innerHTML =
    (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  document.querySelector("#s").innerHTML =
    (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);
