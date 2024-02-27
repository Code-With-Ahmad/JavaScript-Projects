let launchDate = new Date("Dec 31 , 2024  00:00:00").getTime();

let countdown = setInterval(() => {
  let nowData = new Date().getTime();
  let distance = launchDate - nowData;
  // Formulas To get Days , Hours , Minutes , Seconds from given Time
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // This code will execute when the timmer is completed and time is finished
  if (distance < 0) {
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);
