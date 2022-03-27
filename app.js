let counter = 0;

let running = false;
const start = document.querySelector(`.start`);
const reset = document.querySelector(`.reset`);
const stoppingList = document.querySelector(`.stopping-list`);
const time = document.querySelector(`.time`);
time.textContent = counter;

start.addEventListener("click", startTime);
reset.addEventListener("click", resetTime);

function startTime() {
  if (running) {
    running = false;
    start.textContent = `resume`;
    stoppingList.innerHTML = `<div>${counter}</div> ${stoppingList.innerHTML}`;
  } else {
    running = true;
    start.textContent = `stop`;
  }
}
function updateTime() {
  if (running) {
    counter += 10;
    time.textContent = formatTime(counter);
  }
}
function resetTime() {
  running = false;
  start.textContent = `start`;
  counter = 0;
  time.textContent = counter;
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
const centisecondsInMs = 100;

function formatTime() {
  const hours = Math.floor(counter / hoursInMs);
  const minutes = Math.floor(counter / minutesInMs);
  const seconds = Math.floor(counter / secondsInMs);
  const centiseconds = Math.floor((counter / centisecondsInMs) % 100) / 10;

  return `${hours}:${twoDigitNumString(minutes)}:${twoDigitNumString(seconds)}`;
}

counter = setInterval(updateTime, 10);
console.log(formatTime(2));
