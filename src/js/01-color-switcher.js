const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', startSwitcherOn);
btnStop.addEventListener('click', stopSwitcherOn);

function startOrStopOnNow(trueOrFalse) {
  btnStart.disabled = trueOrFalse;
  btnStop.disabled = !trueOrFalse;
}

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startSwitcherOn() {
  startOrStopOnNow(true);

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopSwitcherOn() {
  startOrStopOnNow(false);

  clearInterval(intervalId);
}
