// let hr = 0; // Intial value of hr is 0
// let min = 0 ; // Intial value of min is 0
// let sec = 0 ; // Intial value of sec is 0
// let timmer = false; // It tells that the timmer is running or not 

// function start()
// {
// timmer = true;
// stopwatch();
// }
// function stop()
// {
//  timmer = false;  

 
// }
// function reset()
// {
//     timmer = false;
//     document.getElementById('mili-sec').innerHTML ="00";
//     document.getElementById('sec').innerHTML = "00";
//     document.getElementById('min').innerHTML = "00";
//     document.getElementById('hr').innerHTML = "00";
   

// }
// function stopwatch() // This is the actual function
// {
//     if(timmer == true)
//     {
//         sec = sec + 1;
    
    
//     if(sec == 60)
//     {
//         min = min + 1;
//         sec = 0;
//         milli = 0;
//     }
//     if(min == 60)
//     {
//         hr = hr + 1;
//         min = 0;
//         sec = 0;
//         milli = 0;
//     }

    
//     document.getElementById('sec').innerHTML = sec;
//     document.getElementById('min').innerHTML = min;
//     document.getElementById('hr').innerHTML = hr;
//     setTimeout("stopwatch()" , 1000);
// }

// }


let hr = 0;
let min = 0;
let sec = 0;
let timer;

function start() {
  if (!timer) // It checks that the "timer" is undefined or null 
  {
    timer = setInterval(stopwatch, 1000); 
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  sec = 0;
  min = 0;
  hr = 0;
  updateTimerUI();
}

function updateTimerUI() {
  document.getElementById('sec').textContent = padZeroes(sec);
  document.getElementById('min').textContent = padZeroes(min);
  document.getElementById('hr').textContent = padZeroes(hr);
}

function padZeroes(num) {
  return num < 10 ? `0${num}` : num;
}

function stopwatch() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  updateTimerUI();
}

