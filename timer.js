const secondsElem = document.querySelector(".seconds");
const minutesElem = document.querySelector(".minutes");
const hoursElem = document.querySelector(".hours");

let seconds = 60;
let minutes = 25;
let hours = 0;
let timer;
function startTimer() {
  timer = setInterval(() => {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      minutes = 59;
      hours--;
    }

    if (hours < 0) {
      clearInterval(timer);
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    renderTimer();
  }, 100);
}

document.querySelector(".button-start").addEventListener("click", () => {
  startTimer();
  document.querySelector(".button-start").disabled = true;
});

document.querySelector(".button-stop").addEventListener("click", () => {
  clearInterval(timer);
  document.querySelector(".button-start").disabled = false;
});

document.querySelector(".button-reset").addEventListener("click", () => {
  seconds = 0;
  minutes = 25;
  hours = 0;
  renderTimer();
});

document.querySelector(".button-add-10").addEventListener("click", () => {
  minutes += 10;

  if (minutes > 59) {
    hours++;
    const difference = minutes - 60;
    minutes = difference;
  }

  renderTimer();
});

function renderTimer() {
  secondsElem.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  minutesElem.innerHTML = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  hoursElem.innerHTML = hours < 10 ? `0${hours}:` : `${hours}:`;
}
