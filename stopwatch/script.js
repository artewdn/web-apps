const timerElement = document.getElementById("timer");
const startButtonElement = document.getElementById("start");
const stoptButtonElement = document.getElementById("stop");
const resetButtonElement = document.getElementById("reset");



let startTime = 0;
let elapsedTime = 0;
let timerInterval;


function startTimer() {
  // console.log("start");
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now()-startTime;
    timerElement.textContent = formatTime(elapsedTime);

  }, 10);

  startButtonElement.disabled = true;
  stoptButtonElement.disabled = false;
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  const hours =  Math.floor(elapsedTime / (1000 * 60 * 60 * 60));


  return (
    (hours ? (hours > 9 ? hours : "0" + hours): "00") + 
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes): "00") + 
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds): "00") + 
    ":" +
    (milliseconds > 9 ? milliseconds: "0" + milliseconds)
    );
}

function stopTimer() {
  // console.log("stop");
  clearInterval(timerInterval);
  startButtonElement.disabled = false;
  stoptButtonElement.disabled = true;
}

function resetTimer() {
  // console.log("reset");
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerElement.textContent = "00:00:00";

  startButtonElement.disabled = false;
  stoptButtonElement.disabled = true;
}

startButtonElement.addEventListener("click", startTimer);

stoptButtonElement.addEventListener("click", stopTimer);

resetButtonElement.addEventListener("click", resetTimer);