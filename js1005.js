const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const timerDisplay = document.getElementById("timer-display");

let countdownInterval;
let remainingTime = 0;

function startCountdown() {
  const totalSeconds =
    (parseInt(hoursInput.value) || 0) * 3600 +
    (parseInt(minutesInput.value) || 0) * 60 +
    (parseInt(secondsInput.value) || 0);
  
  remainingTime = totalSeconds;
  
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function updateCountdown() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  
  timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    timerDisplay.textContent = "Time's up!";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", () => clearInterval(countdownInterval));
resetButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  timerDisplay.textContent = "00:00:00";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
});
