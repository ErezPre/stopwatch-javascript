let counter = 0;
counter = setInterval(updateTime, 10);
// counter += 119 * 60 * 1000 + 55 * 1000;
let stoppingPointCounter = 1;

let running = false;
const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);
const centiseconds = document.querySelector(`.centiseconds`);
const start = document.querySelector(`.start`);
const reset = document.querySelector(`.reset`);
const stoppingList = document.querySelector(`.stopping-list`);
const timeContainer = document.querySelector(`.time-container`);

start.addEventListener("click", startTime);
reset.addEventListener("click", resetTime);

function startTime() {
  if (running) {
    running = false;
    start.textContent = `resume`;
    start.style.color = "rgb(30, 226, 30)";

    stoppingList.innerHTML = `<div><span class='time-item'>${stoppingPointCounter})</span> ${hours.textContent}${minutes.textContent}${seconds.textContent}${centiseconds.textContent}</div> ${stoppingList.innerHTML}`;
    stoppingPointCounter++;
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
  stoppingPointCounter = 1;
  setTime();
  stoppingList.innerHTML = ``;
  // stoppingList.style.backgroundColor = "blue";
  // stoppingList.style.width = "0";
  // stoppingList.style.padding = "0";
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
  hours.textContent = twoDigitNumString(Math.floor(counter / hoursInMs)) + ":";

  minutes.textContent =
    twoDigitNumString(Math.floor(counter / minutesInMs) % 60) + ":";

  seconds.textContent =
    twoDigitNumString(Math.floor(counter / secondsInMs) % 60) + ".";

  centiseconds.textContent = twoDigitNumString(
    Math.floor(counter / centisecondsInMs) % 100
  );
}

const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function changeColorRandom() {
  let randomHexColor = "#";
  for (let i = 0; i < 6; i++) {
    randomHexColor += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }

  document.body.style.backgroundColor = randomHexColor;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", changeColorRandom);
