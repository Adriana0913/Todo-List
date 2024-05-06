let timerInterval;
let currentTime;
let isPaused = false;

function startTimer(duration) {
  let timerDisplay = document.getElementById("timer");
  let startButton = document.getElementById("startButton");
  let startBreakButton = document.getElementById("startBreakButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");

  startButton.disabled = true;
  startBreakButton.disabled = true;
  pauseButton.disabled = false;

  let timer = duration * 60;
  displayTime(timerDisplay, timer);

  timerInterval = setInterval(function () {
    if (!isPaused) {
      timer--;
      displayTime(timerDisplay, timer);
    }
    if (timer <= 0) {
      clearInterval(timerInterval);
      startButton.disabled = false;
      startBreakButton.disabled = false;
      pauseButton.disabled = true;
     resetButton.disabled = true;
    }
  }, 1000);
}

function displayTime(timerDisplay, time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById("startButton").addEventListener("click", function () {
  startTimer(25);
});

document.getElementById("startBreakButton").addEventListener("click", function () {
  startTimer(5);
});

document.getElementById("pauseButton").addEventListener("click", function () {
  isPaused = !isPaused;
});

document.getElementById("resetButton").addEventListener("click", function () {


  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "25:00";
  document.getElementById("startButton").disabled = true;
  document.getElementById("startBreakButton").disabled = true;
  document.getElementById("pauseButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
});
