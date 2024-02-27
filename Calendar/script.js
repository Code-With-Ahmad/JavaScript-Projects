let new_date = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Monday",
  "Tuesaday",
  "Wednesday",
  "Thursay",
  "Friday",
  "Saturday",
  "Sunday",
];

let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

date.innerHTML = (new_date.getDate() < 10 ? "0" : "") + new_date.getDate();
day.innerHTML = days[new_date.getDay() - 1];
year.innerHTML = new_date.getFullYear();
month.innerHTML = months[new_date.getMonth()];
