let counter = 0;

let running = false;
const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);
const centiseconds = document.querySelector(`.centiseconds`);
const start = document.querySelector(`.start`);
const reset = document.querySelector(`.reset`);
const stoppingList = document.querySelector(`.stopping-list`);
const timeContainer = document.querySelector(`.time-container`);
// time.textContent = counter;

start.addEventListener("click", startTime);
reset.addEventListener("click", resetTime);

function startTime() {
  if (running) {
    running = false;
    start.textContent = `resume`;
    start.style.color = "rgb(30, 226, 30)";

    stoppingList.innerHTML = `<div>${hours.textContent}:${minutes.textContent}:${seconds.textContent}.${centiseconds.textContent}</div> ${stoppingList.innerHTML}`;
  } else {
    running = true;
    start.textContent = `stop`;
    start.style.color = "red";
  }
}

function updateTime() {
  if (running) {
    counter += 10;
    setTime();
  }
}
function resetTime() {
  running = false;
  start.textContent = `start`;
  start.style.color = "rgb(30, 226, 30)";
  counter = 0;
  setTime();
  stoppingList.innerHTML = ``;
}
function twoDigitNumString(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
// 1s = 1000ms
// 1min = 60s
// 1hr = 60min
const hoursInMs = 60 * 60 * 1000;
const minutesInMs = 60 * 1000;
const secondsInMs = 1000;
const centisecondsInMs = 10;

function setTime() {
  // counter = minutesInMs * 88000 + 757;

  hours.textContent = twoDigitNumString(Math.floor(counter / hoursInMs));

  minutes.textContent = twoDigitNumString(
    Math.floor(counter / minutesInMs) % 60
  );

  seconds.textContent = twoDigitNumString(
    Math.floor(counter / secondsInMs) % 60
  );

  centiseconds.textContent = twoDigitNumString(
    Math.floor(counter / centisecondsInMs) % 100
  );
}
// formatTime(

counter = setInterval(updateTime, 10);
console.log(formatTime(2));
