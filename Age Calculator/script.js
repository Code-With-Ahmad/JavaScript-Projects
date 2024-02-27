let input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  // Users Data
  let birthData = new Date(input.value);
  let birthMonth = birthData.getMonth() + 1;
  let birthYear = birthData.getFullYear();
  let birthDate = birthData.getDate();

  //   Now Calculating Todays Date ;

  let currentData = new Date();
  let currentMonth = currentData.getMonth() + 1;
  let currentYear = currentData.getFullYear();
  let currentDate = currentData.getDate();

  // Difference

  let date, month, year;
  year = currentYear - birthYear;
  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    year--;
    month = 12 + currentMonth - birthMonth;
  }
  if (currentDate >= birthDate) {
    date = currentDate - birthDate;
  } else {
    month--;
    date = getDaysInMonth(birthYear, birthMonth) + currentDate - birthDate;
  }
  if (month < 0) {
    month = 11;
    year--;
  }
  document.getElementById(
    "result"
  ).innerHTML = `You Are <span>${year} year</span>  , <span>${month} monts</span> and <span>${date} days </span> old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDay();
}
